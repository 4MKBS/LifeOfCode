#!/bin/bash

echo "Checking disk usage..."
df -h

echo "-----------------------------------"

# Step 2: Find largest directories
echo "Top 10 largest directories in root (/):"
du -h / 2>/dev/null | sort -rh | head -n 10

echo "-----------------------------------"

# Step 3: Show filesystem type
echo "Filesystem details:"
lsblk -f

echo "-----------------------------------"

# Step 4: Mount a disk (example)
read -p "Enter device name to mount (e.g., /dev/sdb1) or press Enter to skip: " DEVICE

if [ ! -z "$DEVICE" ]; then
    read -p "Enter mount point (e.g., /mnt/data): " MOUNT_POINT
    
    mkdir -p $MOUNT_POINT
    mount $DEVICE $MOUNT_POINT
    
    echo "Mounted $DEVICE at $MOUNT_POINT"
else
    echo "Skipping mount step."
fi

echo "-----------------------------------"
echo "Disk management tasks completed!"