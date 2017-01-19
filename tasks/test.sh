#!/bin/bash

set -e

npm run eslint


## Interface of projects
lerna run lint
lerna run test
lerna run clean
lerna run build
