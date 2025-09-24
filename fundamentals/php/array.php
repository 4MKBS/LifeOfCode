<?php
// Indexed Array
$indexedArray = array("Apple", "Banana", "Cherry");
echo "Indexed Array: ";
print_r($indexedArray);
echo "\n";

// Associative Array
$associativeArray = array("first" => "John", "second" => "Jane", "third" => "Doe");
echo "Associative Array: ";
print_r($associativeArray);
echo "\n";

// Multidimensional Array
$multiDimensionalArray = array(
    array("John", 25, "Engineer"),
    array("Jane", 30, "Doctor"),
    array("Doe", 22, "Designer")
);
echo "Multidimensional Array: ";
print_r($multiDimensionalArray);
echo "\n";

// Mixed Array
$mixedArray = array("Apple", "Banana", "Cherry", "first" => "John", "second" => "Jane");
echo "Mixed Array: ";
print_r($mixedArray);
echo "\n";
