<?php

// function divide1($dividend, $divisor)
// {
//     if ($divisor == 0) {
//         throw new Exception("Division by zero");
//     }
//     return $dividend / $divisor;
// }

// echo divide(5, 0);


function divide($dividend, $divisor)
{
    if ($divisor == 0) {
        throw new Exception("Division by zero");
    }
    return $dividend / $divisor;
}

try {
    echo divide(5, 0);
} catch (Exception $e) {
    echo "Unable to divide.\n";
    echo "Error: " . $e->getMessage();
    echo "\nFile: " . $e->getFile();
}

echo "\n\n\n";
function divide2($dividend, $divisor)
{
    if ($divisor == 0) {
        throw new Exception("Division by zero");
    }
    return $dividend / $divisor;
}

try {
    echo divide(5, 0);
} catch (Exception $e) {
    echo "Unable to divide. ";
} finally {
    echo "Process complete.";
}

echo "\n\n\n";
echo "New Exception\n";
function divide3($dividend, $divisor)
{
    if ($divisor == 0) {
        throw new Exception("Division by zero", 1);
    }
    return $dividend / $divisor;
}

try {
    echo divide(5, 0);
} catch (Exception $ex) {
    $code = $ex->getCode();
    $message = $ex->getMessage();
    $file = $ex->getFile();
    $line = $ex->getLine();
    echo "Exception thrown in $file on line $line: [Code $code]
  $message";
}
