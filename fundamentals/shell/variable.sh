#!/bin/bash

# variable.sh - Demonstrates variable usage in shell scripting

# Variable declaration and assignment
# No spaces are allowed around the equal sign
NAME="John"
AGE=30

# Accessing variable values with the $ symbol
echo "Hello, my name is $NAME and I am $AGE years old."

# Variables can hold the output of commands (command substitution)
CURRENT_DIR=$(pwd)
echo "Current directory: $CURRENT_DIR"

# Arithmetic operations on variables
BIRTH_YEAR=$((2023 - AGE))
echo "$NAME was born around $BIRTH_YEAR."

# String manipulation
GREETING="Hello $NAME"
echo "$GREETING"
echo "Length of greeting: ${#GREETING}"

# Environment variables (pre-defined)
echo "Home directory: $HOME"
echo "Current user: $USER"

# User input
echo -n "Enter your favorite programming language: "
read LANGUAGE
echo "So, you like $LANGUAGE!"

# Array variables
FRUITS=("Apple" "Banana" "Orange")
echo "First fruit: ${FRUITS[0]}"
echo "All fruits: ${FRUITS[@]}"
echo "Number of fruits: ${#FRUITS[@]}"

# Variable scope
function demonstrate_scope {
    local LOCAL_VAR="Only visible within function"
    GLOBAL_VAR="Visible everywhere after function call"
    echo "Inside function: $LOCAL_VAR"
}

demonstrate_scope
echo "Global variable: $GLOBAL_VAR"
echo "Local variable (should be empty): $LOCAL_VAR"