# Demonstrating Python set and its methods

# Creating a set
my_set = {1, 2, 3, 4, 5}
print("Original Set:", my_set)

# Accessing elements in a set (using a loop since sets are unordered)
print("Accessing elements:")
for item in my_set:
    print(item)

# Adding elements to a set
my_set.add(6)
print("Set after adding 6:", my_set)

# Adding multiple elements using update()
my_set.update([7, 8, 9])
print("Set after adding multiple elements:", my_set)

# Removing elements from a set
my_set.remove(3)  # Raises KeyError if the element is not found
print("Set after removing 3:", my_set)

# Discarding elements (does not raise an error if the element is not found)
my_set.discard(10)  # No error even though 10 is not in the set
print("Set after discarding 10:", my_set)

# Popping an element (removes and returns an arbitrary element)
popped_element = my_set.pop()
print("Popped element:", popped_element)
print("Set after popping an element:", my_set)

# Clearing all elements from the set
my_set.clear()
print("Set after clearing all elements:", my_set)

# Joining sets (union, intersection, difference, symmetric difference)
set_a = {1, 2, 3}
set_b = {3, 4, 5}

# Union
union_set = set_a.union(set_b)
print("Union of set_a and set_b:", union_set)

# Intersection
intersection_set = set_a.intersection(set_b)
print("Intersection of set_a and set_b:", intersection_set)

# Difference
difference_set = set_a.difference(set_b)
print("Difference of set_a and set_b:", difference_set)

# Symmetric Difference
symmetric_difference_set = set_a.symmetric_difference(set_b)
print("Symmetric Difference of set_a and set_b:", symmetric_difference_set)

# Checking subset and superset
print("Is set_a a subset of set_b?", set_a.issubset(set_b))
print("Is set_a a superset of set_b?", set_a.issuperset(set_b))

# Checking disjoint sets
print("Are set_a and set_b disjoint?", set_a.isdisjoint(set_b))

# Frozen set (immutable set)
frozen_set = frozenset([1, 2, 3])
print("Frozen set:", frozen_set)

# Attempting to modify a frozen set (will raise an error)
# frozen_set.add(4)  # Uncommenting this line will raise an AttributeError