# Variables in Python

# A variable is a container for storing data values. In Python, you don't need to declare the type of a variable explicitly.
# The type is inferred based on the value assigned to the variable.

# Example of variable assignment
x = 10  # Integer
y = 3.14  # Float
name = "Alice"  # String
is_active = True  # Boolean

# Variables can be reassigned to different values
x = 20
name = "Bob"

# Python is dynamically typed, so you can change the type of a variable
x = "Now I am a string"

# Multiple variables can be assigned in a single line
a, b, c = 1, 2, 3

# Assigning the same value to multiple variables
p = q = r = 42

# Variable naming rules:
# 1. Variable names must start with a letter or an underscore (_).
# 2. The rest of the name can include letters, numbers, or underscores.
# 3. Variable names are case-sensitive (e.g., `age` and `Age` are different).

# Examples of valid variable names
my_var = 5
_my_var = 10
myVar123 = 15

# Examples of invalid variable names (uncomment to see errors)
# 2my_var = 5  # Cannot start with a number
# my-var = 10  # Cannot contain hyphens
# my var = 15  # Cannot contain spaces

# Best practices for variable naming:
# 1. Use descriptive names that convey the purpose of the variable.
# 2. Use snake_case for variable names (e.g., `user_age`, `total_price`).

# Example of descriptive variable names
user_age = 25
total_price = 99.99

# Constants
# By convention, constants are written in all uppercase letters.
PI = 3.14159
MAX_USERS = 100

# Note: Python does not enforce constants, so they can still be changed.

# Printing variables
print("x:", x)
print("y:", y)
print("name:", name)
print("is_active:", is_active)
print("user_age:", user_age)
print("PI:", PI)