let a = 10;
let b = null;
let c = null;

a = 10;
a += a;
console.log("a:",a);

b = ++a + 5;

c = a++ + 5;

console.log("a:",a);

a = 0;
console.log("b:",b);
console.log("c:",c);
