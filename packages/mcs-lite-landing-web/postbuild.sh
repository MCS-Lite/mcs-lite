#!/bin/bash
set -e

TEMP_FILE="build/_temp.html"

for i in build/*.html ; do
  FILENAME=$i
  echo "> [postbuild.sh] remove line break of $FILENAME"
  tr -d "\n" < "$FILENAME" > "$TEMP_FILE"
  cat "$TEMP_FILE" > "$FILENAME"
done

rm "$TEMP_FILE"
