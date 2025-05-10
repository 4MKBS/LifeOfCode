<?php
include "function.php";


// date and time
date_default_timezone_set("asia/dhaka");

echo "Current date: " . date("Y-m-d") . "\n";
echo "Current time: " . date("H:i:s") . "\n";
echo "Current date and time: " . date("Y-m-d H:i:s") . "\n";
echo "Current timestamp: " . time() . "\n";

echo "\n\n";
hello("sakib");

echo "\n\n";

require "squareFormula.php";
