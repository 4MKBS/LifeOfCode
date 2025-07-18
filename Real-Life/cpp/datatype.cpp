#include <bits/stdc++.h>
using namespace std;

int main()
{

    // Fundamental data types in C++

    // Integer types
    int integerVar = 10;
    short shortVar = 5;
    long longVar = 1000000L;
    long long longLongVar = 1000000000LL;
    unsigned int unsignedVar = 100U;

    cout << "Integer types:" << endl;
    cout << "int: " << sizeof(int) << " bytes, value: " << integerVar << endl;
    cout << "short: " << sizeof(short) << " bytes, value: " << shortVar << endl;
    cout << "long: " << sizeof(long) << " bytes, value: " << longVar << endl;
    cout << "long long: " << sizeof(long long) << " bytes, value: " << longLongVar << endl;
    cout << "unsigned int: " << sizeof(unsigned int) << " bytes, value: " << unsignedVar << endl;
    cout << endl;

    // Floating point types
    float floatVar = 3.14f;
    double doubleVar = 3.14159;
    long double longDoubleVar = 3.141592653589793L;

    cout << "Floating point types:" << endl;
    cout << "float: " << sizeof(float) << " bytes, value: " << floatVar << endl;
    cout << "double: " << sizeof(double) << " bytes, value: " << doubleVar << endl;
    cout << "long double: " << sizeof(long double) << " bytes, value: " << longDoubleVar << endl;
    cout << endl;

    // Character types
    char charVar = 'A';
    wchar_t wideCharVar = L'Ω';
    char16_t char16Var = u'Ω';
    char32_t char32Var = U'Ω';

    cout << "Character types:" << endl;
    cout << "char: " << sizeof(char) << " bytes, value: " << charVar << endl;
    cout << "wchar_t: " << sizeof(wchar_t) << " bytes" << endl;
    cout << "char16_t: " << sizeof(char16_t) << " bytes" << endl;
    cout << "char32_t: " << sizeof(char32_t) << " bytes" << endl;
    cout << endl;

    // Boolean type
    bool boolVar = true;
    cout << "Boolean type:" << endl;
    cout << "bool: " << sizeof(bool) << " bytes, value: " << boolVar << endl;
    cout << endl;

    // Derived types
    // Arrays
    int intArray[5] = {1, 2, 3, 4, 5};
    cout << "Array type:" << endl;
    cout << "int[5]: " << sizeof(intArray) << " bytes" << endl;
    cout << endl;

    // Pointers
    int *intPointer = &integerVar;
    cout << "Pointer type:" << endl;
    cout << "int*: " << sizeof(intPointer) << " bytes, value: " << *intPointer << endl;
    cout << endl;

    // User-defined types
    // Enum
    enum Color
    {
        RED,
        GREEN,
        BLUE
    };
    Color color = RED;
    cout << "Enum type:" << endl;
    cout << "Color: " << sizeof(Color) << " bytes, value: " << color << endl;
    cout << endl;

    // Struct
    struct Person
    {
        string name;
        int age;
    };
    Person person = {"John", 30};
    cout << "Struct type:" << endl;
    cout << "Person: " << sizeof(Person) << " bytes" << endl;
    cout << "person.name: " << person.name << ", person.age: " << person.age << endl;
    cout << endl;

    // Type aliases
    typedef unsigned long ulong;
    using uint = unsigned int;
    ulong ulongVar = 100UL;
    uint uintVar = 50U;
    cout << "Type aliases:" << endl;
    cout << "ulong: " << sizeof(ulong) << " bytes, value: " << ulongVar << endl;
    cout << "uint: " << sizeof(uint) << " bytes, value: " << uintVar << endl;
    return 0;
}