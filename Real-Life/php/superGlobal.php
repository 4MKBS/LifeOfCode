<?php
// Display all PHP superglobals
echo '<pre>';

// $_GET
echo '$_GET: ';
print_r($_GET);

// $_POST
echo '$_POST: ';
print_r($_POST);

// $_REQUEST
echo '$_REQUEST: ';
print_r($_REQUEST);

// $_SERVER
echo '$_SERVER: ';
print_r($_SERVER);

// $_FILES
echo '$_FILES: ';
print_r($_FILES);

// $_ENV
echo '$_ENV: ';
print_r($_ENV);

// $_COOKIE
echo '$_COOKIE: ';
print_r($_COOKIE);

// $_SESSION (if session is started)
if (session_status() === PHP_SESSION_ACTIVE) {
    echo '$_SESSION: ';
    print_r($_SESSION);
} else {
    echo '$_SESSION: Session not started.';
}

// $GLOBALS
echo '$GLOBALS: ';
print_r($GLOBALS);

echo '</pre>';
