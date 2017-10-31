#!/bin/bash

# This script will be execute at 'postinstall' and 'prerelase' of root.

set -e

# MUST be in topological sorting
node_modules/.bin/lerna run build --ignore \
  '{mcs-lite-introduction,mcs-lite-*-web}'

# TODO: react-snapshot 2.0
rm -rf {node_modules/react-snapshot/node_modules/react,node_modules/react-snapshot/node_modules/react-dom}

# Duplicate at prepack stage
# node_modules/.bin/lerna run build --scope mcs-lite-introduction
# node_modules/.bin/lerna run build --scope mcs-lite-mobile-web
# node_modules/.bin/lerna run build --scope mcs-lite-admin-web
# node_modules/.bin/lerna run build --scope mcs-lite-landing-web
