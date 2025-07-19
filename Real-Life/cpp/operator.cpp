#include <bits/stdc++.h>
using namespace std;

int main()
{
    // All about operators in C++
    // 1. Arithmetic Operators
    int a = 10, b = 5;
    cout << "Arithmetic Operators:" << endl;
    cout << "Addition: " << a + b << endl;       // Addition
    cout << "Subtraction: " << a - b << endl;    // Subtraction
    cout << "Multiplication: " << a * b << endl; // Multiplication
    cout << "Division: " << a / b << endl;       // Division
    cout << "Modulus: " << a % b << endl;        // Modulus
    cout << "Increment: " << ++a << endl;        // Increment
    cout << "Decrement: " << --b << endl;        // Decrement

    // 2. Relational Operators
    cout << "\nRelational Operators:" << endl;
    cout << "Equal to: " << (a == b) << endl;                 // Equal
    cout << "Not equal to: " << (a != b) << endl;             // Not equal
    cout << "Greater than: " << (a > b) << endl;              // Greater than
    cout << "Less than: " << (a < b) << endl;                 // Less than
    cout << "Greater than or equal to: " << (a >= b) << endl; // Greater than or equal
    cout << "Less than or equal to: " << (a <= b) << endl;    // Less than or equal
    // 3. Logical Operators
    cout << "\nLogical Operators:" << endl;
    cout << "Logical AND: " << (a > 5 && b < 10) << endl; // Logical AND
    cout << "Logical OR: " << (a > 5 || b < 10) << endl;  // Logical OR
    cout << "Logical NOT: " << !(a > 5) << endl;          // Logical NOT
    // 4. Bitwise Operators
    cout << "\nBitwise Operators:" << endl;
    cout << "Bitwise AND: " << (a & b) << endl;  // Bitwise AND
    cout << "Bitwise OR: " << (a | b) << endl;   // Bitwise OR
    cout << "Bitwise XOR: " << (a ^ b) << endl;  // Bitwise XOR
    cout << "Bitwise NOT: " << (~a) << endl;     // Bitwise NOT
    cout << "Left Shift: " << (a << 1) << endl;  // Left Shift
    cout << "Right Shift: " << (a >> 1) << endl; // Right Shift
    // 5. Assignment Operators
    cout << "\nAssignment Operators:" << endl;
    int c = 20;
    cout << "Assignment: " << (c = a + b) << endl;       // Assignment
    cout << "Add and assign: " << (c += a) << endl;      // Add and assign
    cout << "Subtract and assign: " << (c -= b) << endl; // Subtract and assign
    cout << "Multiply and assign: " << (c *= a) << endl; // Multiply and assign
    cout << "Divide and assign: " << (c /= b) << endl;   // Divide and assign
    cout << "Modulus and assign: " << (c %= a) << endl;  // Modulus and assign
    // 6. Conditional (Ternary) Operator
    cout << "\nConditional Operator:" << endl;
    int max = (a > b) ? a : b;                     // Conditional operator
    cout << "Maximum of a and b: " << max << endl; // Maximum value
    // 7. Comma Operator
    cout << "\nComma Operator:" << endl;
    int x = (a = 5, b = 10, a + b);
    cout << "Value of x using comma operator: " << x << endl; // Comma operator
    // 8. Sizeof Operator
    cout << "\nSizeof Operator:" << endl;
    cout << "Size of int: " << sizeof(int) << " bytes" << endl;             // Size of int
    cout << "Size of double: " << sizeof(double) << " bytes" << endl;       // Size of double
    cout << "Size of char: " << sizeof(char) << " bytes" << endl;           // Size of char
    cout << "Size of float: " << sizeof(float) << " bytes" << endl;         // Size of float
    cout << "Size of long long: " << sizeof(long long) << " bytes" << endl; // Size of long long
    cout << "Size of bool: " << sizeof(bool) << " bytes" << endl;           // Size of bool
    cout << "Size of pointer: " << sizeof(int *) << " bytes" << endl;       // Size of pointer
    // 9. Pointer Operators
    cout << "\nPointer Operators:" << endl;
    int *ptr = &a;                                       // Pointer to a
    cout << "Address of a: " << ptr << endl;             // Address of a
    cout << "Value at address of a: " << *ptr << endl;   // Value at address of a
    cout << "Address of pointer ptr: " << &ptr << endl;  // Address of pointer ptr
    cout << "Value of pointer ptr: " << *(&ptr) << endl; // Value of pointer ptr
}