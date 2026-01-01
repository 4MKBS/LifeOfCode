// Object rest/spread

const user = { id: 1, name: 'Ava', role: 'admin' };
const { role, ...rest } = user;
