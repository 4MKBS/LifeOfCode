/*
 * Titile: function.cpp
 * Description: write description here
 * Author: Muhammad Khairul Bashar Sakib ( MKBS )
 * Date: 21/08/2025 20:48:36
 */

#include <bits/stdc++.h>
using namespace std;
int sum(int a, int b = 5);
double sum(double a, double b);
int diff(int a, int b = 5);
int product(int a, int b);
bool isEven(int n);
int factorial(int n);
bool isPrime(int n);
int binomialCoefficient(int n, int r);
void allPrime(int n);

void hello()
{
    cout << "Hello, World!" << endl;
}
int main()
{
    hello();
    cout << "sum of two numbers is: " << sum(2) << endl;
    cout << "sum of two doubles is: " << sum(2.5, 3.5) << endl;
    cout << "difference of two numbers is: " << diff(10, 4) << endl;
    cout << "product of two numbers is: " << product(3, 7) << endl;
    cout << "is 4 even? " << (isEven(4) ? "Yes" : "No") << endl;
    cout << "factorial of 5 is: " << factorial(5) << endl;
    cout << "is 7 prime? " << (isPrime(7) ? "Yes" : "No") << endl;
    cout << "Binomial coefficient C(5, 2) is: " << binomialCoefficient(5, 2) << endl;
    cout << "All prime numbers up to 10: ";
    allPrime(100);

    return 0;
}

int sum(int a, int b)
{
    return a + b;
}

double sum(double a, double b)
{
    return a + b;
}

int diff(int a, int b)
{
    return a - b;
}

int product(int a, int b)
{
    return a * b;
}

bool isEven(int n)
{
    return n % 2 == 0;
}

int factorial(int n)
{
    int fact = 1;
    for (int i = 1; i <= n; i++)
    {
        fact *= i;
    }
    return fact;
}

bool isPrime(int n)
{
    if (n == 1)
        return false;
    for (int i = 2; i * i <= n; i++)
    {
        if (n % i == 0)
            return false;
    }
    return true;
}

int binomialCoefficient(int n, int r)
{
    int value1 = factorial(n);
    int value2 = factorial(r);
    int value3 = factorial(n - r);
    return value1 / (value2 * value3);
}

void allPrime(int n)
{
    for (int i = 2; i <= n; i++)
    {
        if (isPrime(i))
        {
            cout << i << " ";
        }
    }
    cout << endl;
}