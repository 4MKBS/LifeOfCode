# Dictionary Basics in Python

# Creating a dictionary
my_dict = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# Accessing items
print(my_dict["name"])  # Access using key
print(my_dict.get("age"))  # Access using get()

# Changing items
my_dict["age"] = 26
print(my_dict)

# Adding items
my_dict["profession"] = "Engineer"
print(my_dict)

# Removing items
my_dict.pop("city")  # Remove by key
print(my_dict)

del my_dict["profession"]  # Remove using del
print(my_dict)

# Looping through a dictionary
for key in my_dict:
    print(key, my_dict[key])  # Loop through keys

for value in my_dict.values():
    print(value)  # Loop through values

for key, value in my_dict.items():
    print(key, value)  # Loop through key-value pairs

# Copying a dictionary
dict_copy = my_dict.copy()  # Shallow copy
print(dict_copy)

# Nested dictionaries
nested_dict = {
    "person1": {"name": "Alice", "age": 25},
    "person2": {"name": "Bob", "age": 30}
}
print(nested_dict["person1"]["name"])  # Access nested dictionary

# Dictionary methods
print(my_dict.keys())  # Get all keys
print(my_dict.values())  # Get all values
print(my_dict.items())  # Get all key-value pairs

# Using setdefault()
my_dict.setdefault("city", "Unknown")  # Add key with default value if not exists
print(my_dict)

# Clearing a dictionary
my_dict.clear()
print(my_dict)  # Empty dictionary

# Deleting a dictionary
del my_dict
# print(my_dict)  # This will raise an error as my_dict is deleted