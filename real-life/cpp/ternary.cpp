#include <bits/stdc++.h>

using namespace std;

int main()
{
    // Ternary Operator in C++
    int a = 10, b = 20;
    cout << "Ternary Operator Example:" << endl;

    // Using ternary operator to find the maximum of two numbers
    int max = (a > b) ? a : b;
    cout << "Maximum of " << a << " and " << b << " is: " << max << endl;

    // Using ternary operator to check if a number is even or odd
    int num = 15;
    string result = (num % 2 == 0) ? "Even" : "Odd";
    cout << num << " is: " << result << endl;

    return 0;
}