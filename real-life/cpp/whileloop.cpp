#include <bits/stdc++.h>
using namespace std;

int main()
{

    // While Loop Example in C++
    int n;
    cout << "Enter a positive integer: ";
    cin >> n;
    int i = 1;
    while (i <= n)
    {
        cout << "you are the no. " << i << endl;
        i++;
    }
    cout << endl;

    // print number from n to 1
    i = n;
    while (i >= 1)
    {
        cout << i << " ";
        i--;
    }
    return 0;
}