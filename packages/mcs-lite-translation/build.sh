#!/bin/bash
set -e

for i in src/* ; do
  if [ -d "$i" ]; then
    PROJECT=$(basename "$i")

    node_modules/.bin/react-intl-po po2json \
      "src/$PROJECT/*.po" \
      -m "src/$PROJECT/messages.json" \
      -o "lib/$PROJECT.json"
  fi
done
