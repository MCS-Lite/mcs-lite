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
