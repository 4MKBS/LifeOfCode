#include <iostream>
#include <string>
using namespace std;

/*
 * Variables in C++: A Detailed Explanation
 *
 * A variable is a named storage location in memory that holds a value.
 * Variables allow programs to store, retrieve, and manipulate data.
 *
 * Key Points:
 * 1. Variables have a type, which determines the kind of data they can store.
 * 2. Variables must be declared before use.
 * 3. The value of a variable can be changed during program execution.
 * 4. Variables have a scope, which defines where they can be accessed.
 *
 * Syntax:
 * <data_type> <variable_name> = <initial_value>;
 *
 * Example:
 * int age = 25;
 *
 * Common Data Types in C++:
 * - int: Stores integers (e.g., 1, -5, 100)
 * - float: Stores floating-point numbers (e.g., 3.14, -0.01)
 * - double: Stores double-precision floating-point numbers
 * - char: Stores a single character (e.g., 'A', 'z')
 * - string: Stores a sequence of characters (requires #include <string>)
 * - bool: Stores a boolean value (true or false)
 *
 * Let's explore variables with examples.
 */

int main()
{
    // Example 1: Integer Variable
    int age = 25; // Declaring and initializing an integer variable
    cout << "Age: " << age << endl;

    // Example 2: Floating-Point Variable
    float pi = 3.14f; // Declaring and initializing a float variable
    cout << "Value of Pi: " << pi << endl;

    // Example 3: Double Variable
    double largeNumber = 123456.789; // Declaring and initializing a double variable
    cout << "Large Number: " << largeNumber << endl;

    // Example 4: Character Variable
    char grade = 'A'; // Declaring and initializing a char variable
    cout << "Grade: " << grade << endl;

    // Example 5: String Variable
    string name = "John Doe"; // Declaring and initializing a string variable
    cout << "Name: " << name << endl;

    // Example 6: Boolean Variable
    bool isPassed = true; // Declaring and initializing a boolean variable
    cout << "Passed: " << (isPassed ? "Yes" : "No") << endl;

    // Example 7: Modifying Variable Values
    age = 30; // Changing the value of the variable
    cout << "Updated Age: " << age << endl;

    // Example 8: Scope of Variables
    if (true)
    {
        int localVariable = 100; // This variable is only accessible within this block
        cout << "Local Variable: " << localVariable << endl;
    }
    // Uncommenting the next line will cause an error because localVariable is out of scope
    // cout << localVariable << endl;

    // Example 9: Constants
    const double gravity = 9.8; // Declaring a constant variable
    cout << "Gravity: " << gravity << endl;
    // Uncommenting the next line will cause an error because constants cannot be modified
    // gravity = 10.0;

    return 0;
}

/*
 * Summary:
 * - Variables are essential for storing and manipulating data in a program.
 * - Always choose the appropriate data type for your variables.
 * - Use meaningful names for variables to make your code more readable.
 * - Understand the scope and lifetime of variables to avoid errors.
 * - Use constants for values that should not change during program execution.
 */