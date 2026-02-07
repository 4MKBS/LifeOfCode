#!/bin/bash

# Practice job control with background tasks.
# Usage:
#   ./job-control.sh

set -u

echo "Starting 3 background jobs (sleep 30, 40, 50)..."
sleep 30 &
PID1=$!
sleep 40 &
PID2=$!
sleep 50 &
PID3=$!

echo "Started PIDs: $PID1 $PID2 $PID3"
echo
echo "Current jobs:"
jobs -l

echo
echo "Checking process status with ps:"
ps -p "$PID1,$PID2,$PID3" -o pid,ppid,stat,etime,cmd

echo
echo "Stopping PID $PID3 to demonstrate kill..."
kill "$PID3"
sleep 1

echo
echo "Jobs after killing one process:"
jobs -l

echo
echo "Waiting for remaining jobs to finish..."
wait "$PID1" "$PID2" 2>/dev/null

echo "All demo jobs finished."
