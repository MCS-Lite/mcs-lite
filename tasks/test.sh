#!/bin/bash

set -e

echo -e '\n\n=================================================';
echo -e '| 1. 💪 💪 💪  Start global linting';
echo -e '=================================================\n\n';
yarn run eslint
yarn run stylelint
yarn run flow


echo -e '\n\n=================================================';
echo -e '| 2. 🚐 🚐 🚐   Run test interface for each packages';
echo -e '=================================================\n\n';
node_modules/.bin/lerna run test --concurrency 1



echo -e '\n\n=================================================';
echo -e '| 3. 📔 📔 📔   Test for building demo page';
echo -e '=================================================\n\n';
node_modules/.bin/lerna run build --scope mcs-lite-mobile-web



# Duplicate at Netlify CI
# node_modules/.bin/lerna run build-storybook --scope mcs-lite-ui

# Duplicate at 'npm run postinstall \(prepublish\)' stage
# node_modules/.bin/lerna run build --scope mcs-lite-introduction
