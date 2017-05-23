#!/bin/bash

set -e

# MUST be in topological sorting
node_modules/.bin/lerna run build --ignore \
  '{mcs-lite-introduction,mcs-lite-mobile-web}'

# Duplicate at 'npm run prepublish' stage
# node_modules/.bin/lerna run build --scope mcs-lite-introduction
# node_modules/.bin/lerna run build --scope mcs-lite-mobile-web
