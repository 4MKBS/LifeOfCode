#include <bits/stdc++.h>
#define optimize()                \
    ios_base::sync_with_stdio(0); \
    cin.tie(0);                   \
    cout.tie(0);
#define endl '\n'
using namespace std;

int main()
{
    optimize();
    // Basic pointer declaration and initialization
    int num = 10;
    int *ptr = &num; // ptr holds the memory address of num

    cout << "Value of num: " << num << endl;
    cout << "Address of num: " << &num << endl;
    cout << "Value of ptr (address it points to): " << ptr << endl;
    cout << "Value at address ptr points to: " << *ptr << endl; // Dereferencing

    // Modifying value using pointer
    *ptr = 20;
    cout << "After modification, num = " << num << endl;

    // Pointer arithmetic
    int arr[5] = {10, 20, 30, 40, 50};
    int *arrPtr = arr; // Array name decays to pointer to first element

    cout << "\nArray elements using pointer: ";
    for (int i = 0; i < 5; i++)
    {
        cout << *(arrPtr + i) << " "; // Equivalent to arrPtr[i]
    }
    cout << endl;

    // Dynamic memory allocation
    int *dynamicPtr = new int; // Allocate memory for a single integer
    *dynamicPtr = 100;
    cout << "\nDynamically allocated int: " << *dynamicPtr << endl;
    delete dynamicPtr; // Free the allocated memory

    // Dynamic array
    int size = 5;
    int *dynamicArray = new int[size];
    for (int i = 0; i < size; i++)
    {
        dynamicArray[i] = i * 10;
    }

    cout << "Dynamic array elements: ";
    for (int i = 0; i < size; i++)
    {
        cout << dynamicArray[i] << " ";
    }
    cout << endl;
    delete[] dynamicArray; // Free the allocated array

    // Pointer to pointer
    int value = 42;
    int *p1 = &value;
    int **p2 = &p1; // p2 points to p1

    cout << "\nPointer to pointer demonstration:" << endl;
    cout << "value = " << value << endl;
    cout << "*p1 = " << *p1 << endl;
    cout << "**p2 = " << **p2 << endl;

    return 0;
}
