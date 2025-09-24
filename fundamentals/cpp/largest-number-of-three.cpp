#include <bits/stdc++.h>
using namespace std;

int main()
{
    int a, b, c;
    cout << "Enter A: ";
    cin >> a;
    cout << "Enter B: ";
    cin >> b;
    cout << "Enter C: ";
    cin >> c;
    // Finding the largest number among A, B, and C
    if (a >= b && a >= c)
    {
        cout << "Largest number is: " << a << endl;
    }
    else if (b >= c)
    {
        cout << "Largest number is: " << b << endl;
    }
    else
    {
        cout << "Largest number is: " << c << endl;
    }

    return 0;
}