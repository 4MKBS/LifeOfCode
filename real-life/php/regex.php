<?php
// Example of regex usage in PHP

// Matching a pattern
$pattern = "/^hello/i"; // Case-insensitive match for "hello" at the start of a string
$string = "Hello World!";
if (preg_match($pattern, $string)) {
    echo "Pattern matched!\n";
} else {
    echo "No match found.\n";
}

// Replacing text using regex
$pattern = "/world/i"; // Case-insensitive match for "world"
$replacement = "PHP";
$string = "Hello World!";
$result = preg_replace($pattern, $replacement, $string);
echo $result . "\n"; // Outputs: Hello PHP!

// Splitting a string using regex
$pattern = "/[\s,]+/"; // Matches spaces or commas
$string = "apple, orange banana";
$result = preg_split($pattern, $string);
print_r($result); // Outputs: Array ( [0] => apple [1] => orange [2] => banana )

// Extracting matches using regex
$pattern = "/(\d{4})-(\d{2})-(\d{2})/"; // Matches a date in YYYY-MM-DD format
$string = "Today's date is 2023-10-05.";
if (preg_match($pattern, $string, $matches)) {
    echo "Year: " . $matches[1] . ", Month: " . $matches[2] . ", Day: " . $matches[3] . "\n";
}

// Validating an email address
$email = "example@domain.com";
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Valid email address.\n";
} else {
    echo "Invalid email address.\n";
}

// Checking if a string contains only digits
$string = "12345";
if (preg_match("/^\d+$/", $string)) {
    echo "String contains only digits.\n";
} else {
    echo "String contains non-digit characters.\n";
}
// Demonstrating quantifiers in regex
$pattern = "/a{2,4}/"; // Matches between 2 and 4 occurrences of the letter 'a'
$string = "aaaabc";
if (preg_match($pattern, $string)) {
    echo "Pattern with quantifier matched!\n"; // Outputs: Pattern with quantifier matched!
} else {
    echo "No match found.\n";
}

// Matching a specific character
$pattern = "/[xyz]/"; // Matches any one of the characters 'x', 'y', or 'z'
$string = "apple";
if (preg_match($pattern, $string)) {
    echo "String contains one of the specified characters.\n";
} else {
    echo "String does not contain any of the specified characters.\n";
}
