<?php
// Example 1: Basic Callback Function
function greet($name, $callback)
{
    echo "Hello, $name! ";
    $callback();
}

greet("Alice", function () {
    echo "Welcome to the callback function example.\n";
});

// Example 2: Callback with Parameters
function calculate($a, $b, $callback)
{
    return $callback($a, $b);
}

$result = calculate(10, 5, function ($x, $y) {
    return $x + $y;
});
echo "The sum is: $result\n";

// Example 3: Using Named Functions as Callbacks
function multiply($x, $y)
{
    return $x * $y;
}

$result = calculate(10, 5, 'multiply');
echo "The product is: $result\n";

// Example 4: Array Map with Callback
$numbers = [1, 2, 3, 4, 5];
$squaredNumbers = array_map(function ($num) {
    return $num * $num;
}, $numbers);

echo "Squared Numbers: " . implode(", ", $squaredNumbers) . "\n";

// Example 5: Callback with Object Methods
class Greeter
{
    public function sayGoodbye()
    {
        echo "Goodbye from the Greeter class!\n";
    }
}

$greeter = new Greeter();
greet("Bob", [$greeter, 'sayGoodbye']);
