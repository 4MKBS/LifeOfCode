#!/bin/bash

SOURCE="/home"
DEST="/backup"
DATE=$(date +%Y-%m-%d)
BACKUP_FILE="$DEST/home_backup_$DATE.tar.gz"

echo "Creating backup directory if not exists..."
mkdir -p $DEST

echo "-----------------------------------"

# Step 1: Create backup
echo "Backing up $SOURCE to $BACKUP_FILE ..."
tar -czf $BACKUP_FILE $SOURCE

echo "Backup completed!"

echo "-----------------------------------"

# Step 2: Setup cron job
echo "Setting up cron job to run daily at 2 AM..."

CRON_JOB="0 2 * * * /bin/bash $(realpath $0)"

# Add cron job if not already exists
(crontab -l 2>/dev/null | grep -v -F "$0"; echo "$CRON_JOB") | crontab -

echo "Cron job added!"

echo "-----------------------------------"
echo "Automation setup completed!"