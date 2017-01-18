#!/bin/bash

set -e

npm run eslint
lerna run lint
lerna run test
