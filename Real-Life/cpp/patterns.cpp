#include <bits/stdc++.h>
using namespace std;

// 01.Print triangle pattern
void TrianglePattern(int n)
{
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << "* ";
        }
        cout << endl;
    }
}

// 02.Print inverted triangle pattern
void invertedTrianglePattern(int n)
{
    for (int i = n; i >= 1; i--)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << "* ";
        }
        cout << endl;
    }
}

// 03.Print right angle triangle pattern
void rightAngleTrianglePattern(int n)
{
    for (int i = 1; i < n; i++)
    {
        // Print spaces
        for (int j = n; j > i; j--)
        {
            cout << "  ";
        }
        // Print stars
        for (int j = 0; j < i; j++)
        {
            cout << "* ";
        }
        cout << endl;
    }
}
// 04.Print reverse right angle triangle pattern
void reverseRightAngleTrianglePattern(int n)
{
    for (int i = n; i >= 1; i--)
    {
        // Print spaces
        for (int j = n; j > i; j--)
        {
            cout << "  ";
        }
        // Print stars
        for (int j = 0; j < i; j++)
        {
            cout << "* ";
        }
        cout << endl;
    }
}

int main()
{
    // patterns Example in C++
    int n;
    cout << "Enter the number of rows: ";
    cin >> n;

    TrianglePattern(n);
    invertedTrianglePattern(n);
    rightAngleTrianglePattern(n);
    reverseRightAngleTrianglePattern(n);
    return 0;
}