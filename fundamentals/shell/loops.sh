#!/bin/bash
# loops.sh - Demonstration of different types of loops in shell scripting

echo "===== SHELL LOOPS TUTORIAL ====="
echo ""

# ==========================================================
echo "1. FOR LOOPS"
echo "------------"
echo "Basic for loop syntax:"
echo "for VARIABLE in LIST; do COMMANDS; done"
echo ""

echo "Example 1: Looping through a list of values"
for fruit in apple banana orange grape; do
    echo "I like $fruit"
done
echo ""

echo "Example 2: Looping through a range of numbers"
for i in {1..5}; do
    echo "Number: $i"
done
echo ""

echo "Example 3: C-style for loop"
for ((i=0; i<5; i++)); do
    echo "Count: $i"
done
echo ""

# ==========================================================
echo "2. WHILE LOOPS"
echo "-------------"
echo "While loop syntax:"
echo "while CONDITION; do COMMANDS; done"
echo ""

echo "Example 1: Simple while loop with counter"
counter=1
while [ $counter -le 5 ]; do
    echo "While loop iteration: $counter"
    ((counter++))
done
echo ""

echo "Example 2: Reading file line by line"
echo "First line of example" > example.txt
echo "Second line of example" >> example.txt
echo "Third line of example" >> example.txt

echo "Contents of file:"
while read -r line; do
    echo "  $line"
done < example.txt
rm example.txt
echo ""

# ==========================================================
echo "3. UNTIL LOOPS"
echo "-------------"
echo "Until loop syntax (runs until condition becomes true):"
echo "until CONDITION; do COMMANDS; done"
echo ""

echo "Example: Until loop with counter"
counter=1
until [ $counter -gt 5 ]; do
    echo "Until loop iteration: $counter"
    ((counter++))
done
echo ""

# ==========================================================
echo "4. SELECT LOOPS"
echo "--------------"
echo "Select loop syntax (creates a simple menu):"
echo "select VARIABLE in LIST; do COMMANDS; done"
echo ""

echo "Example: Simple menu (Press Ctrl+C to exit)"
echo "Please select a fruit:"
select fruit in "Apple" "Banana" "Orange" "Exit"; do
    case $fruit in
        "Apple")
            echo "You selected Apple"
            ;;
        "Banana")
            echo "You selected Banana"
            ;;
        "Orange")
            echo "You selected Orange"
            ;;
        "Exit")
            echo "Exiting menu"
            break
            ;;
        *)
            echo "Invalid selection"
            ;;
    esac
done
echo ""

# ==========================================================
echo "5. LOOP CONTROL"
echo "--------------"
echo "Break and continue statements"
echo ""

echo "Example 1: Using break to exit a loop"
for i in {1..10}; do
    if [ $i -eq 6 ]; then
        echo "Breaking at $i"
        break
    fi
    echo "Number: $i"
done
echo ""

echo "Example 2: Using continue to skip iterations"
for i in {1..5}; do
    if [ $i -eq 3 ]; then
        echo "Skipping iteration $i"
        continue
    fi
    echo "Iteration: $i"
done
echo ""

echo "===== END OF SHELL LOOPS TUTORIAL ====="