// ArrayBuffer and TypedArrays basics

const buffer = new ArrayBuffer(8); // 8 bytes
const view = new DataView(buffer);
view.setUint32(0, 0xdeadbeef);
view.getUint32(0); // 3735928559

const ints = new Uint8Array(buffer);
ints[0] = 255;
console.log(ints); // Uint8Array(8) [ 255, 190, 173, 222, 0, 0, 0, 0 ]

// Creating a Float32Array
const floatBuffer = new ArrayBuffer(16); // 16 bytes
const floatView = new Float32Array(floatBuffer);
floatView[0] = 3.14;
floatView[1] = 2.71;
console.log(floatView); // Float32Array(4) [ 3.140000104904175, 2.7100000381469727, 0, 0 ]

// Using TypedArrays for binary data manipulation
const byteBuffer = new ArrayBuffer(4);
const byteView = new Uint8Array(byteBuffer);
byteView[0] = 1;
byteView[1] = 2;
byteView[2] = 3;
byteView[3] = 4;
console.log(byteView); // Uint8Array(4) [ 1, 2, 3, 4 ]

const combinedView = new DataView(byteBuffer);
console.log(combinedView.getUint32(0)); // 67305985