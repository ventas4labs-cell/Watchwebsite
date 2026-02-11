#!/bin/bash
# macOS compatible array population
files=()
while IFS= read -r line; do
    files+=("$line")
done < <(find public/watches -mindepth 1 -maxdepth 1 -type d | grep -v "orient" | sort)

total=${#files[@]}
batch_size=30
current=0

echo "Found $total directories to push."

while [ $current -lt $total ]; do
    end=$((current + batch_size))
    if [ $end -gt $total ]; then end=$total; fi
    
    echo "Processing batch: $current to $end"
    
    # Git add the batch
    for ((i=current; i<end; i++)); do
        directory="${files[$i]}"
        if [ -d "$directory" ]; then
            git add "$directory"
        fi
    done
    
    # Commit if changes staged
    if ! git diff --cached --quiet; then
        git commit -m "Add asset batch $current-$end"
        echo "Pushing batch..."
        git push origin main
    else
        echo "No changes in batch $current-$end"
    fi
    
    current=$end
done

echo "Pushing remaining files..."
git add .
if ! git diff --cached --quiet; then
    git commit -m "Add remaining project files"
    git push origin main
fi

echo "All done!"
