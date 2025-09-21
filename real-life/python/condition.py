# mk = "MKBS"
# if (mk):
#     print(mk)
# else:
#     print("Not MKBS")

if __name__ == "__main__":
    # Example of using if-else statement
    age = 20
    if age >= 18:
        print("You are an adult.")
    else:
        print("You are a minor.")

    # Example of using if-elif-else statement
    score = 85
    if score >= 90:
        print("Grade: A")
    elif score >= 80:
        print("Grade: B")
    elif score >= 70:
        print("Grade: C")
    else:
        print("Grade: D")
    a = 10
    b = 5
    if a > b: print("a is greater than b")
    # Example of and,or,not,nested if
    if a > b and a > 0:
        print("a is greater than b and a is positive")
    if a > b or b < 0:
        print("Either a is greater than b or b is negative")
    if not a < b:
        print("a is not less than b")
    if a > b:
        if a > 0:
            print("a is greater than b and a is positive")
        else:
            print("a is greater than b but not positive")
    # Example of using ternary operator 
    max_value = a if a > b else b
    print("Max value is:", max_value)
    # Example of using match-case statement (Python 3.10+)
    value = 2
    match value:
        case 1:
            print("Value is 1")
        case 2:
            print("Value is 2")
        case _:
            print("Value is something else")
    # Example of using assert statement
    assert a > b, "a should be greater than b"
    print("Assertion passed")
    # Example of using try-except-finally
    try:
        result = a / b
        print("Result:", result)
    except ZeroDivisionError:
        print("Error: Division by zero")
    finally:
        print("Execution completed")

    day = 4
match day:
  case 1:
    print("Monday")
  case 2:
    print("Tuesday")
  case 3:
    print("Wednesday")
  case 4:
    print("Thursday")
  case 5:
    print("Friday")
  case 6:
    print("Saturday")
  case 7:
    print("Sunday")
        