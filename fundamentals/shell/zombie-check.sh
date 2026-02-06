#!/bin/bash

# Check for zombie processes and print parent process details.
# Usage:
#   ./zombie-check.sh

set -u

zombies=$(ps -eo pid,ppid,stat,comm --no-headers | awk '$3 ~ /^Z/ {print}')

if [ -z "$zombies" ]; then
    echo "No zombie process found."
    exit 0
fi

echo "Zombie process(es) found:"
echo "PID   PPID  STAT  COMMAND"
echo "$zombies"
echo

echo "Parent process details:"
while read -r pid ppid stat comm; do
    parent_line=$(ps -p "$ppid" -o pid,ppid,stat,comm --no-headers)
    if [ -n "$parent_line" ]; then
        echo "Zombie PID $pid belongs to parent -> $parent_line"
    else
        echo "Zombie PID $pid parent process ($ppid) not found."
    fi
done <<< "$zombies"
