

// Logical operators with Non booleans

let userColor = 0;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log("currentColor: "+ currentColor);

//Bitwise operators
// Decimal -> Binary
// 1 = 00000001;
// 2 = 00000010;
// 3 = 00000011;

console.log(1 | 2 ); //Bitwise OR
// 1 = 00000001;
// 2 = 00000010;
// R = 00000011 //There should be atleast one 1 

console.log(1 & 2 ); //Bitwise AND
// 1 = 00000001;
// 2 = 00000010;
// R = 00000000 //All should be 1 

// console.log(1 | 2 | 3); //Bitwise OR
// 1 = 00000001;
// 2 = 00000010;
// 3 = 00000101;
 // R = 00000111;

// console.log(1 ^ 2 ); //Bitwise XOR      
// R = 00000011;    

// console.log(~1 ); //Bitwise NOT


//Read , Write , Execute
// 00000100
// 00000010
// 00000001
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
//With bitwise OR operator we can add permission
myPermission = myPermission | executePermission;
console.log(myPermission);

//With bitwise AND operator we can check if permission is present
console.log("PERMISSIONS" );
console.log("Read: "+( myPermission & readPermission ? "yes": "no"));
console.log("Write: " + ( myPermission & writePermission ? 'yes': 'no'));
console.log("Execute: " + (myPermission & executePermission ? 'yes': 'no'));




