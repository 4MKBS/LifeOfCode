# while loop 

i = 1
while i <= 5:
    print(i)
    i += 1
# while loop with else and break
i = 1
while i <= 5:
    if i == 3:
        break
    print(i)
    i += 1
# while loop with else and continue
i = 1
while i <= 5:
    i += 1
    if i == 3:
        continue
    print(i)
# while loop with else and pass
i = 1
while i <= 5:
    i += 1
    if i == 3:
        pass
        print("Pass statement executed")
    print(i)


# for loop with range
for i in range(1, 6):
    print(i)
# for loop with else and break
for i in range(1, 6):
    if i == 3:
        break
    print(i)
# for loop with else and continue
for i in range(1, 6):
    if i == 3:
        continue
    print(i)
# for loop with else and pass
for i in range(1, 6):
    if i == 3:
        pass
        print("Pass statement executed")
    print(i)
# for loop with else and nested loop
for i in range(1, 4):
    for j in range(1, 4):
        print(f"i: {i}, j: {j}")
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

welcome = "Hello, World!"
for char in welcome:
    print(char)