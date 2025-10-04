#!/bin/bash

# ===============================================
# Shell Functions - A Comprehensive Guide
# ===============================================

# Function basics
# ---------------
# Functions in shell scripts allow you to group commands and reuse them
# There are two common ways to define a function:

# Method 1: Using the 'function' keyword
function hello_world() {
    echo "Hello, World! (from function keyword method)"
}

# Method 2: Traditional syntax (more portable across shells)
say_hello() {
    echo "Hello, $1! (from traditional method)"
}

# Calling functions
# ----------------
echo "=== Calling Functions ==="
hello_world
say_hello "User"

# Function parameters
# ------------------
echo -e "\n=== Function Parameters ==="

function with_params() {
    echo "Function received $# parameters"
    echo "Parameter 1: $1"
    echo "Parameter 2: $2"
    echo "Parameter 3: $3"
    echo "All parameters: $@"
}

with_params apple banana cherry

# Return values
# ------------
echo -e "\n=== Return Values ==="

function return_example() {
    return 42  # Return numeric status (0-255)
}

function get_value() {
    echo "This text is the return value"  # Output as return value
}

return_example
echo "Return status: $?"

result=$(get_value)
echo "Captured return value: $result"

# Local variables
# --------------
echo -e "\n=== Local Variables ==="

function variable_scope() {
    local local_var="I am local"  # Only exists within this function
    global_var="I am global"      # Available outside the function
    echo "Inside function: local_var = $local_var"
    echo "Inside function: global_var = $global_var"
}

variable_scope
echo "Outside function: global_var = $global_var"
echo "Outside function: local_var = $local_var"  # Will be empty

# Practical examples
# -----------------
echo -e "\n=== Practical Examples ==="

# Example 1: A logging function
log() {
    local timestamp=$(date "+%Y-%m-%d %H:%M:%S")
    echo "[$timestamp] $1"
}

log "System check started"
log "Processing data..."

# Example 2: A function to check if a file exists
check_file() {
    if [ -f "$1" ]; then
        echo "File '$1' exists"
        return 0
    else
        echo "File '$1' does not exist"
        return 1
    fi
}

check_file "/etc/passwd"
check_file "/path/to/nonexistent/file"

# Example 3: Function to perform math operations
calculate() {
    if [ "$2" == "+" ]; then
        echo "$1 + $3 = $(($1 + $3))"
    elif [ "$2" == "-" ]; then
        echo "$1 - $3 = $(($1 - $3))"
    elif [ "$2" == "*" ]; then
        echo "$1 * $3 = $(($1 * $3))"
    elif [ "$2" == "/" ]; then
        echo "$1 / $3 = $(($1 / $3))"
    else
        echo "Unknown operator: $2"
    fi
}

calculate 10 "+" 5
calculate 20 "-" 7
calculate 5 "*" 4
calculate 100 "/" 5

# Example 4: Recursive function
factorial() {
    if [ $1 -le 1 ]; then
        echo 1
    else
        local prev=$(factorial $(($1 - 1)))
        echo $(($1 * prev))
    fi
}

echo "Factorial of 5 is $(factorial 5)"