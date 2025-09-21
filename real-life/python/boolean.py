# boolaen 
# 1. Boolean values are either True or False.
# 2. Boolean values are often used in conditional statements and loops.
# 3. Boolean values can be combined using logical operators (and, or, not).
# 4. Boolean values can be compared using comparison operators (==, !=, <, >, <=, >=).
# 5. Boolean values can be used to control the flow of a program using if statements.
# 6. Boolean values can be used to check for membership in a list or other iterable using the in operator.
# 7. Boolean values can be used to check for identity using the is operator.
# 8. Boolean values can be used to check for truthiness using the bool() function.

bool1 = True
bool2 = False

print(bool1)  # Output: True
print(bool2)  # Output: False
print(type(bool1))  # Output: <class 'bool'>
print(type(bool2))  # Output: <class 'bool'>

print(bool1 and bool2)  # Output: False
print(bool1 or bool2)  # Output: True
print(not bool1)  # Output: False
print(not bool2)  # Output: True
print(2 > 1)
print(2 < 1)  # Output: False
print(2 == 1)  # Output: False
print(2 != 1)  # Output: True
print(2 >= 1)  # Output: True
print(2 <= 1)  # Output: False
print(2 is 1)  # Output: False
print(2 is not 1)  # Output: True
print(2 in [1, 2, 3])  # Output: True
print(2 not in [1, 2, 3])  # Output: False
print(bool(0))  # Output: False
print(bool(1))  # Output: True
print(bool(""))  # Output: False
print(bool("Hello"))  # Output: True
print(bool([]))  # Output: False
print(bool([1, 2, 3]))  # Output: True
print(bool(None))  # Output: False
