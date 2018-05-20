console.log('a = ', a); // undefined
var a = 2;
console.log('a = ', a); // a = 2

/* teoria do que aconteceu

var a;
console.log('a = ', a); // undefined
a = 2;
console.log('a = ', a); // a = 2 

*/

// agora com o let
console.log('b =', b); // erro: b is not defined
let b = 2;
console.log('b =', b);