#!/bin/bash

set -e

node_modules/.bin/lerna run build --scope mcs-lite-design
node_modules/.bin/lerna run build --scope mcs-lite-icon
node_modules/.bin/lerna run build --scope mcs-lite-theme
node_modules/.bin/lerna run build --scope mcs-lite-ui
