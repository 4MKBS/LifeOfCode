/*
 * Titile: cookie.js
 * Description: write description here
 * Author: Muhammad Khairul Bashar Sakib ( MKBS )
 * Date: 03/12/2025 14:19:54
 */

// Cookie Example
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

console.log('Username Cookie:', getCookie('username'));