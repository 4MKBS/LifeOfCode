#include <bits/stdc++.h>
using namespace std;

int main()
{
    // If-Else Statements in C++
    int age;
    cout << "Enter your age: ";
    cin >> age;

    if (age >= 18)
    {
        cout << "You are an adult." << endl; // If condition is true
    }
    else if (age >= 13)
    {
        cout << "You are a teenager." << endl; // Else if condition is true
    }
    else
    {
        cout << "You are a child." << endl; // Else condition is true
    }

    // determine grade based on marks

    // 80-100	A+	5
    // 70-79	A	4
    // 60-69	A-	3.5
    // 50-59	B	3
    // 40-49	C	2
    // 33-39	D	1
    // 0-32	F	0
    int marks;
    cout << "Enter your marks: ";
    cin >> marks;

    if (marks >= 80 && marks <= 100)
    {
        cout << "Grade: A+" << endl; // Grade A+
    }
    else if (marks >= 70 && marks < 80)
    {
        cout << "Grade: A" << endl; // Grade A
    }
    else if (marks >= 60 && marks < 70)
    {
        cout << "Grade: A-" << endl; // Grade A-
    }
    else if (marks >= 50 && marks < 60)
    {
        cout << "Grade: B" << endl; // Grade B
    }
    else if (marks >= 40 && marks < 50)
    {
        cout << "Grade: C" << endl; // Grade C
    }
    else if (marks >= 33 && marks < 40)
    {
        cout << "Grade: D" << endl; // Grade D
    }
    else if (marks >= 0 && marks < 33)
    {
        cout << "Grade: F" << endl; // Grade F
    }
    else
    {
        cout << "Invalid marks entered." << endl; // Invalid input
    }
    return 0;
}