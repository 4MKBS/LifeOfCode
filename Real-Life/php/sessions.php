<?php
// Starting a PHP session
session_start();

// What are Sessions?
// Sessions are a way to store information (variables) to be used across multiple pages.
// Unlike cookies, the information is not stored on the user's computer but on the server.

// Setting Session Variables
$_SESSION['username'] = 'JohnDoe';
$_SESSION['email'] = 'johndoe@example.com';

// Accessing Session Variables
echo 'Username: ' . $_SESSION['username'] . '<br>';
echo 'Email: ' . $_SESSION['email'] . '<br>';

// Checking if a Session Variable is Set
if (isset($_SESSION['username'])) {
    echo 'Session is active for user: ' . $_SESSION['username'] . '<br>';
}

// Unsetting a Specific Session Variable
unset($_SESSION['email']);

// Destroying the Entire Session
// This removes all session variables and ends the session
session_destroy();




// Start the session
session_start();

// Set some session variables (for demonstration purposes)
$_SESSION['username'] = 'JohnDoe';
$_SESSION['role'] = 'admin';

// Display session variables before destroying the session
echo 'Session variables before destroying: ';
print_r($_SESSION);

// Destroy the session
session_destroy();

// Unset all session variables (optional but recommended)
$_SESSION = [];

// Delete the session cookie (optional but ensures complete logout)
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(
        session_name(),
        '',
        time() - 42000,
        $params["path"],
        $params["domain"],
        $params["secure"],
        $params["httponly"]
    );
}

// Display session variables after destroying the session
echo '<br>Session variables after destroying: ';
print_r($_SESSION);
