package main

import (
    "fmt"
    "math"
    "strconv"
)

/*
 * Variables in Go: A Detailed Explanation
 *
 * A variable is a named storage location in memory that holds a value.
 * Variables allow programs to store, retrieve, and manipulate data.
 *
 * Key Points:
 * 1. Go is statically typed - variables have a specific type
 * 2. Go supports type inference - the compiler can deduce types
 * 3. Variables must be used once declared (unused variables cause compile errors)
 * 4. Go has unique declaration syntax options
 * 5. Variables have a scope that determines where they can be accessed
 *
 * Basic Syntax Options:
 * - var name type = value   (standard declaration)
 * - var name type           (declaration with zero value)
 * - var name = value        (type inference)
 * - name := value           (short declaration with type inference)
 *
 * Common Data Types in Go:
 * - bool: true or false
 * - string: text in double quotes
 * - int, int8, int16, int32, int64: integers with varying sizes
 * - uint, uint8, uint16, uint32, uint64: unsigned integers
 * - float32, float64: floating-point numbers
 * - complex64, complex128: complex numbers
 * - byte: alias for uint8
 * - rune: alias for int32 (represents a Unicode code point)
 */

func main() {
    // Example 1: Basic Variable Declaration and Initialization
    var age int = 30
    fmt.Println("Age:", age)

    // Example 2: Type Inference - compiler determines the type
    var name = "John Doe"
    fmt.Printf("Name: %s (Type: %T)\n", name, name)

    // Example 3: Short Variable Declaration (most common in functions)
    salary := 75000.50
    fmt.Printf("Salary: $%.2f (Type: %T)\n", salary, salary)

    // Example 4: Zero Values (default values when no initial value provided)
    var initialized int = 100
    var uninitialized int // Will be 0
    fmt.Println("Initialized:", initialized)
    fmt.Println("Uninitialized:", uninitialized)

    var emptyString string        // Will be "" (empty string)
    var defaultBool bool          // Will be false
    var defaultFloat float64      // Will be 0.0
    var defaultPointer *int       // Will be nil
    fmt.Println("Default string:", emptyString == "")
    fmt.Println("Default bool:", defaultBool)
    fmt.Println("Default float:", defaultFloat)
    fmt.Println("Default pointer is nil:", defaultPointer == nil)

    // Example 5: Multiple Variables Declaration
    var a, b, c int = 1, 2, 3
    fmt.Println("Multiple variables:", a, b, c)

    // Example 6: Multiple Variables with Different Types
    var (
        firstName string = "Jane"
        lastName  string = "Smith"
        userAge   int    = 28
        isActive  bool   = true
    )
    fmt.Printf("User: %s %s, Age: %d, Active: %t\n", firstName, lastName, userAge, isActive)

    // Example 7: Shadowing Variables
    x := 10
    fmt.Println("Outer x:", x)
    {
        x := 20 // This is a new variable that shadows the outer x
        fmt.Println("Inner x:", x)
    }
    fmt.Println("Outer x after block:", x) // Still 10

    // Example 8: Constants
    const pi = 3.14159
    const (
        daysInWeek   = 7
        hoursInDay   = 24
        minutesInDay = hoursInDay * 60
    )
    fmt.Println("Pi:", pi)
    fmt.Println("Minutes in a day:", minutesInDay)

    // Example 9: Iota for Enumerated Constants
    const (
        Sunday    = iota // 0
        Monday           // 1
        Tuesday          // 2
        Wednesday        // 3
        Thursday         // 4
        Friday           // 5
        Saturday         // 6
    )
    fmt.Println("Monday is day:", Monday)
    fmt.Println("Friday is day:", Friday)

    // Example 10: Type Conversion
    var integer int = 42
    var float float64 = float64(integer)
    var text string = strconv.Itoa(integer) // Integer to string
    
    fmt.Printf("Integer: %d -> Float: %f -> String: %s\n", integer, float, text)

    // Example 11: Working with different numeric types
    var smallInt int8 = 127 // Max value for int8
    // var invalidInt int8 = 128 // Overflow: would cause a compile error
    fmt.Println("Max int8:", smallInt)

    // Example 12: Scope Rules
    scopeExample()
    
    // Example 13: Complex types
    complexNum := 3 + 4i
    fmt.Printf("Complex number: %v, Real: %f, Imaginary: %f, Magnitude: %f\n", 
        complexNum, real(complexNum), imag(complexNum), 
        math.Sqrt(float64(real(complexNum)*real(complexNum) + imag(complexNum)*imag(complexNum))))
}

func scopeExample() {
    // This demonstrates variable scope
    outerVar := "I'm at function level"
    fmt.Println(outerVar)
    
    if true {
        innerVar := "I'm block-scoped"
        fmt.Println(innerVar)
        fmt.Println(outerVar) // Can access outer variable
    }
    
    // Uncommenting this would cause a compile error - innerVar is out of scope
    // fmt.Println(innerVar)
}

/*
 * Best Practices for Variables in Go:
 *
 * 1. Use short variable declarations (:=) in functions
 * 2. Use meaningful, descriptive names
 * 3. Use camelCase for local variables and PascalCase for exported (public) variables
 * 4. Keep variable scope as limited as possible
 * 5. Choose appropriate types based on data requirements
 * 6. Use constants for values that won't change
 * 7. Avoid unused variables (they cause compile errors)
 * 8. Consider zero values when designing your code
 */