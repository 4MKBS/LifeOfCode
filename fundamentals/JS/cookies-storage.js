// Cookies & Storage Basics (browser only)

// ===== COOKIES =====
// Set a cookie
function setCookie(name, value, options = {}) {
    let cookieStr = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    
    if (options.maxAge) cookieStr += `; max-age=${options.maxAge}`;
    if (options.path) cookieStr += `; path=${options.path}`;
    if (options.domain) cookieStr += `; domain=${options.domain}`;
    if (options.secure) cookieStr += '; secure';
    if (options.sameSite) cookieStr += `; samesite=${options.sameSite}`;
    
    document.cookie = cookieStr;
}

// Get a cookie by name
function getCookie(name) {
    const cookies = document.cookie.split('; ').reduce((acc, pair) => {
        const [key, val] = pair.split('=');
        acc[decodeURIComponent(key)] = decodeURIComponent(val);
        return acc;
    }, {});
    return cookies[name];
}

// Delete a cookie
function deleteCookie(name) {
    setCookie(name, '', { maxAge: -1 });
}

// ===== LOCAL STORAGE =====
function setLocal(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getLocal(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

function removeLocal(key) {
    localStorage.removeItem(key);
}

// ===== SESSION STORAGE =====
function setSession(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
}

function getSession(key) {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

// Example usage:
// setCookie('theme', 'dark', { maxAge: 3600, path: '/' });
// console.log(getCookie('theme'));
// setLocal('user', { name: 'John', id: 123 });
// console.log(getLocal('user'));
