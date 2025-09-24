#include <bits/stdc++.h>
using namespace std;

int main()
{
    // sum of digits Example in C++
    int n;
    cout << "Enter a positive integer: ";
    cin >> n;
    int sum = 0;
    while (n > 0)
    {
        sum += n % 10;         // Add the last digit to sum
        cout << n % 10 << " "; // Print the current digit
        n /= 10;               // Remove the last digit
    }
    cout << endl;
    cout << "Sum of digits is: " << sum << endl;
    // sum of odd digits
    int num;
    cout << "Enter a positive integer to find the sum of odd digits: ";
    cin >> num;
    int oddSum = 0;
    while (num > 0)
    {
        int lastDigit = num % 10; // Get the last digit
        if (lastDigit % 2 != 0)
        {                        // Check if the digit is odd
            oddSum += lastDigit; // Add to odd sum
        }
        num /= 10; // Remove the last digit
    }
    cout << "Sum of odd digits is: " << oddSum << endl;

    // revverse the number and print result
    int number;
    cout << "Enter a positive integer to reverse: ";
    cin >> number;
    int reversedNumber = 0;
    while (number > 0)
    {
        int lastDigit = number % 10;
        reversedNumber = reversedNumber * 10 + lastDigit;
        number /= 10; // Remove the last digit
    }

    cout << "Reversed number is: " << reversedNumber << endl;

    return 0;
}