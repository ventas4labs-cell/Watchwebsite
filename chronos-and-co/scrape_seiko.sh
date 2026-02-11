#!/bin/bash

USER_AGENT="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
BASE_URL="https://www.jomashop.com/seiko.html"

for i in {1..5}; do
    echo "Fetching page $i..."
    curl -s -L -A "$USER_AGENT" "${BASE_URL}?p=${i}" -o "seiko_page_${i}.html"
    sleep 2
done
