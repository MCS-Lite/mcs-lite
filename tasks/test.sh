#!/bin/bash

set -e

# global linting
npm run eslint

## Interface for each project
lerna run lint
lerna run test
lerna run build
