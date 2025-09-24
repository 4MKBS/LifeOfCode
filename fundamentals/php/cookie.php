<?php
// Setting a Cookie
// A cookie is a small piece of data stored on the user's computer by the web browser.

echo "<h1>PHP Cookie Example</h1>";

// Setting a cookie using setcookie() function
setcookie("user", "John Doe", time() + (86400 * 30), "/"); // 86400 = 1 day
// Parameters: name, value, expiration time, path

// Checking if the cookie is set
if (isset($_COOKIE['user'])) {
    echo "Cookie 'user' is set!<br>";
    echo "Value: " . $_COOKIE['user'] . "<br>";
} else {
    echo "Cookie 'user' is not set!<br>";
}

// Updating a Cookie
setcookie("user", "Jane Doe", time() + (86400 * 30), "/"); // Update the value
echo "Cookie 'user' updated to: " . $_COOKIE['user'] . "<br>";

// Deleting a Cookie
setcookie("user", "", time() - 3600, "/"); // Set expiration time in the past
echo "Cookie 'user' deleted.<br>";

// Example: Storing User Preferences
setcookie("theme", "dark", time() + (86400 * 30), "/");
setcookie("language", "en", time() + (86400 * 30), "/");

if (isset($_COOKIE['theme']) && isset($_COOKIE['language'])) {
    echo "User preferences:<br>";
    echo "Theme: " . $_COOKIE['theme'] . "<br>";
    echo "Language: " . $_COOKIE['language'] . "<br>";
}

// Notes:
// 1. Cookies are sent with HTTP headers, so setcookie() must be called before any output.
// 2. Use cookies for small, non-sensitive data. For sensitive data, use sessions instead.
