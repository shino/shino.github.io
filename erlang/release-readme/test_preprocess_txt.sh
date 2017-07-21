#!/bin/bash

set -e

BASEDIR=$(dirname "$0")

cd ${BASEDIR}
cat preprocess_input.txt | ./preprocess_txt.rb  > tmp_output.txt
diff -u tmp_output.txt preprocess_output.txt
