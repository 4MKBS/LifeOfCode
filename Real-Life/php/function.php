<?php
function dd($var)
{
    var_dump($var);
    die();
}

function hello($name = "MKBS")
{
    echo "Hello, $name\n";
}
function addition($a, $b)
{
    return $a + $b;
}

// dd(hello());

echo addition(10, 20); // 30

// annonymous function
$sum = function ($a, $b) {
    return $a + $b;
};

echo "\n" . $sum(10, 20); // 30


// arrow function
$sum = fn($a, $b) => $a + $b;
echo "\n" . $sum(33, 932); // 965
