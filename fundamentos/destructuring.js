// novo recurso do ES2015
const person = {
    name: 'Ana',
    age: 5,
    address: {
        street: 'Rua ABC',
        number:  1000
    }
}

const {name, age} = person;
console.log(name, age); // Ana 5

const {name: n, age: i} = person;
console.log(n,i); // Ana 5

const { lastName, goodHumored = true} = person;
console.log(lastName, goodHumored); // undefined true

const {address: {street, number, zipCode}} = person
console.log(street, number, zipCode); // Rua ABC 1000 undefined