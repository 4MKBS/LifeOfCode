# Tuple Basics
# A tuple is an immutable sequence of Python objects.

# Creating tuples
empty_tuple = ()
single_element_tuple = (42,)  # Note the trailing comma
multi_element_tuple = (1, 2, 3, 4, 5)

# Accessing elements
print(multi_element_tuple[0])  # First element
print(multi_element_tuple[-1])  # Last element

# Slicing
print(multi_element_tuple[1:4])  # Elements from index 1 to 3

# Tuple unpacking
a, b, c = (1, 2, 3)
print(a, b, c)

# Nested tuples
nested_tuple = ((1, 2), (3, 4))
print(nested_tuple[0][1])  # Accessing nested elements

# Tuple operations
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)

# Concatenation
concatenated = tuple1 + tuple2
print(concatenated)

# Repetition
repeated = tuple1 * 3
print(repeated)

# Membership test
print(2 in tuple1)  # True
print(7 not in tuple2)  # True

# Iteration
for item in tuple1:
    print(item)

# Tuple methods
example_tuple = (1, 2, 3, 2, 4, 2)

# count() - Counts occurrences of a value
print(example_tuple.count(2))  # Output: 3

# index() - Finds the first occurrence of a value
print(example_tuple.index(2))  # Output: 1

# Immutability
# Tuples cannot be modified after creation
immutable_tuple = (1, 2, 3)
# immutable_tuple[0] = 10  # This will raise a TypeError

# Converting between tuples and other data types
list_to_tuple = tuple([1, 2, 3])
print(list_to_tuple)

tuple_to_list = list((4, 5, 6))
print(tuple_to_list)

# Tuple with mixed data types
mixed_tuple = (1, "hello", 3.14, [1, 2, 3])
print(mixed_tuple)

# Length of a tuple
print(len(multi_element_tuple))

# Maximum and minimum values in a tuple (only for comparable elements)
numeric_tuple = (10, 20, 30, 40)
print(max(numeric_tuple))
print(min(numeric_tuple))

# Sorting a tuple (returns a list)
sorted_tuple = sorted(numeric_tuple)
print(sorted_tuple)

# Tuple comprehensions (not directly supported, but you can use a generator)
generator_tuple = tuple(x for x in range(5))
print(generator_tuple)