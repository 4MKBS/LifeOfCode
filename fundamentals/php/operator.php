<?php

// operators

$a = 10;
$b = 20;

echo $a + $b . "\n"; // addition
echo $a - $b . "\n"; // subtraction
echo $a * $b . "\n"; // multiplication
echo $a / $b . "\n"; // division
echo $a % $b . "\n"; // modulus
echo $a ** $b . "\n"; // exponentiation
echo $a++ . "\n"; // post-increment
echo $a-- . "\n"; // post-decrement
echo ++$a . "\n"; // pre-increment
echo --$a . "\n"; // pre-decrement

// assignment operators
$c = 10;
$d = 20;
$c += $d; // $c = $c + $d
echo $c . "\n"; // 30
$c -= $d; // $c = $c - $d
echo $c . "\n"; // 10
$c *= $d; // $c = $c * $d
echo $c . "\n"; // 200
$c /= $d; // $c = $c / $d
echo $c . "\n"; // 10
$c %= $d; // $c = $c % $d
echo $c . "\n"; // 10

// comparison operators
echo "comparison operators\n";
$e = 10;
$f = 20;
echo ($e == $f) . "\n"; // equal
echo ($e != $f) . "\n"; // not equal
echo ($e === $f) . "\n"; // identical
echo ($e !== $f) . "\n"; // not identical
echo ($e < $f) . "\n"; // less than
echo ($e > $f) . "\n"; // greater than
echo ($e <= $f) . "\n"; // less than or equal to
echo ($e >= $f) . "\n"; // greater than or equal to

// logical operators
echo "logical operators\n";
$g = true;
$h = false;
echo ($g && $h) . "\n"; // and
echo ($g || $h) . "\n"; // or
echo (!$g) . "\n"; // not
echo ($g xor $h) . "\n"; // xor

// ternary operator
echo "ternary operator\n";
$age = 18;
echo ($age >= 18) ? "Adult" : "Minor"; // Adult

// null coalescing operator
echo "null coalescing operator\n";
$var = "MK";
echo $var ?? "Default Value"; // Default Value