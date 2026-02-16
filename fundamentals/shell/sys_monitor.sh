#!/bin/bash

echo "=== Question 11: System Monitoring & Alerts ==="

# Step 1: Check system uptime and load
echo "System uptime and load averages:"
uptime

# Step 2: Monitor CPU and memory usage every 5 seconds
echo "Monitoring CPU and memory usage (press Ctrl+C to stop)..."
while true; do
    # CPU usage
    CPU_USAGE=$(top -bn1 | grep "Cpu(s)" | awk '{print 100 - $8}')
    
    # Memory usage
    MEM_USAGE=$(free | awk '/Mem:/ {printf("%.2f"), $3/$2 * 100}')

    echo "CPU Usage: $CPU_USAGE% | Memory Usage: $MEM_USAGE%"

    # Step 3: Log warning if CPU > 80%
    if (( $(echo "$CPU_USAGE > 80" | bc -l) )); then
        echo "$(date): WARNING! CPU usage high: $CPU_USAGE%" >> /var/log/cpu_alert.log
    fi

    # Step 4: Display top 5 memory-consuming processes
    echo "Top 5 memory-consuming processes:"
    ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%mem | head -n 6

    echo "-----------------------------------------"
    sleep 5
done