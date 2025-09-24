<?php
// if else
$age = 18;

if ($age >= 18) {
    echo "You are an adult.\n";
} else {
    echo "You are a minor.\n";
}

$password = "1234";
// take input from user
// $userpass = readline("Enter password: ");

if ($userpass == $password) {
    echo "Access granted.\n";
} else {
    echo "Access denied.\n";
}

if ($age >= 18 && $userpass == $password) {
    echo "You are an adult and have access.\n";
} elseif ($age < 18 && !($userpass == $password)) {
    echo "You are a minor but have access.\n";
} else {
    echo "You are a minor and do not have access.\n";
}

// switch case
// $day = readline("Enter day (1-7): ");


switch ($day) {
    case 1:
        echo "Monday\n";
        break;
    case 2:
        echo "Tuesday\n";
        break;
    case 3:
        echo "Wednesday\n";
        break;
    case 4:
        echo "Thursday\n";
        break;
    case 5:
        echo "Friday\n";
        break;
    case 6:
        echo "Saturday\n";
        break;
    case 7:
        echo "Sunday\n";
        break;
    default:
        echo "Invalid day\n";
}


// ternary operator

$age = 8;
$access = ($age >= 18) ? "Access granted" : "Access denied";
echo $access . "\n";


//nested if else
$income = 45000;
$expenses = 30000;

if ($income > $expenses) {
    $savings = $income - $expenses;
    if ($savings > 10000) {
        echo "You have good savings of $$savings.\n";
    } else {
        echo "Your savings are $$savings. Try to save more.\n";
    }
} elseif ($income == $expenses) {
    echo "You are breaking even with no savings.\n";
} else {
    $debt = $expenses - $income;
    echo "You are in debt of $$debt. Try to reduce your expenses.\n";
}
