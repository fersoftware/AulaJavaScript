const values = [7.7, 8.9, 6.3, 9.2];
console.log(values[0], values[3]); // 7.7 9.2
console.log(values[4]); // undefined

values[4] = 10;
console.log(values); // [ 7.7, 8.9, 6.3, 9.2, 10 ];

//values[10] = 10;
//console.log(values); // [ 7.7, 8.9, 6.3, 9.2, 10, <5 empty items>, 10 ];

console.log(values.length); // 11

values.push({id: 3}, false, null,  'teste'); 
console.log(values); //[ 7.7, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null, 'teste' ]

console.log(values.pop()); //teste
console.log(values); //[ 7.7, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null ]

delete values[0];
console.log(values); //[ <1 empty item>, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null ]

console.log(typeof values); // object