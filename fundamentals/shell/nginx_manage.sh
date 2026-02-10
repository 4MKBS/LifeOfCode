#!/bin/bash

echo "Updating package list..."
apt update -y

echo "-----------------------------------"

# Step 1: Install nginx
echo "Installing nginx..."
apt install -y nginx

echo "-----------------------------------"

# Step 2: Check if nginx is running
echo "Checking nginx status..."
systemctl status nginx --no-pager

echo "-----------------------------------"

# Step 3: Enable nginx on boot
echo "Enabling nginx to start on boot..."
systemctl enable nginx

echo "-----------------------------------"

# Step 4: Remove nginx completely (optional)
read -p "Do you want to remove nginx? (yes/no): " choice

if [ "$choice" == "yes" ]; then
    echo "Stopping nginx..."
    systemctl stop nginx

    echo "Removing nginx..."
    apt purge -y nginx nginx-common

    echo "Removing unused dependencies..."
    apt autoremove -y

    echo "Nginx removed successfully!"
else
    echo "Nginx is still installed and running."
fi

echo "-----------------------------------"
echo "Task completed!"