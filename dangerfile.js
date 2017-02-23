const { danger, warn, fail } = require('danger');
// import fs from 'fs';

// Make sure there are changelog entries
// const hasChangelog = danger.git.modified_files.includes('changelog.md');
// if (!hasChangelog) { fail('No Changelog changes!'); }

// Warns if there are changes to package.json without changes to Licenses.csv.
const i18nChanged = danger.git.modified_files.includes('messages.js');
const potChanged = danger.git.modified_files.includes('.pot');
if (i18nChanged && !potChanged) {
  const message = 'Changes were made to i18n, but not to .pot';
  const idea = 'Perhaps you need to run `$ npm run extract:pot`?';
  fail(`${message} - <i>${idea}</i>`);
}

// Warns if there are changes to package.json without changes to Licenses.csv.
const packageChanged = danger.git.modified_files.includes('package.json');
const licensesCSVChanged = danger.git.modified_files.includes('docs/licenses.csv');
if (packageChanged && !licensesCSVChanged) {
  const message = 'Changes were made to package.json, but not to licenses.csv';
  const idea = 'Perhaps you need to run `$ license-checker --csv --out docs/licenses.csv`?';
  warn(`${message} - <i>${idea}</i>`);
}