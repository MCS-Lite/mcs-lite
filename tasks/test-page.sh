#!/bin/bash

set -e

echo -e '\n\n=================================================';
echo -e '| 3. 📔 📔 📔   Test for building demo page';
echo -e '=================================================\n\n';
node_modules/.bin/lerna run build --scope mcs-lite-mobile-web
node_modules/.bin/lerna run build --scope mcs-lite-admin-web

# Duplicate at Netlify CI
# node_modules/.bin/lerna run build-storybook --scope mcs-lite-ui
# node_modules/.bin/lerna run build --scope mcs-lite-introduction
# node_modules/.bin/lerna run build --scope mcs-lite-landing-web
