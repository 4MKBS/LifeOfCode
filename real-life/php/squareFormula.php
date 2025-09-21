<?php

echo "This program calculates the square of a binomial expression (a + b)^2.\n";
echo "The formula is: (a + b)^2 = a^2 + 2ab + b^2\n\n";
$a = readline("Enter the value of a: ");
$b = readline("Enter the value of b: ");

$c = ($a * $a) + 2 * $a * $b + ($b * $b);

echo "\nThe result of ($a + $b)^2 is: $c\n";
