#!/bin/bash
# conditions.sh - Demonstrates conditional statements in bash

# ========== If Statement ==========
echo "=== Basic if statement ==="
if [ $USER = "root" ]; then 
    echo "You are the root user"
fi

# ========== If-Else Statement ==========
echo -e "\n=== If-Else statement ==="
if [-f "/etc/passwd"]; then 
    echo "/etc/passwd file exists"
else 
    echo "/etc/passwd file does not exist"
fi

# ========== If-Elif-Else Statement ==========
echo -e "\n=== If-Elif-Else statement ==="
AGE=25
if [ $AGE -lt 13 ]; then 
    echo "You are a child"
elif [ $AGE -lt 20 ]; then 
    echo "You are a teenager"
elif [ $AGE -lt 65 ]; then 
    echo "You are an adult"
else 
    echo "You are a senior citizen"
fi

# ========== File test operators ==========
echo -e "\n=== File test operators ==="
FILE="/etc/hosts"
if [ -e $FILE ]; then 
    echo "$FILE is a regular file"
fi
if [ -d $FILE ]; then 
    echo "$FILE is a directory"
fi
if [ -r $FILE ]; then 
    echo "$FILE is readable"
fi
if [ -w $FILE ]; then 
    echo "$FILE is writable"
fi
if [ -x $FILE ]; then 
    echo "$FILE is executable"
fi
if [ -s $FILE ]; then 
    echo "$FILE is not empty"
fi
if [ -L $FILE ]; then 
    echo "$FILE is a symbolic link"
fi
if [ -O $FILE ]; then 
    echo "$FILE is owned by you"
fi
if [ -G $FILE ]; then 
    echo "$FILE is owned by your group"
fi

# ========== String comparison ==========
echo -e "\n=== String comparison ==="
STR1="hello"
STR2="world"
if [ $STR1 = $STR2 ]; then 
    echo "Strings are equal"
else 
    echo "Strings are not equal"
fi
if [ $STR1 != $STR2 ]; then 
    echo "Strings are not equal"
fi
if [ -z $STR1 ]; then 
    echo "String is empty"
fi
if [ -n $STR1 ]; then 
    echo "String is not empty"
fi



# ======================
# Numeric comparisons
# ======================
echo -e "\n=== Numeric comparisons ==="
NUM1=10
NUM2=20

if [ $NUM1 -eq $NUM2 ]; then
    echo "$NUM1 equals $NUM2"
fi
if [ $NUM1 -ne $NUM2 ]; then
    echo "$NUM1 is not equal to $NUM2"
fi
if [ $NUM1 -lt $NUM2 ]; then
    echo "$NUM1 is less than $NUM2"
fi
if [ $NUM1 -le $NUM2 ]; then
    echo "$NUM1 is less than or equal to $NUM2"
fi
if [ $NUM1 -gt $NUM2 ]; then
    echo "$NUM1 is greater than $NUM2"
fi
if [ $NUM1 -ge $NUM2 ]; then
    echo "$NUM1 is greater than or equal to $NUM2"
fi

# ======================
# Logical operators
# ======================
echo -e "\n=== Logical operators ==="
A=5
B=10

# AND operator
if [ $A -gt 0 ] && [ $B -gt 0 ]; then
    echo "Both A and B are positive"
fi

# Alternative AND syntax
if [ $A -gt 0 -a $B -gt 0 ]; then
    echo "Both A and B are positive (alternative syntax)"
fi

# OR operator
if [ $A -lt 0 ] || [ $B -gt 0 ]; then
    echo "Either A is negative or B is positive"
fi

# Alternative OR syntax
if [ $A -lt 0 -o $B -gt 0 ]; then
    echo "Either A is negative or B is positive (alternative syntax)"
fi

# NOT operator
if [ ! $A -eq $B ]; then
    echo "A is not equal to B"
fi

# ======================
# Modern test syntax with double brackets
# ======================
echo -e "\n=== Modern test syntax with double brackets ==="
if [[ $STR1 == "hello" && $STR2 == "world" ]]; then
    echo "Both strings match their expected values"
fi

# ======================
# Case statement (alternative to if-elif chains)
# ======================
echo -e "\n=== Case statement ==="
FRUIT="apple"

case $FRUIT in
    "apple")
        echo "It's an apple"
        ;;
    "banana")
        echo "It's a banana"
        ;;
    "orange"|"tangerine")
        echo "It's a citrus fruit"
        ;;
    *)
        echo "Unknown fruit"
        ;;
esac

# ======================
# Ternary-like operation in bash
# ======================
echo -e "\n=== Ternary-like operation ==="
RESULT=$((NUM1 > NUM2 ? NUM1 : NUM2))
echo "The larger number is: $RESULT"