import tomlkit
import requests
import json

# 1. Load Tokens
secrets = tomlkit.load(open('.dlt/secrets.toml'))
hubspot_api_key = secrets.get('sources', {}).get('hubspot', {}).get('api_key')
procore_env = secrets.get('sources', {}).get('procore', {}).get('environment', 'sandbox')
procore_token = secrets.get('sources', {}).get('procore', {}).get(procore_env, {}).get('access_token')
xero_token = secrets.get('sources', {}).get('xero', {}).get('access_token')

if not hubspot_api_key or not procore_token or not xero_token:
    raise ValueError("Missing required API tokens in .dlt/secrets.toml")

hb_headers = {'Authorization': f'Bearer {hubspot_api_key}', 'Content-Type': 'application/json'}
pc_headers = {'Authorization': f'Bearer {procore_token}', 'Content-Type': 'application/json'}

# 2. Get Xero Tenant ID
xero_tenants_req = requests.get('https://api.xero.com/connections', headers={'Authorization': f'Bearer {xero_token}', 'Content-Type': 'application/json'})
tenant_id = xero_tenants_req.json()[0]['tenantId']

xero_headers = {
    'Authorization': f'Bearer {xero_token}',
    'Xero-tenant-id': tenant_id,
    'Accept': 'application/json'
}

# 3. Fetch all ACCREC Invoices from Xero Live
print("Fetching ACCREC Invoices directly from live Xero Demo Tenant...")
r_inv = requests.get('https://api.xero.com/api.xro/2.0/Invoices?where=Type=="ACCREC"', headers=xero_headers)
if r_inv.status_code != 200:
    raise ValueError(f"Failed to fetch Xero invoices: {r_inv.text}")

invs = r_inv.json().get('Invoices', [])
print(f"Found {len(invs)} ACCREC invoices.")

# Group by Client
clients = {}
for inv in invs:
    c_name = inv.get('Contact', {}).get('Name')
    if not c_name: continue
    total = float(inv.get('Total', 0))
    if c_name not in clients:
        clients[c_name] = 0.0
    clients[c_name] += total

sorted_clients = sorted(clients.items(), key=lambda x: x[1], reverse=True)
print(f"Found {len(sorted_clients)} unique clients.")

# Get a valid Procore Company ID
pc_comps_req = requests.get('https://sandbox.procore.com/rest/v1.0/companies', headers=pc_headers)
pc_company_id = pc_comps_req.json()[0]['id']

mapping_rows = []
business_units = ['Commercial Construction', 'Residential Joinery', 'Fitouts & Retail']
pipelines = ['827725916', '827989914', '827725917'] 
regions = ['North America', 'EMEA', 'APAC']

print("\nStarting Cross-SaaS API Sync...")

for idx, (client_name, total_billed) in enumerate(sorted_clients):
    if total_billed <= 0: continue
    
    bu = business_units[idx % len(business_units)]
    pipe = pipelines[idx % len(pipelines)]
    reg = regions[idx % len(regions)]
    
    deal_amount = round(total_billed * 1.5, 2)
    job_cost = round(total_billed * 0.6, 2)
    completion_pct = int((total_billed / deal_amount) * 100)
    
    print(f"[{idx+1}/{len(sorted_clients)}] Syncing: {client_name} (Billed: ${total_billed:,.2f}, Contract: ${deal_amount:,.2f}, Completion: {completion_pct}%)")
    
    # === HUBSPOT ===
    # 1. Company
    comp_req = requests.post('https://api.hubapi.com/crm/v3/objects/companies', headers=hb_headers, json={
        "properties": {"name": client_name, "domain": client_name.replace(' ', '').replace(',', '').lower() + ".com"}
    })
    comp_id = None
    if comp_req.status_code in [200, 201]:
        comp_id = comp_req.json()['id']
    elif comp_req.status_code == 409:
        comp_id = comp_req.json().get('message').split('Id ')[-1]
        
    # 2. Deal (Includes native hs_forecast_amount)
    deal_req = requests.post('https://api.hubapi.com/crm/v3/objects/deals', headers=hb_headers, json={
        "properties": {
            "dealname": f"{client_name} - Master Contract",
            "amount": str(deal_amount),
            "hs_forecast_amount": str(deal_amount),
            "dealstage": "closedwon",
            "pipeline": pipe,
            "closedate": "2026-06-15T00:00:00.000Z"
        }
    })
    if deal_req.status_code in [200, 201]:
        deal_id = deal_req.json()['id']
        
        # Associate Deal to Company
        if comp_id:
            requests.put(f'https://api.hubapi.com/crm/v3/objects/deals/{deal_id}/associations/companies/{comp_id}/5', headers=hb_headers)
            
        # 3. Line Item (Cost)
        li_req = requests.post('https://api.hubapi.com/crm/v3/objects/line_items', headers=hb_headers, json={
            "properties": {
                "name": "Master Services",
                "price": str(deal_amount),
                "hs_cost_of_goods_sold": str(job_cost),
                "quantity": "1"
            }
        })
        if li_req.status_code in [200, 201]:
            li_id = li_req.json()['id']
            requests.put(f'https://api.hubapi.com/crm/v3/objects/line_items/{li_id}/associations/deals/{deal_id}/20', headers=hb_headers)
    
    # === PROCORE ===
    proj_num = f"PRJ-{1000 + idx}"
    proj_payload = {
        "project": {
            "name": f"{client_name} - Master Project",
            "active": True,
            "project_number": proj_num,
            "completion_percentage": completion_pct
        }
    }
    proj_req = requests.post(f'https://sandbox.procore.com/rest/v1.0/projects?company_id={pc_company_id}', headers=pc_headers, json=proj_payload)
    
    # Save mapping
    mapping_rows.append(f"\"{client_name}\",\"{proj_num}\",\"{bu}\",\"{reg}\"")
    
# Update mapping CSV
mapping_csv = "client_name,project_number,business_unit,region\n" + "\n".join(mapping_rows)
with open('dbt_transform/seeds/seed_project_mapping.csv', 'w') as f:
    f.write(mapping_csv)

print("\nSync Complete. seed_project_mapping.csv updated with True Live Xero Clients and hs_forecast_amount.")
