#!/bin/bash

BASE_URL="https://www.tissotwatches.com/en-us/men.html?page="
USER_AGENT="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

echo "Starting scrape..."

# Fetch pages 1 to 10
for i in {1..10}; do
    echo "Fetching page $i..."
    curl -s -L -A "$USER_AGENT" "${BASE_URL}${i}" > "tissot_page_${i}.html"
    sleep 2 # Be nice to the server
done

echo "combining files..."
cat tissot_page_*.html > tissot_men.html

echo "Parsing..."
node extract_tissot.js > tissot_products_list.txt

echo "Done. Found $(wc -l < tissot_products_list.txt) unique products."
