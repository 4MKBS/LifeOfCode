#!/bin/bash

# Monitor a process by name and optionally restart it if missing.
# Usage:
#   ./process-monitor.sh <process_name>
#   ./process-monitor.sh <process_name> "<restart_command>"
# Example:
#   ./process-monitor.sh nginx "sudo systemctl start nginx"

set -u

if [ "$#" -lt 1 ]; then
    echo "Usage: $0 <process_name> [restart_command]"
    exit 1
fi

PROCESS_NAME="$1"
RESTART_CMD="${2:-}"
INTERVAL="${INTERVAL:-5}"

LOG_DIR="${LOG_DIR:-./logs}"
LOG_FILE="$LOG_DIR/process-monitor.log"
mkdir -p "$LOG_DIR"

log() {
    local level="$1"
    shift
    local message="$*"
    printf '[%s] [%s] %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$level" "$message" | tee -a "$LOG_FILE"
}

check_process() {
    pgrep -x "$PROCESS_NAME" >/dev/null 2>&1
}

while true; do
    if check_process; then
        pid_list=$(pgrep -x "$PROCESS_NAME" | xargs)
        log "INFO" "Process '$PROCESS_NAME' is running. PID(s): $pid_list"
    else
        log "ERROR" "Process '$PROCESS_NAME' is NOT running."

        if [ -n "$RESTART_CMD" ]; then
            log "WARN" "Trying restart command: $RESTART_CMD"
            eval "$RESTART_CMD"
            sleep 2

            if check_process; then
                pid_list=$(pgrep -x "$PROCESS_NAME" | xargs)
                log "INFO" "Restart successful. New PID(s): $pid_list"
            else
                log "ERROR" "Restart failed for '$PROCESS_NAME'"
            fi
        fi
    fi

    sleep "$INTERVAL"
done
