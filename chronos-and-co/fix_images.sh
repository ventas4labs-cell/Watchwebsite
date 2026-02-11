#!/bin/bash

# Define URLs (using Wikimedia Redirects)
TIMEX_URL="https://commons.wikimedia.org/wiki/Special:Redirect/file/Timex_Weekender.jpg"
SEIKO_URL="https://commons.wikimedia.org/wiki/Special:Redirect/file/Seiko_5_SNKA23_watch_-_2.JPG"
STAUER_URL="https://commons.wikimedia.org/wiki/Special:Redirect/file/Vacheron_Constantin_Patrimony_gold_watch.jpg"
# Using a generic placeholder for Bulova from Pexels if Wikimedia fails, or finding a Bulova file.
# Let's try to find a Bulova file on the fly/guess, or just use the Stauer one (Vintage Gold) for Bulova as a fallback if needed.
# But better: Use the verified Timex URL for Timex.
# Use the verified Seiko URL for Seiko.
# Use the verified Stauer URL for Stauer.

echo "Downloading placeholder images..."

curl -L -o "timex_placeholder.jpg" -A "Mozilla/5.0" "$TIMEX_URL"
curl -L -o "seiko_placeholder.jpg" -A "Mozilla/5.0" "$SEIKO_URL"
curl -L -o "stauer_placeholder.jpg" -A "Mozilla/5.0" "$STAUER_URL"

# Verify downloads
for branding in timex seiko stauer; do
    if [[ -f "${branding}_placeholder.jpg" ]]; then
        size=$(stat -f%z "${branding}_placeholder.jpg")
        if [[ $size -gt 5000 ]]; then
            echo "$branding placeholder valid ($size bytes)."
        else
            echo "WARNING: $branding placeholder is too small ($size bytes). Check URL."
            rm "${branding}_placeholder.jpg"
        fi
    else
        echo "ERROR: $branding placeholder failed to download."
    fi
done

# Apply to folders
echo "Applying placeholders..."

# Timex
if [[ -f "timex_placeholder.jpg" ]]; then
    find public/watches -type d -name "timex-*" | while read dir; do
        cp "timex_placeholder.jpg" "$dir/default.jpg"
        echo "Updated $dir/default.jpg"
    done
fi

# Seiko
if [[ -f "seiko_placeholder.jpg" ]]; then
    find public/watches -type d -name "seiko-*" | while read dir; do
        cp "seiko_placeholder.jpg" "$dir/default.jpg"
        echo "Updated $dir/default.jpg"
    done
fi

# Stauer
if [[ -f "stauer_placeholder.jpg" ]]; then
    find public/watches -type d -name "stauer-*" | while read dir; do
        cp "stauer_placeholder.jpg" "$dir/default.jpg"
        echo "Updated $dir/default.jpg"
    done
    # Use Stauer placeholder for Bulova (Dressy/Gold vibe)
    find public/watches -type d -name "bulova-*" | while read dir; do
        cp "stauer_placeholder.jpg" "$dir/default.jpg"
        echo "Updated $dir/default.jpg (Bulova)"
    done
fi

# Orient (Use Seiko placeholder as they are similar style)
if [[ -f "seiko_placeholder.jpg" ]]; then
    find public/watches -type d -name "orient-*" | while read dir; do
        cp "seiko_placeholder.jpg" "$dir/default.jpg"
        rm -f "$dir/default.png" # Clean up
        echo "Updated $dir/default.jpg (Orient)"
    done

    # Tissot (Use Seiko placeholder for steel/sporty look)
    find public/watches -type d -name "tissot-*" | while read dir; do
        cp "seiko_placeholder.jpg" "$dir/default.jpg"
        rm -f "$dir/default.png" # Clean up
        echo "Updated $dir/default.jpg (Tissot)"
    done
fi

# Clean up
# rm *_placeholder.jpg
echo "Done."
