#include <bits/stdc++.h>
using namespace std;

int main()
{
    // Demonstrate all types of typecasting in C++

    // 1. Implicit casting (automatic type conversion)
    int num = 10;
    double d1 = num; // Implicit cast from int to double
    cout << "Implicit cast: " << num << " (int) to " << d1 << " (double)" << endl;

    // 2. C-style/explicit casting
    double pi = 3.14159;
    int approxPi = (int)pi; // C-style cast
    cout << "C-style cast: " << pi << " to " << approxPi << endl;

    // 3. Function-style casting
    int intVal = int(pi); // Function-style cast
    cout << "Function-style cast: " << pi << " to " << intVal << endl;

    // 4. C++ style casts
    // a. static_cast - for conversions with compile-time checking
    float f = 3.14f;
    int i = static_cast<int>(f);
    cout << "static_cast: " << f << " to " << i << endl;

    // b. dynamic_cast - for safe downcasting in inheritance hierarchies
    class Base
    {
    public:
        virtual ~Base() {}
    };
    class Derived : public Base
    {
    public:
        void derivedFunc() { cout << "Derived function" << endl; }
    };

    Base *basePtr = new Derived();
    Derived *derivedPtr = dynamic_cast<Derived *>(basePtr); // Only works with polymorphic types
    if (derivedPtr)
    {
        cout << "dynamic_cast successful" << endl;
        derivedPtr->derivedFunc();
    }

    // c. const_cast - to remove const-ness
    const int c = 10;
    int *nonConstPtr = const_cast<int *>(&c);
    cout << "const_cast: removed const from " << c << endl;

    // d. reinterpret_cast - low-level reinterpreting of bit patterns
    int *p = new int(42);
    uintptr_t addr = reinterpret_cast<uintptr_t>(p);
    cout << "reinterpret_cast: pointer to integer " << addr << endl;

    // Clean up
    delete basePtr;
    delete p;
}