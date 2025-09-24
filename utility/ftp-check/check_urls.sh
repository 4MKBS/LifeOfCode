#!/bin/bash
#
# URL Status Checker
# Description: Script to check HTTP status of URLs in parallel
# Author: 4MKBS (adapted from LifeOfCode repository)
# Usage: ./check_urls.sh
#

URL_FILE="ftplinks.txt"
OUTPUT_FILE="status_report.txt"
export OUTPUT_FILE

> "$OUTPUT_FILE"

check_url() {
    url=$1
    status_code=$(curl -o /dev/null -s -w "%{http_code}" --max-time 3 "$url")
    if [ "$status_code" -eq 200 ]; then
        echo "[LIVE] $url" | tee -a "$OUTPUT_FILE"
    elif [ "$status_code" -eq 000 ]; then
        echo "[DOWN] $url (Timeout or no response within 3s)" | tee -a "$OUTPUT_FILE"
    else
        echo "[DOWN] $url (Status: $status_code)" | tee -a "$OUTPUT_FILE"
    fi
}

export -f check_url

# Check if URL file exists
if [ ! -f "$URL_FILE" ]; then
    echo "Error: $URL_FILE not found. Creating an empty file."
    echo "# Add URLs to check (one per line)" > "$URL_FILE"
    echo "https://example.com" >> "$URL_FILE"
    echo "https://github.com" >> "$URL_FILE"
    echo "Please add your URLs to $URL_FILE and run again."
    exit 1
fi

echo "Checking URLs from $URL_FILE (running 20 checks in parallel)..."
# Run 20 URLs in parallel at a time
cat "$URL_FILE" | xargs -n 1 -P 20 -I {} bash -c 'check_url "$@"' _ {}

echo "Results saved to $OUTPUT_FILE"