<?php
$num = 10;
$floatNum = 10.5;
$bool = true;
$str = "Hello, World!";
$array = array(1, 2, 3, 4, 5);
$assocArray = array("name" => "John", "age" => 30, "city" => "New York");
$nullVar = null;

echo "Integer: $num\n";
echo "Float: $floatNum\n";
echo "Boolean: $bool\n";
echo "String: $str\n";
echo "Array: ";
print_r($array);
echo "Associative Array: ";
print_r($assocArray);
echo "Null Variable: $nullVar\n";


// concatenation
$firstName = "John";
$lastName = "Doe";
$fullName = $firstName . " " . $lastName;
echo "Full Name: $fullName\n";
