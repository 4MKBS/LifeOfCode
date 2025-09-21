# array declared

myarray = [1, 2, 3, 4, 5]

for i in myarray:
    print(i)

names = ["mohammad", "ibrahim", "zaved"]
for name in names:
    print(name)

print(myarray[0])
print(len(myarray))

# append
myarray.append(6)
print(myarray)

# pop 
myarray.pop()
print(myarray)

#remove
myarray.remove(2)
print(myarray)

# clear
myarray.clear()
print(myarray)

# copy
myarray = [1, 2, 3, 4, 5]
myarray_copy = myarray.copy()
print(myarray_copy)

# count
print(myarray.count(3))

# extend
myarray.extend([6, 7, 8])
print(myarray)

# index
print(myarray.index(4))

# insert
myarray.insert(2, 99)
print(myarray)

# reverse
myarray.reverse()
print(myarray)

# sort
myarray.sort()
print(myarray)