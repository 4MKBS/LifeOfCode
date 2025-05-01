#include <stdio.h>
int main()
{
    // type variableName = value;

    int a = 5;
    int b = 10;
    int sum = a + b;

    printf("The sum of %d and %d is %d\n", a, b, sum);

    float pi = 3.14;
    double e = 2.718281828459;
    char letter = 'A';
    char str[] = "Hello, World!";
    long long bigNumber = 1234567890123456789LL;
    short smallNumber = 32767;
    unsigned int positiveNumber = 4294967295U;
    unsigned char smallPositiveNumber = 255U;
    signed int negativeNumber = -1234567890;
    signed char negativeSmallNumber = -128;
    unsigned long long veryBigNumber = 18446744073709551615ULL;
    long double veryPreciseNumber = 3.14159265358979323846L;
    int hexNumber = 0x1A3F;      // Hexadecimal representation
    int octalNumber = 0754;      // Octal representation
    int binaryNumber = 0b101010; // Binary representation (C99 and later)
    int booleanTrue = 1;         // True in C
    int booleanFalse = 0;        // False in C
    int nullPointer = 0;         // Null pointer representation
    int infinity = 1.0 / 0.0;    // Infinity representation
    int nanValue = 0.0 / 0.0;    // NaN representation

    // printf all the variables
    printf("Pi: %f\n", pi);
    printf("Euler's number: %lf\n", e);
    printf("Letter: %c\n", letter);
    printf("String: %s\n", str);
    printf("Big number: %lld\n", bigNumber);
    printf("Small number: %hd\n", smallNumber);
    printf("Positive number: %u\n", positiveNumber);
    printf("Small positive number: %hhu\n", smallPositiveNumber);
    printf("Negative number: %d\n", negativeNumber);
    printf("Negative small number: %hhd\n", negativeSmallNumber);
    printf("Very big number: %llu\n", veryBigNumber);
    printf("Very precise number: %Lf\n", veryPreciseNumber);
    printf("Hexadecimal number: %X\n", hexNumber);
    printf("Octal number: %o\n", octalNumber);
    printf("Binary number: %d\n", binaryNumber); // Note: C does not support binary format directly
    printf("Boolean true: %d\n", booleanTrue);
    printf("Boolean false: %d\n", booleanFalse);
    printf("Null pointer: %d\n", nullPointer);

    return 0;
}