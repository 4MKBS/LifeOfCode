#!/bin/bash

confirm() {
    local msg="$1"
    read -r -p "$msg [y/N]: " ans
    case "$ans" in
        [yY]|[yY][eE][sS]) return 0 ;;
        *) echo "Skipped."; return 1 ;;
    esac
}

# Step 1: Show largest files in /var/log
if confirm "Run: show top 10 largest files in /var/log?"; then
    echo "Top 10 largest files in /var/log:"
    du -ah /var/log | sort -rh | head -n 10
fi

echo "-----------------------------------"

# Step 2: Show files older than 7 days (preview)
if confirm "Run: preview files older than 7 days?"; then
    echo "Files older than 7 days:"
    find /var/log -type f -mtime +7
fi

echo "-----------------------------------"

# Step 3: Delete files older than 7 days
if confirm "Run: delete files older than 7 days?"; then
    echo "Deleting files older than 7 days..."
    find /var/log -type f -mtime +7 -exec rm -f {} \;
fi

echo "-----------------------------------"

# Step 4: Compress remaining .log files
if confirm "Run: compress remaining .log files?"; then
    echo "Compressing remaining log files..."
    find /var/log -type f -name "*.log" -exec gzip {} \;
fi

echo "-----------------------------------"
echo "Log cleanup completed!"