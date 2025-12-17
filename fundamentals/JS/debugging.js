// Debugging tips

// - Use console.log, console.table, console.group
// - Use breakpoints in DevTools
// - Use debugger statement to pause execution

function exampleFunction() {
  const data = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
  ];

  console.group('User Data');
  console.table(data);
  console.groupEnd();

  for (let i = 0; i < data.length; i++) {
    // Set a breakpoint on the next line or use debugger statement
    debugger;
    console.log(`Processing user: ${data[i].name}, Age: ${data[i].age}`);
  }
}

exampleFunction(); 

// Note: To see the effects of breakpoints and debugger statements,
// run this code in a browser's DevTools console or a suitable JS environment.
