
# def sum(a,b):
#     return a + b
# print(sum(5,10))

def name(first_name="mohammad", last_name="ibrahim"):
   return "Welcome to Home " + first_name + " " + last_name

print(name())
print(name("mohammad"))
print(name("mohammad", "zaved"))

# Function with no arguments and no return value
def greet():
    print("Hello, welcome to the world of functions!")

greet()

# Function with arguments but no return value
def display_message(message):
    print(f"Message: {message}")

display_message("This is a function example.")

# Function with no arguments but with a return value
def get_pi_value():
    return 3.14159

pi = get_pi_value()
print(f"Value of Pi: {pi}")

# Function with arguments and a return value
def multiply(x, y):
    return x * y

result = multiply(4, 5)
print(f"Multiplication Result: {result}")

# Recursive function
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

print(f"Factorial of 5: {factorial(5)}")

# Lambda function
square = lambda x: x ** 2
print(f"Square of 6: {square(6)}")

# Function with variable-length arguments (*args)
def sum_all(*args):
    return sum(args)

print(f"Sum of 1, 2, 3, 4: {sum_all(1, 2, 3, 4)}")

# Function with keyword arguments (**kwargs)
def print_details(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_details(name="Alice", age=25, city="New York")

# Nested function
def outer_function(text):
    def inner_function():
        return text.upper()
    return inner_function()

print(outer_function("hello"))

# Function as an argument
def apply_function(func, value):
    return func(value)

print(apply_function(lambda x: x ** 3, 3))