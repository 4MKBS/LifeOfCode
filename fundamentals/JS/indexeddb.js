// IndexedDB outline

const req = indexedDB.open('mydb', 1);
req.onupgradeneeded = event => {
    const db = event.target.result;
    db.createObjectStore('items', { keyPath: 'id' });
};
req.onsuccess = event => {
    const db = event.target.result;
    const tx = db.transaction('items', 'readwrite');
    tx.objectStore('items').add({ id: 1, name: 'First' });
};

req.onerror = event => {
    console.error('IndexedDB error:', event.target.errorCode);
};

export { req };
