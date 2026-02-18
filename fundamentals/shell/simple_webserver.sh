#!/bin/bash

echo "Updating package list..."
apt update -y

echo "-----------------------------------"

# Step 1: Install nginx
echo "Installing nginx..."
apt install -y nginx

echo "-----------------------------------"

# Step 2: Create a custom HTML page
WEB_PAGE="/var/www/html/index.html"
echo "Creating custom web page at $WEB_PAGE ..."
echo "<!DOCTYPE html>
<html>
<head><title>My Web Server</title></head>
<body><h1>Welcome to My Nginx Server!</h1></body>
</html>" | sudo tee $WEB_PAGE

echo "Custom web page created!"
echo "-----------------------------------"

# Step 3: Set permissions
echo "Setting permissions for web page..."
chown www-data:www-data $WEB_PAGE
chmod 644 $WEB_PAGE

echo "-----------------------------------"

# Step 4: Enable and start nginx
echo "Starting and enabling nginx..."
systemctl enable nginx
systemctl start nginx

echo "-----------------------------------"

# Step 5: Configure firewall (allow HTTP)
echo "Configuring firewall to allow HTTP..."
ufw allow 'Nginx HTTP'
ufw reload

echo "-----------------------------------"

# Step 6: Test server status
echo "Checking nginx status..."
systemctl status nginx --no-pager

echo "-----------------------------------"
echo "Web server setup completed! Access it via your server IP."