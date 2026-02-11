#!/bin/bash

BASE_URL="https://www.tissotwatches.com/on/demandware.store/Sites-Americas-Site/en_US/Search-UpdateGrid?cgid=tis-men&sz=32&start="
USER_AGENT="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

echo "Starting scrape via AJAX..."

# Loop from 0 to 320 with step 32
for start in $(seq 0 32 320); do
    echo "Fetching batch starting at $start..."
    curl -s -L -A "$USER_AGENT" "${BASE_URL}${start}" > "tissot_ajax_${start}.html"
    sleep 2 # Be nice to the server
done

echo "combining files..."
cat tissot_ajax_*.html > tissot_men_combined.html

echo "Parsing..."
# Update extract_tissot.js to read from correct file or pipe it
node extract_tissot_combined.js tissot_men_combined.html > tissot_products_list_full.txt

echo "Done."
