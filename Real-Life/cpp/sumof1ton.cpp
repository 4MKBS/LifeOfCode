#include <bits/stdc++.h>
using namespace std;

int main()
{
    // Sum of numbers from 1 to n Example in C++
    int n;
    cout << "Enter a positive integer: ";
    cin >> n;
    int sum = 0;
    for (int i = 1; i <= n; ++i)
    {
        sum += i;
    }
    cout << "Sum of numbers from 1 to " << n << " is: " << sum << endl;
    return 0;
}