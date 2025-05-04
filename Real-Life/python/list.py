# list in python


mylist = [1, 2, 3, 4, 5]   
print(mylist)  # Output: [1, 2, 3, 4, 5]
print(type(mylist))  # Output: <class 'list'>
# allow duplicate values
mynewlist = [1, 2, 3, 4, 5, 1]
print(mynewlist)  # Output: [1, 2, 3, 4, 5, 1]
print(len(mynewlist))  # Output: 6

# list items data types
mylist = ["apple", "banana", "cherry"]
list2 = [1, 2, 3, 4, 5]
list3 = [True, False, True]
print(mylist)  # Output: ['apple', 'banana', 'cherry']
print(list2)  # Output: [1, 2, 3, 4, 5]
print(list3)  # Output: [True, False, True]
# list constructed with the list() constructor
mylist = list(("apple", "banana", "cherry"))  # note the double round-brackets
print(mylist)  # Output: ['apple', 'banana', 'cherry']
print(type(mylist))  # Output: <class 'list'>

# access list items
mylist = ["apple", "banana", "cherry"]
print(mylist[0])  # Output: apple
print(mylist[1])  # Output: banana



thislist = ["apple", "banana", "cherry"]
thislist[1] = "blackcurrant"
print(thislist)

thislist = ["apple", "banana", "cherry"]
thislist.append("orange")
print(thislist)


thislist = ["apple", "banana", "cherry"]
thislist.insert(1, "orange")
print(thislist)


thislist = ["apple", "banana", "cherry"]
thislist.remove("banana")
print(thislist)