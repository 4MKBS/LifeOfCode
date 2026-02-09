#!/bin/bash

# Variables
read -p "Enter username: " USERNAME
read -s -p "Enter password: " PASSWORD
echo
read -p "Enter secure directory [/secure-data]: " SECURE_DIR
SECURE_DIR=${SECURE_DIR:-/secure-data}

echo "Creating user: $USERNAME"

# Step 1: Create user
useradd -m -s /bin/bash $USERNAME

# Step 2: Set password
echo "$USERNAME:$PASSWORD" | chpasswd

# Step 3: Give sudo access
usermod -aG sudo $USERNAME

# Step 4: Create secure directory
mkdir -p $SECURE_DIR

# Step 5: Set ownership to john
chown $USERNAME:$USERNAME $SECURE_DIR

# Step 6: Set permissions (only john can access)
chmod 700 $SECURE_DIR

echo "-----------------------------------"
echo "User $USERNAME created and configured successfully!"
echo "Secure directory $SECURE_DIR is restricted."