<?php
// JSON in PHP

// Encoding Data to JSON
$data = [
    "name" => "John Doe",
    "age" => 30,
    "email" => "johndoe@example.com",
    "skills" => ["PHP", "JavaScript", "HTML"]
];
$jsonData = json_encode($data, JSON_PRETTY_PRINT);
echo "Encoded JSON:\n";
echo $jsonData;

// Decoding JSON to PHP Array
$jsonString = '{"name":"Jane Doe","age":25,"email":"janedoe@example.com","skills":["Python","CSS","SQL"]}';
$decodedArray = json_decode($jsonString, true); // true for associative array
echo "\n\nDecoded JSON to Array:\n";
print_r($decodedArray);

// Decoding JSON to PHP Object
$decodedObject = json_decode($jsonString); // Default is object
echo "\n\nDecoded JSON to Object:\n";
print_r($decodedObject);

// Handling JSON Errors
$invalidJson = '{"name": "Invalid JSON", "age": 30'; // Missing closing brace
json_decode($invalidJson);
if (json_last_error() !== JSON_ERROR_NONE) {
    echo "\n\nJSON Error: " . json_last_error_msg();
}

// Working with JSON Options
$optionsData = [
    "name" => "Alice",
    "age" => 28,
    "isAdmin" => true
];
$optionsJson = json_encode($optionsData, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
echo "\n\nJSON with Options:\n";
echo $optionsJson;

// Example of JSON_UNESCAPED_UNICODE
$unicodeData = ["message" => "こんにちは世界"]; // "Hello World" in Japanese
$unicodeJson = json_encode($unicodeData, JSON_UNESCAPED_UNICODE);
echo "\n\nJSON with Unicode:\n";
echo $unicodeJson;

// Checking if a String is Valid JSON
function isValidJson($string)
{
    json_decode($string);
    return (json_last_error() === JSON_ERROR_NONE);
}

$validJsonString = '{"key": "value"}';
$invalidJsonString = '{"key": "value"';
echo "\n\nIs Valid JSON (valid string): " . (isValidJson($validJsonString) ? "Yes" : "No");
echo "\nIs Valid JSON (invalid string): " . (isValidJson($invalidJsonString) ? "Yes" : "No");
