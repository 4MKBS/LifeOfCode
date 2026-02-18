#!/bin/bash

# Variables
REMOTE_USER="john"
REMOTE_HOST="192.168.1.100"   # Change to your server IP
REMOTE_FILE="/home/john/test.txt"
LOCAL_DEST="/tmp"

echo "-----------------------------------"
# Step 1: Connect to remote server via SSH
echo "Connecting to remote server $REMOTE_USER@$REMOTE_HOST..."
echo "Use Ctrl+C to exit SSH session"
# ssh $REMOTE_USER@$REMOTE_HOST   # Uncomment to test

echo "-----------------------------------"
# Step 2: Copy a file from remote server using scp
echo "Copying $REMOTE_FILE from $REMOTE_HOST to $LOCAL_DEST..."
# scp $REMOTE_USER@$REMOTE_HOST:$REMOTE_FILE $LOCAL_DEST   # Uncomment to test

echo "-----------------------------------"
# Step 3: Disable root login (requires sudo)
echo "Disabling root login in SSH config..."
SSH_CONFIG="/etc/ssh/sshd_config"

sudo sed -i 's/^PermitRootLogin yes/PermitRootLogin no/' $SSH_CONFIG
sudo systemctl restart sshd

echo "Root login disabled. SSH service restarted."

echo "-----------------------------------"
echo "SSH & remote access tasks completed!"