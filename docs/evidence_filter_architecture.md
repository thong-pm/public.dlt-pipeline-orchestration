# Evidence.dev Dashboard Filtering & URL Synchronization Architecture

## Overview
This document details the architectural rules, state behavior, and implementation patterns established for multi-slicer filtering and URL query parameter synchronization in Evidence.dev dashboards.

---

## 1. Input Component State Asymmetry

Evidence.dev handles different input components using distinct state mechanisms:

| Component | State Structure | Auto-initialization Behavior |
| :--- | :--- | :--- |
| `<Dropdown>` | Object: `{ value: "...", label: "..." }` | Populates `inputs.<name>.value` natively on load via `defaultValue`. |
| `<ButtonGroup>` | Primitive string (e.g. `'ytd'`) | **Does NOT auto-populate `inputs.<name>`** from the `default` prop until clicked. Must be initialized in `onMount`. |

### Critical Rule for `onMount`:
* **DO**: Set `inputs.time_filter` in `onMount` from the URL parameter or default string `'ytd'`.
* **NEVER**: Overwrite `inputs.business_unit` or `inputs.region` in `onMount` with plain strings (e.g., `inputs.business_unit = 'All'`). Doing so destroys Evidence's internal proxy object (`{ value, label }`), turning `.value` into `undefined` and breaking SQL filtering.

---

## 2. Multi-Select Dropdown Component & Surrogate Key Rules

### Correct Multi-Select `<Dropdown>` Definition Pattern:
```html
<Dropdown name="business_unit" data={bu_list} value=business_unit_id label=business_unit title="Business Unit" multiple=true selectAllByDefault=true defaultValue={defaultBu}>
</Dropdown>
```

### Mandatory Rules:
1. **Surrogate Key Binding**:
   - `value=business_unit_id` (integer surrogate key from dimension tables, cast to string in SQL: `select cast(business_unit_id as text) as business_unit_id...`).
   - `label=business_unit` (human-readable label displayed in the dropdown menu UI).
2. **Integer ID URL Parameter Serialization**:
   - URL parameters encode clean comma-separated surrogate key IDs (e.g., `?business_unit=1,3&region=All`).
   - When all items are selected or no items filtered, format as `'All'` in the URL (`?business_unit=All&region=All`).
   - Eliminate `.0` float string artifacts by casting integer IDs as text (`cast(business_unit_id as text)`).
3. **No Duplicate "All" Option**:
   - Do **NOT** render `<DropdownOption value="%" valueLabel="All"/>` inside multi-select dropdowns. Evidence provides built-in **"Select all"** and **"Clear selection"** buttons.

---

## 3. Dynamic SQL Query & Multi-Select Tuple SQL Matching

When `multiple=true` is enabled, Evidence evaluates `inputs.business_unit.value` into a DuckDB tuple expression (e.g., `('1', '3', '2')` or `('%')` or `(select null where 0)`).

### Dynamic Option Query Pattern:
```sql bu_list
select cast(business_unit_id as text) as business_unit_id, business_unit 
from postgres.seed_dim_business_units 
order by cast(business_unit_id as int)
```

### Unquoted Tuple SQL Filter Clause Pattern:
Do **NOT** wrap single quotes `'` around `${inputs.business_unit.value}` in SQL. Wrap the expression unquoted to match tuple semantics:

```sql
SELECT *
FROM postgres.fct_executive_cockpit
WHERE ('%' IN ${inputs.business_unit.value} 
       OR (SELECT null WHERE 0) IN ${inputs.business_unit.value} 
       OR cast(business_unit_id as text) IN ${inputs.business_unit.value})
  AND ('%' IN ${inputs.region.value} 
       OR (SELECT null WHERE 0) IN ${inputs.region.value} 
       OR cast(region_id as text) IN ${inputs.region.value})
```

- **When "All" is selected** (`'%'`): `'%' IN ('%')` evaluates to **`TRUE`** (returns all records).
- **When "Clear selection" is clicked**: `(SELECT null WHERE 0) IN (SELECT null WHERE 0)` evaluates to **`TRUE`** (falls back to showing all records).
- **When specific items are selected** (`'1'`, `'3'`): `cast(business_unit_id as text) IN ('1', '3')` evaluates to **`TRUE`** for those dimension IDs.

---

## 4. URL Parameter Synchronization & Bidirectional Mapping

To support shareable URLs (e.g. `?time_filter=ytd&business_unit=1,3&region=All`), the page uses a bidirectional mapping strategy:

### A. Synchronous Time Filter Initialization (`getInitialTimeFilter`)
To prevent `activeFilter` from defaulting to `'ytd'` before `onMount` or URL reading completes, compute initial state synchronously during script compilation:

```js
function getInitialTimeFilter() {
  if (!browser) return 'ytd';
  const search = new URLSearchParams(window.location.search);
  const val = search.get('time_filter') || sessionStorage.getItem('evidence_time_filter');
  const validFilters = ['ytd', 'qtd', 'mtd', 'all'];
  return (val && validFilters.includes(val.toLowerCase())) ? val.toLowerCase() : 'ytd';
}

let initialTf = getInitialTimeFilter();
let activeFilter = initialTf;
$: activeFilter = inputs?.time_filter || initialTf;
```

### B. URL Parameter Formatter (`formatFilterForUrl`)
Formats multi-select proxy objects into clean comma-separated ID strings, stripping float `.0` decimals and mapping full selections back to `'All'`:
```js
function formatFilterForUrl(inputObj) {
  if (!inputObj) return 'All';
  if (Array.isArray(inputObj?.rawValues)) {
    const clean = inputObj.rawValues
      .map(x => String(x.value).replace(/\.0$/, ''))
      .filter(v => v !== '%' && v !== 'All');
    if (clean.length === 0 || clean.length >= 3) return 'All';
    return clean.join(',');
  }
  const str = String(inputObj?.value || inputObj).replace(/[\(\)'\s]/g, '').replace(/\.0/g, '');
  if (!str || str === '%' || str === 'All' || str.includes('selectnullwhere0')) return 'All';
  return str;
}
```

---

## 5. Troubleshooting Checklist

| Symptom | Cause | Solution |
| :--- | :--- | :--- |
| `[object Object]` in URL | Passing `inputs.business_unit` directly to `searchParams.set()` | Use `formatFilterForUrl(inputs.business_unit)` to extract clean values. |
| `Parser Error: syntax error at or near "1.0"` | Quoting `${inputs.business_unit.value}` in SQL string | Use unquoted tuple matching: `cast(id as text) IN ${inputs.business_unit.value}`. |
| Dropdown selection resets immediately | `{#key}` block re-rendering or assigning plain strings in `onMount` | Remove `{#key}` and initialize default values via `defaultValue`. |
| Decimal numbers `1.0, 3.0` in URL | Un-casted integer surrogate keys in dynamic SQL list | Query IDs as text (`select cast(business_unit_id as text) as business_unit_id...`). |


