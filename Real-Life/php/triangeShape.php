<?php
// Triangle Shape

$size = readline("Enter the size of the triangle: ");


for ($i = 1; $i <= $size; $i++) {
    for ($j = 1; $j <= $i; $j++) {
        echo "* ";
    }
    echo "\n";
}

for ($i = $size; $i >= 1; $i--) {
    for ($j = 1; $j <= $i; $j++) {
        echo "* ";
    }
    echo "\n";
}

echo "\n\n";

// triangle shape like 
//   *
//  * *
// * * *

for ($i = 1; $i <= $size; $i++) {
    for ($j = $size; $j >= $i; $j--) {
        echo "  ";
    }
    for ($k = 1; $k <= $i; $k++) {
        echo "* ";
    }
    echo "\n";
}
// triangle shape like 
// * * *
//  * *
//   *
for ($i = $size; $i >= 1; $i--) {
    for ($j = $size; $j >= $i; $j--) {
        echo "  ";
    }
    for ($k = 1; $k <= $i; $k++) {
        echo "* ";
    }
    echo "\n";
}

// triangle shape like
// * * * * 
//   * * * 
//     * * 
//       *
$tmp = $size;
for ($i = 1; $i <= $size; $i++) {
    for ($j = 1; $j < $i; $j++) {
        echo "  ";
    }
    for ($k = $tmp; $k >= 1; $k--) {
        echo "* ";
    }
    $tmp--;
    echo "\n";
}
echo "\n\n";
for ($i = 1; $i <= $size; $i++) {
    for ($j = 1; $j <= $i; $j++) {
        echo " ";
    }
    for ($k = $size; $k >= $i; $k--) {
        echo "* ";
    }
    echo "\n";
}

// triangle shape like 
// * * * * *
// * *   * *
// *       *
// * *   * *
// * * * * *
// for input 2
$size = $size * 2 + 1;
for ($i = 1; $i <= $size; $i++) {
    for ($j = 1; $j <= $size; $j++) {
        if ($i == 1 || $i == $size || $j == 1 || $j == $size) {
            echo "* ";
        } else {
            if ($i == $j || ($i + $j) == ($size + 1)) {
                echo "* ";
            } else {
                echo "  ";
            }
        }
    }
    echo "\n";
}












// for ($i = $size; $i >= 1; $i--) {
//     for ($j = 1; $j <= $size; $j++) {
//         if ($j <= $i) {
//             echo "* ";
//         } else {
//             echo " ";
//         }
//     }
//     for ($k = $size; $k >= 1; $k--) {
//         if ($k <= $i) {
//             echo " *";
//         } else {
//             echo "   ";
//         }
//     }
//     echo "\n";
// }
// for ($i = 2; $i <= $size; $i++) {
//     for ($j = 1; $j <= $size; $j++) {
//         if ($j <= $i) {
//             echo "* ";
//         } else {
//             echo " ";
//         }
//     }
//     for ($k = $size; $k >= 1; $k--) {
//         if ($k <= $i) {
//             echo " *";
//         } else {
//             echo "   ";
//         }
//     }
//     echo "\n";
// }
