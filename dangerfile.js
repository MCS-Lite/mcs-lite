const { danger, warn, fail } = require('danger');

const allChanges = [].concat(
  danger.git.created_files,
  danger.git.modified_files,
  danger.git.deleted_files,
);

// Warn if there is no description.
if (!danger.github.pr.body.length) {
  warn('Please add a description to your PR.');
}

// Warn if there is no labels.
if (!danger.github.issue.labels) {
  warn('Please add a label to your PR.');
}

// Warn if there is no one assign.
const someoneAssigned = danger.github.pr.assignee;
if (someoneAssigned === null) {
  warn('Please assign someone to merge this PR, and optionally include people who should review.');
}

// Warn when there is a big PR
const bigPRThreshold = 500;
if (danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
  warn(':exclamation: Big PR');
}

// Fail if there are changes to i18n without extracting to pot.
const i18nChanged = allChanges.some(e => /messages\.js/.test(e));
const potChanged = allChanges.some(e => /\.pot/.test(e));
if (i18nChanged && !potChanged) {
  const message = 'Changes were made to i18n, but not to .pot';
  const idea = 'Perhaps you need to run `$ npm run extract:pot`?';
  fail(`${message} - <i>${idea}</i>`);
}

// Warn if there are changes to package.json without changes to Licenses.csv.
const packageChanged = allChanges.some(e => /package\.json/.test(e));
const licensesCSVChanged = danger.git.modified_files.includes('docs/licenses.csv');
if (packageChanged && !licensesCSVChanged) {
  const message = 'Changes were made to package.json, but not to licenses.csv';
  const idea = 'Perhaps you need to run `$ license-checker --csv --out docs/licenses.csv`?';
  warn(`${message} - <i>${idea}</i>`);
}
