// Apply defaults with Object.assign

const defaults = { theme: 'light', lang: 'en' };
const user = { lang: 'bn' };
const settings = Object.assign({}, defaults, user);
