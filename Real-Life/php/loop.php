<?php

for ($i = 0; $i < 5; $i++) {
    echo "The number is: $i\n";
}
echo "interval\n";
$j = 5;
while ($j > 0) {
    echo "The number is: $j\n";
    $j--;
}
echo "interval 2\n";
$k = 0;
do {
    echo "The number is: $k\n";
    $k++;
} while ($k < 5);




// foreach loop
$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $x) {
    echo "$x \n";
}


for ($x = 0; $x < 10; $x++) {
    if ($x == 2) continue; // skip the iteration when $x is 2
    if ($x == 4) {
        break;
    }

    echo "The number is: $x \n";
}
