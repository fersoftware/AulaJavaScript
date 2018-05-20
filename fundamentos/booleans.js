let isActive = false;
console.log(isActive); // false

isActive = true;
console.log(isActive); // true

isActive = 1;
console.log(isActive); // 1
console.log(!!isActive); // true
console.log(!isActive); // false
console.log(!true); // false
console.log(!false); // true

console.log('os verdadeiros....');
console.log(!!3); // true;
console.log(!!-1); // true;
console.log(!! ' '); // true
console.log(!![]); // true
console.log(!!{}); // true
console.log(!!Infinity); // true
console.log(!!(isActive = true)); // true
console.log(!!(isActive = Infinity)); // true
console.log(!!(isActive = 33)); // true


console.log('os falsos...');
console.log(!!0); // false
console.log(!!''); // false
console.log(!!null); // false
console.log(!!NaN); // false
console.log(!!undefined); // false
console.log(!!(isActive = false)); // false

console.log('pra finalizar...');
console.log(!!('' || null || 0 || ' ')); // true

let name = '';
console.log(name || 'Desconhecido'); // Desconhecido

name = 'Lucas';
console.log(name || 'Desconhecido'); // Lucas

























