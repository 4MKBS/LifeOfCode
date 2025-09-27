#!/bin/bash

# Shell Script Data Types
# ======================

echo "===== Shell Script Data Types ====="

# 1. Strings
# ----------
echo -e "\n=== Strings ==="
str="Hello, World!"
echo "String: $str"
echo "Length: ${#str}"
echo "Substring: ${str:0:5}"
echo "Replace: ${str/Hello/Hi}"

# 2. Integers
# -----------
echo -e "\n=== Integers ==="
num1=10
num2=5
echo "Addition: $((num1 + num2))"
echo "Subtraction: $((num1 - num2))"
echo "Multiplication: $((num1 * num2))"
echo "Division: $((num1 / num2))"
echo "Modulus: $((num1 % num2))"

# 3. Floating point (not natively supported)
# -----------------------------------------
echo -e "\n=== Floating point (using bc) ==="
float1=10.5
float2=2.5
echo "Addition: $(echo "$float1 + $float2" | bc)"
echo "Division: $(echo "scale=2; $float1 / $float2" | bc)"

# 4. Arrays
# ---------
echo -e "\n=== Indexed Arrays ==="
fruits=("Apple" "Banana" "Cherry" "Date")
echo "First item: ${fruits[0]}"
echo "All items: ${fruits[@]}"
echo "Count: ${#fruits[@]}"
echo "Indices: ${!fruits[@]}"

# 5. Associative Arrays (requires bash 4+)
# ---------------------------------------
echo -e "\n=== Associative Arrays ==="
declare -A user
user=([name]="John" [age]=30 [city]="New York")
echo "Name: ${user[name]}"
echo "All values: ${user[@]}"
echo "All keys: ${!user[@]}"

# 6. Boolean-like values
# ---------------------
echo -e "\n=== Boolean-like values ==="
# In shell, true=0 (success) and false=1 (failure)
is_valid=true
if $is_valid; then
    echo "Condition is true"
fi

# 7. Special variables
# -------------------
echo -e "\n=== Special variables ==="
echo "Script name: $0"
echo "Process ID: $$"
echo "Exit status of last command: $?"
echo "All arguments: $@"
echo "Number of arguments: $#"

# 8. Constants (read-only variables)
# --------------------------------
echo -e "\n=== Constants ==="
readonly PI=3.14159
echo "PI: $PI"
# PI=3 # This would cause an error

echo -e "\n===== End of Data Types Demo ====="