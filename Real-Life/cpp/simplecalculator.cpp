#include <bits/stdc++.h>

using namespace std;

int main()
{
    // Simple Calculator Example in C++
    int a, b;
    char op;
    cout << "Enter first number: ";
    cin >> a;
    cout << "Enter second number: ";
    cin >> b;
    cout << "Enter operator (+, -, *, /): ";
    cin >> op;
    switch (op)
    {
    case '+':
        cout << "Result: " << a + b << endl;
        break;
    case '-':
        cout << "Result: " << a - b << endl;
        break;
    case '*':
        cout << "Result: " << a * b << endl;
        break;
    case '/':
        if (b != 0)
        {
            cout << "Result: " << static_cast<double>(a) / b << endl;
        }
        else
        {
            cout << "Error: Division by zero!" << endl;
        }
        break;
    default:
        cout << "Error: Invalid operator!" << endl;
    }
    cout << "Thank you for using the calculator!" << endl;

    return 0;
}