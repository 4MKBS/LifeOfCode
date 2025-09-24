# all data types in python

integer = 10  # Integer
float_num = 3.14  # Float
complex_num = 1 + 2j  # Complex number
string = "Hello, World!"  # String
boolean = True  # Boolean
list_data = [1, 2, 3, 4, 5]  # List
tuple_data = (1, 2, 3)  # Tuple
range_data = range(5)  # Range
set_data = {1, 2, 3}  # Set
frozenset_data = frozenset({1, 2, 3})  # Frozenset
dict_data = {"key1": "value1", "key2": "value2"}  # Dictionary
bytes_data = b"Hello"  # Bytes
bytearray_data = bytearray(5)  # Bytearray
memoryview_data = memoryview(bytes_data)  # Memoryview
none_data = None  # NoneType

print("Data Types in Python:")
print("Integer:", integer)
print("Float:", float_num)
print("Complex Number:", complex_num)
print("String:", string)
print("Boolean:", boolean)
print("List:", list_data)
print("Tuple:", tuple_data)
print("Range:", list(range_data))  # Convert range to list for display
print("Set:", set_data)
print("Frozenset:", frozenset_data)
print("Dictionary:", dict_data)
print("Bytes:", bytes_data)
print("Bytearray:", bytearray_data)
print("Memoryview:", memoryview_data.tolist())  # Convert memoryview to list for display
print("NoneType:", none_data)
print("Type of each data type:")
print(type(integer))  # <class 'int'>
print(type(float_num))  # <class 'float'>
print(type(complex_num))  # <class 'complex'>
print(type(string))  # <class 'str'>
print(type(boolean))  # <class 'bool'>
print(type(list_data))  # <class 'list'>
print(type(tuple_data))  # <class 'tuple'>
print(type(range_data))  # <class 'range'>
print(type(set_data))  # <class 'set'>
print(type(frozenset_data))  # <class 'frozenset'>
print(type(dict_data))  # <class 'dict'>
print(type(bytes_data))  # <class 'bytes'>
print(type(bytearray_data))  # <class 'bytearray'>
print(type(memoryview_data))  # <class 'memoryview'>
print(type(none_data))  # <class 'NoneType'>

# type casting
print("\n\n")
s = "123"  # String
print(type(s))  # <class 'str'>
s = int(s)  # Convert string to intege
print(type(s))  # <class 'int'>
