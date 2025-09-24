# create a class
class myclass:
    name = "myclass"

# create an object
obj = myclass()
print(obj.name)
print(type(obj))

# __init_ method
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def display(self):
        print(f"Name: {self.name}, Age: {self.age}")
# create an object
person1 = Person("Alice", 30)
person1.display()

# str method
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def __str__(self):
        return f"Name: {self.name}, Age: {self.age}"

# create an object
person2 = Person("Bob", 25)
print(person2)  # This will call the __str__ method
# __repr__ method
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def __repr__(self):
        return f"Person(name={self.name}, age={self.age})"
# create an object
person3 = Person("Charlie", 35)
print(repr(person3))  # This will call the __repr__ method
# __del__ method
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def __del__(self):
        print(f"Object {self.name} is being deleted")
# create an object
person4 = Person("David", 40)
del person4  # This will call the __del__ method

