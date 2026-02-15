#!/bin/bash

echo "Top CPU consuming processes:"
ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%cpu | head -n 10

echo "-----------------------------------"

# Step 2: Ask user for PID to kill
read -p "Enter PID to kill (or press Enter to skip): " PID

if [ ! -z "$PID" ]; then
    echo "Killing process $PID..."
    kill -9 $PID
    echo "Process killed!"
else
    echo "Skipping process kill."
fi

echo "-----------------------------------"

# Step 3: Run a process in background
echo "Starting a background process (sleep 60)..."
sleep 60 &

echo "Background process started with PID: $!"

echo "-----------------------------------"
echo "Process management tasks completed!"