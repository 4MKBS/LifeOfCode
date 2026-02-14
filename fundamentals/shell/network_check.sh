#!/bin/bash

echo "Checking IP address..."
ip a

echo "-----------------------------------"

# Step 2: Test internet connectivity
echo "Pinging Google (8.8.8.8)..."
ping -c 4 8.8.8.8

echo "-----------------------------------"

# Step 3: Test DNS resolution
echo "Checking DNS resolution (google.com)..."
ping -c 4 google.com

echo "-----------------------------------"

# Step 4: Check default gateway
echo "Checking default gateway..."
ip route

echo "-----------------------------------"

# Step 5: Restart network service
echo "Restarting network service..."

if systemctl list-units --type=service | grep -q NetworkManager; then
    systemctl restart NetworkManager
elif systemctl list-units --type=service | grep -q networking; then
    systemctl restart networking
else
    echo "No known network service found!"
fi

echo "-----------------------------------"
echo "Network check completed!"