#!/bin/bash

FILE="/var/log/syslog"   # Change file if needed

echo "Working on file: $FILE"
echo "-----------------------------------"

# Step 1: Find lines containing "error"
echo "Lines containing 'error':"
grep -i "error" $FILE | head

echo "-----------------------------------"

# Step 2: Count occurrences of "error"
echo "Count of 'error' occurrences:"
grep -i "error" $FILE | wc -l

echo "-----------------------------------"

# Step 3: Extract specific columns (example: first 5 columns)
echo "Extracting first 5 columns:"
awk '{print $1, $2, $3, $4, $5}' $FILE | head

echo "-----------------------------------"

# Step 4: Sort data (unique lines)
echo "Unique sorted lines:"
sort $FILE | uniq | head

echo "-----------------------------------"

# Step 5: Show last 10 lines (real-time logs use case)
echo "Last 10 lines of file:"
tail -n 10 $FILE

echo "-----------------------------------"
echo "Text processing tasks completed!"