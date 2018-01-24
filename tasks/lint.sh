#!/bin/bash

set -e

echo -e '\n\n=================================================';
echo -e '| 1. 💪 💪 💪  Start global linting';
echo -e '=================================================\n\n';
yarn run eslint
yarn run flow # TODO
