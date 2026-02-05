#!/bin/bash

# Simple system monitor for CPU, memory, disk and load.
# Usage:
#   ./system-monitor.sh 5
#   ./system-monitor.sh 2 10
# Means:
#   interval_seconds [default 5], iterations [default infinite]

set -u

INTERVAL="${1:-5}"
ITERATIONS="${2:-0}"

print_header() {
    echo "==========================================================="
    echo "Timestamp            CPU%   MemUsed/Total   DiskUsed(/)   Load(1,5,15)"
    echo "==========================================================="
}

get_cpu_usage() {
    # Calculate CPU usage from /proc/stat snapshots.
    local cpu_line_1 cpu_line_2
    cpu_line_1=$(grep '^cpu ' /proc/stat)
    sleep 1
    cpu_line_2=$(grep '^cpu ' /proc/stat)

    read -r _ u1 n1 s1 i1 w1 irq1 sirq1 st1 _ <<< "$cpu_line_1"
    read -r _ u2 n2 s2 i2 w2 irq2 sirq2 st2 _ <<< "$cpu_line_2"

    local idle1=$((i1 + w1))
    local idle2=$((i2 + w2))

    local non_idle1=$((u1 + n1 + s1 + irq1 + sirq1 + st1))
    local non_idle2=$((u2 + n2 + s2 + irq2 + sirq2 + st2))

    local total1=$((idle1 + non_idle1))
    local total2=$((idle2 + non_idle2))

    local totald=$((total2 - total1))
    local idled=$((idle2 - idle1))

    if [ "$totald" -eq 0 ]; then
        echo "0.00"
    else
        awk "BEGIN {printf \"%.2f\", (($totald-$idled)*100)/$totald}"
    fi
}

print_status_line() {
    local now cpu mem disk load

    now=$(date '+%Y-%m-%d %H:%M:%S')
    cpu=$(get_cpu_usage)

    mem=$(free -h | awk 'NR==2 {print $3"/"$2}')
    disk=$(df -h / | awk 'NR==2 {print $3"/"$2}')
    load=$(awk '{print $1", "$2", "$3}' /proc/loadavg)

    printf '%-20s %-6s %-15s %-12s %s\n' "$now" "$cpu" "$mem" "$disk" "$load"
}

print_header

if [ "$ITERATIONS" -eq 0 ]; then
    while true; do
        print_status_line
        sleep "$INTERVAL"
    done
else
    for ((i=1; i<=ITERATIONS; i++)); do
        print_status_line
        sleep "$INTERVAL"
    done
fi
