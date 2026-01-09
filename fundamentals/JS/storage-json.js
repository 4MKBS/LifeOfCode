// JSON and Web Storage

const user = { name: 'Ava', role: 'admin' };
const json = JSON.stringify(user); // serialize
const back = JSON.parse(json); // parse

// Defensive storage usage (browser-only APIs)
if (typeof localStorage !== 'undefined') {
    localStorage.setItem('user', json);
    const saved = localStorage.getItem('user');
    const parsed = saved ? JSON.parse(saved) : null;
    console.log('from storage', parsed);
}

// sessionStorage works the same way for per-tab data
// Remove items with removeItem / clear
