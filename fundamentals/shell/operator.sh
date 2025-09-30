#!/bin/bash
# Shell Script Operators Guide

echo "============ Shell Script Operators ============"

# 1. Arithmetic Operators
echo -e "\n1. Arithmetic Operators"
echo "Addition: 5 + 3 = $((5 + 3))"
echo "Subtraction: 5 - 3 = $((5 - 3))"
echo "Multiplication: 5 * 3 = $((5 * 3))"
echo "Division: 5 / 2 = $((5 / 2))" # Integer division
echo "Modulus: 5 % 3 = $((5 % 3))"
echo "Exponentiation: 2 ** 3 = $((2 ** 3))"
echo "Increment: a=5; ((a++)); echo \$a = $a"
echo "Decrement: a=5; ((a--)); echo \$a = $a"

# 2. Relational Operators
echo -e "\n2. Relational Operators"
echo "Equal to: [ 5 -eq 5 ] = $([ 5 -eq 5 ] && echo true || echo false)"
echo "Not equal to: [ 5 -ne 3 ] = $([ 5 -ne 3 ] && echo true || echo false)"
echo "Greater than: [ 5 -gt 3 ] = $([ 5 -gt 3 ] && echo true || echo false)"
echo "Less than: [ 5 -lt 8 ] = $([ 5 -lt 8 ] && echo true || echo false)"
echo "Greater than or equal: [ 5 -ge 5 ] = $([ 5 -ge 5 ] && echo true || echo false)"
echo "Less than or equal: [ 5 -le 8 ] = $([ 5 -le 8 ] && echo true || echo false)"

# 3. Logical Operators
echo -e "\n3. Logical Operators"
echo "AND: [[ 5 -gt 3 && 6 -lt 10 ]] = $([[ 5 -gt 3 && 6 -lt 10 ]] && echo true || echo false)"
echo "OR: [[ 5 -gt 30 || 6 -lt 10 ]] = $([[ 5 -gt 30 || 6 -lt 10 ]] && echo true || echo false)"
echo "NOT: [[ ! 5 -gt 30 ]] = $([[ ! 5 -gt 30 ]] && echo true || echo false)"

# 4. String Operators
echo -e "\n4. String Operators"
str1="Hello"
str2="World"
echo "String equality: [ \"$str1\" = \"Hello\" ] = $([ "$str1" = "Hello" ] && echo true || echo false)"
echo "String inequality: [ \"$str1\" != \"$str2\" ] = $([ "$str1" != "$str2" ] && echo true || echo false)"
echo "String is empty: [ -z \"\" ] = $([ -z "" ] && echo true || echo false)"
echo "String is not empty: [ -n \"$str1\" ] = $([ -n "$str1" ] && echo true || echo false)"

# 5. File Test Operators
echo -e "\n5. File Test Operators"
echo "File exists: [ -e /etc/passwd ] = $([ -e /etc/passwd ] && echo true || echo false)"
echo "File is regular: [ -f /etc/passwd ] = $([ -f /etc/passwd ] && echo true || echo false)"
echo "Directory exists: [ -d /etc ] = $([ -d /etc ] && echo true || echo false)"
echo "File is readable: [ -r /etc/passwd ] = $([ -r /etc/passwd ] && echo true || echo false)"
echo "File is writable: [ -w /etc/passwd ] = $([ -w /etc/passwd ] && echo true || echo false)"
echo "File is executable: [ -x /bin/bash ] = $([ -x /bin/bash ] && echo true || echo false)"

# 6. Assignment Operators
echo -e "\n6. Assignment Operators"
a=10
echo "Simple assignment: a=10 → $a"
let "a += 5"
echo "Add AND assignment: a+=5 → $a"
let "a -= 3"
echo "Subtract AND assignment: a-=3 → $a"
let "a *= 2"
echo "Multiply AND assignment: a*=2 → $a"
let "a /= 3"
echo "Divide AND assignment: a/=3 → $a"
let "a %= 3"
echo "Modulus AND assignment: a%=3 → $a"

# 7. Bitwise Operators
echo -e "\n7. Bitwise Operators"
echo "Bitwise AND: 5 & 3 = $((5 & 3))"
echo "Bitwise OR: 5 | 3 = $((5 | 3))"
echo "Bitwise XOR: 5 ^ 3 = $((5 ^ 3))"
echo "Bitwise complement: ~5 = $((~5))"
echo "Left shift: 5 << 1 = $((5 << 1))"
echo "Right shift: 5 >> 1 = $((5 >> 1))"

echo -e "\n============ End of Operators Guide ============"