<?php
function dd($var)
{
    var_dump($var);
    die();
}


$num = 10;

$floatNum = 10.5;

$numasstr = "10.5";

// echo $num + $floatNum . "\n"; // 20.5
// echo $num + $numasstr . "\n"; // 20.5
// echo is_int($num) . "\n"; // 1 (true)
// echo is_float($floatNum) . "\n"; // 1 (true)
// echo is_numeric($num) . "\n"; // 1 (true)

// casting
$floatNum = (float)$num; // cast to float
$intNum = (int)$floatNum; // cast to int
$str = (string)$num; // cast to bool
echo $floatNum . "\n"; // 10.0
echo $intNum . "\n"; // 10
echo $str . "\n"; // 1 (true)
// dd($str); // 1 (true)

// math
echo "the math is here\n";

echo (pi());
echo "\n\n";
echo (min(0, 150, 30, 20, -8, -200));
echo "\n\n";
echo (max(0, 150, 30, 20, -8, -200));
echo "\n";
echo (abs(-6.7) . "\n"); // 6.7
echo (sqrt(16) . "\n"); // 4
echo (round(0.60) . "\n"); // 1
echo (ceil(2.20) . "\n"); // 3
echo (floor(2.80) . "\n"); // 2
echo (fmod(20, 7) . "\n"); // 6
