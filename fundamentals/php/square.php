<?php

// Square Shape

$size = readline("Enter the size of the square: ");

for ($i = 1; $i <= $size; $i++) {
    for ($j = 1; $j <= $size; $j++) {
        echo "* ";
    }
    echo "\n";
}
