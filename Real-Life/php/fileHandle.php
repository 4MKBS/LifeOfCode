<?php
// File Handling in PHP

// File path
$filePath = "example.txt";

// 1. Create and write to a file
$file = fopen($filePath, "w"); // Open file for writing
if ($file) {
    fwrite($file, "Hello, this is a test file.\n");
    fwrite($file, "File handling in PHP is simple.\n");
    fclose($file); // Close the file
    echo "File created and written successfully.\n";
} else {
    echo "Failed to create the file.\n";
}

// 2. Read from a file
$file = fopen($filePath, "r"); // Open file for reading
if ($file) {
    echo "File contents:\n";
    while (($line = fgets($file)) !== false) {
        echo $line;
    }
    fclose($file); // Close the file
} else {
    echo "Failed to open the file for reading.\n";
}

// 3. Append to a file
$file = fopen($filePath, "a"); // Open file for appending
if ($file) {
    fwrite($file, "Appending a new line to the file.\n");
    fclose($file); // Close the file
    echo "Data appended successfully.\n";
} else {
    echo "Failed to open the file for appending.\n";
}

// 4. Check if a file exists
if (file_exists($filePath)) {
    echo "The file '$filePath' exists.\n";
} else {
    echo "The file '$filePath' does not exist.\n";
}

// 5. Delete a file
if (file_exists($filePath)) {
    if (unlink($filePath)) {
        echo "The file '$filePath' has been deleted.\n";
    } else {
        echo "Failed to delete the file '$filePath'.\n";
    }
} else {
    echo "The file '$filePath' does not exist, so it cannot be deleted.\n";
}
