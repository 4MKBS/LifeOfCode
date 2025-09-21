# all of operator is used in python
# # 1. Arithmetic Operators: +, -, *, /, //, %, **
# # 2. Comparison Operators: ==, !=, >, <, >=, <=
# # 3. Assignment Operators: =, +=, -=, *=, /=, //=, %=, **=
# # 4. Logical Operators: and, or, not
# # 5. Bitwise Operators: &, |, ^, ~, <<, >>
# # 6. Identity Operators: is, is not
# # 7. Membership Operators: in, not in
# # 8. Ternary Operator: a if condition else b
# # 9. Lambda Operator: lambda arguments: expression
# # 10. Conditional Operator: if condition else value
# # 11. List Comprehension: [expression for item in iterable]
# # 12. Generator Expression: (expression for item in iterable)
# # 13. Set Comprehension: {expression for item in iterable}
# # 14. Dictionary Comprehension: {key: value for item in iterable}
# # 15. F-strings: f"{expression}"
# # 16. String Formatting: "{}".format(value)

# arithmetic operators
a = 10
b = 5
c = a + b
print(c)  # Output: 15
c = a - b
print(c)  # Output: 5
c = a * b
print(c)  # Output: 50
c = a / b
print(c)  # Output: 2.0
c = a // b
print(c)  # Output: 2
c = a % b
print(c)  # Output: 0
c = a ** b
print(c)  # Output: 100000

# comparison operators
a = 10
b = 5
c = a == b
print(c)  # Output: False
c = a != b
print(c)  # Output: True
c = a > b
print(c)  # Output: True
c = a < b
print(c)  # Output: False
c = a >= b
print(c)  # Output: True
c = a <= b
print(c)  # Output: False

# assignment operators
a = 10
b = 5
c = a
print(c)  # Output: 10
c+= b
print(c)  # Output: 15
c-= b
print(c)  # Output: 10
c*= b
print(c)  # Output: 50
c/= b
print(c)  # Output: 10.0
c//= b
print(c)  # Output: 2.0 
c%= b
print(c)  # Output: 0.0
c**= b
print(c)  # Output: 0.0

# logical operators
a = True
b = False
c = a and b
print(c)  # Output: False
c = a or b
print(c)  # Output: True
c = not a
print(c)  # Output: False
c = not b
print(c)  # Output: True

# bitwise operators
a = 10  # 1010
# b = 5   # 0101
c = a & b  # 0000
print(c)  # Output: 0
c = a | b  # 1111
print(c)  # Output: 15
c = a ^ b  # 1111
print(c)  # Output: 15
c = ~a  # 0101
print(c)  # Output: -11
c = a << 1  # 10100
print(c)  # Output: 20
c = a >> 1  # 0101
print(c)  # Output: 5

# identity operators
a = 10
b = 10
c = a is b
print(c)  # Output: True
c = a is not b
print(c)  # Output: False
c = a is 10
print(c)  # Output: True
c = a is not 10
print(c)  # Output: False

# membership operators
a = [1, 2, 3, 4, 5]
b = 3
c = b in a
print(c)  # Output: True
c = b not in a
print(c)  # Output: False
c = 6 in a
print(c)  # Output: False
c = 6 not in a
print(c)  # Output: True

# ternary operator
a = 10
b = 5
c = a if a > b else b
print(c)  # Output: 10
