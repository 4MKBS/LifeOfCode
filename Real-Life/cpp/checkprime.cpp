#include <bits/stdc++.h>
using namespace std;

int main()
{
    // program to check if a number is prime in C++
    int n;
    cout << "Enter a positive integer: ";
    cin >> n;
    bool isPrime = true;

    for (int i = 2; i <= sqrt(n); i++)
    {
        if (n % i == 0)
        {
            isPrime = false;
            cout << n << " is not a prime number." << endl;
            break; // Exit the loop if a divisor is found
        }
    }

    if (isPrime)
    {
        cout << n << " is a prime number." << endl;
    }
    return 0;
}