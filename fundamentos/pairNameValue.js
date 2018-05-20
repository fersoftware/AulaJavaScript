// par nome/valor
const salutation = 'opa'; // contexto léxico 1

function exec(){
    const salutation = 'Falaaa'; // contexto léxico 2
    return salutation;
}

// Objetos são grupo aninhados de pares nome/valor
const client = {
    name: 'Pedro',
    age: 32,
    weight: 98,
    address: {
        street: 'Rua Muito Legal',
        number: 123
    } 
}

console.log(salutation); // opa
console.log(exec()); // Falaaa

console.log(client);
/*
{ name: 'Pedro',
  age: 32,
  weight: 98,
  address: { street: 'Rua Muito Legal', number: 123 } }
]
*/


