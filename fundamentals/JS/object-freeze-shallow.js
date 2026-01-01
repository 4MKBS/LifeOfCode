// Object.freeze is shallow

const config = Object.freeze({ nested: { value: 1 } });
config.nested.value = 2; // allowed because nested is not frozen
