
hello = "Hello, World!"
print(hello)  # Output: Hello, World!

para = """This is a paragraph.
It can span multiple lines.
This is useful for long text."""
print(para)  # Output: This is a paragraph. It can span multiple lines. This is useful for long text.
print(hello[0])  # Output: H
print(hello[1:5])  # Output: ello
print(hello[7:])  # Output: World!
print(hello[-1])  # Output: !
print(hello[-5:-1])  # Output: Worl
print(hello[:5])  # Output: Hello
print(hello[::2])  # Output: Hlo ol!
print(hello[::-1])  # Output: !dlroW ,olleH
print(hello[1:5:2])  # Output: el
print(hello[1:5:-1])  # Output: (empty string)

print(len(hello))  # Output: 13
print(hello.lower())  # Output: hello, world!
print(hello.upper())  # Output: HELLO, WORLD!
print(hello.strip())  # Output: Hello, World!
print(hello.replace("World", "Python"))  # Output: Hello, Python!
print(hello.split(","))  # Output: ['Hello', ' World!']
print(hello.split(" "))  # Output: ['Hello,', 'World!']