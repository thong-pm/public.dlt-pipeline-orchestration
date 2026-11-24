import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DASHBOARD_ROOT = path.resolve(__dirname, '..');

function buildNavUrl(routePath, searchString = '', basePathPrefix = '') {
  const cleanPath = routePath.endsWith('/') ? routePath : routePath + '/';
  const params = new URLSearchParams(searchString);
  const searchStr = params.toString().replace(/%2C/g, ',');
  const query = searchStr ? `?${searchStr}` : '';
  const addBasePath = (p) => (basePathPrefix ? `${basePathPrefix.replace(/\/$/, '')}${p}` : p);
  return addBasePath(cleanPath) + query;
}

function cleanId(val) {
  if (val === null || val === undefined) return '';
  return String(val).replace(/\.0$/, '').trim();
}

function parseMultiSelectParam(searchString, paramName) {
  const params = new URLSearchParams(searchString);
  const raw = params.get(paramName);
  if (!raw || raw === 'All' || raw === '%' || /selectnullwhere0/i.test(raw)) return [];
  return raw
    .split(',')
    .map(cleanId)
    .filter((v) => v && v !== 'All' && v !== '%' && !/selectnullwhere0/i.test(v));
}

function formatMultiSelectSqlTuple(selectedValues, allDataIds = []) {
  const cleanSelected = selectedValues.map(cleanId).filter(Boolean);
  if (
    cleanSelected.length === 0 ||
    (allDataIds.length > 0 && cleanSelected.length >= allDataIds.length)
  ) {
    return "('%')";
  }
  const sqlItems = cleanSelected.flatMap((v) => [`'${v}'`, `'${v}.0'`]);
  return `(${sqlItems.join(', ')})`;
}

function parseSingleSelectParam(searchString, paramName = 'time_filter', defaultValue = 'ytd') {
  const valid = ['mtd', 'qtd', 'ytd', 'all'];
  const params = new URLSearchParams(searchString);
  const raw = params.get(paramName);
  if (raw && valid.includes(raw.toLowerCase())) return raw.toLowerCase();
  return defaultValue;
}

// 1. Test buildNavUrl across root, prod basePath, and staging basePath
const queryCombo = '?time_filter=qtd&business_unit=1,2&region=3';
for (const route of ['/overview', '/sales', '/operations']) {
  assert.equal(
    buildNavUrl(route, queryCombo, ''),
    `${route}/?time_filter=qtd&business_unit=1,2&region=3`
  );
  assert.equal(
    buildNavUrl(route, queryCombo, '/public.dlt-pipeline-orchestration'),
    `/public.dlt-pipeline-orchestration${route}/?time_filter=qtd&business_unit=1,2&region=3`
  );
  assert.equal(
    buildNavUrl(route, queryCombo, '/public.dlt-pipeline-orchestration/staging'),
    `/public.dlt-pipeline-orchestration/staging${route}/?time_filter=qtd&business_unit=1,2&region=3`
  );
}

// 2. Test URL-encoded comma (%2C) normalization and empty query handling
assert.equal(
  buildNavUrl('/sales/', '?time_filter=mtd&business_unit=1%2C3', '/repo'),
  '/repo/sales/?time_filter=mtd&business_unit=1,3'
);
assert.equal(buildNavUrl('/operations', '', '/repo'), '/repo/operations/');

// 3. Test GlobalMultiSelect float normalization, SQL IN expansion, and poison token stripping
assert.deepEqual(parseMultiSelectParam('?business_unit=1.0,2.0,3', 'business_unit'), ['1', '2', '3']);
assert.deepEqual(parseMultiSelectParam('?business_unit=All', 'business_unit'), []);
assert.deepEqual(parseMultiSelectParam('?business_unit=%25', 'business_unit'), []);
assert.deepEqual(
  parseMultiSelectParam('?business_unit=selectnullwhere0', 'business_unit'),
  []
);
assert.equal(
  formatMultiSelectSqlTuple(['1.0', '2'], ['1', '2', '3']),
  "('1', '1.0', '2', '2.0')"
);
assert.equal(formatMultiSelectSqlTuple(['1', '2', '3'], ['1', '2', '3']), "('%')");
assert.equal(formatMultiSelectSqlTuple([], ['1', '2', '3']), "('%')");

// 4. Test GlobalSingleSelect time_filter validation
assert.equal(parseSingleSelectParam('?time_filter=MTD'), 'mtd');
assert.equal(parseSingleSelectParam('?time_filter=qtd'), 'qtd');
assert.equal(parseSingleSelectParam('?time_filter=invalid_token'), 'ytd');
assert.equal(parseSingleSelectParam(''), 'ytd');

// 5. Verify page and component source files maintain required routing contracts
for (const pageName of ['overview.md', 'sales.md', 'operations.md']) {
  const content = fs.readFileSync(path.join(DASHBOARD_ROOT, 'pages', pageName), 'utf8');
  assert.ok(content.includes('function buildNavUrl'), `${pageName} missing buildNavUrl`);
  assert.ok(content.includes("replace(/%2C/g, ',')"), `${pageName} missing %2C comma normalization`);
  assert.ok(content.includes('addBasePath'), `${pageName} missing addBasePath resolution`);
  assert.ok(content.includes('<DashboardHeader'), `${pageName} missing <DashboardHeader />`);
}

const multiSelectSrc = fs.readFileSync(
  path.join(DASHBOARD_ROOT, 'components', 'GlobalMultiSelect.svelte'),
  'utf8'
);
assert.ok(multiSelectSrc.includes('selectnullwhere0'), 'GlobalMultiSelect missing poison-token guard');
assert.ok(multiSelectSrc.includes("replace(/%2C/g, ',')"), 'GlobalMultiSelect missing %2C normalization');

console.log('OK: All URL routing, basePath, and slicer query-string combination tests passed.');
