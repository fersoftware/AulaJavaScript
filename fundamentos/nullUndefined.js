let value // não inicializado
console.log(value); // undefined
//console.log(value2); // value2 is not defined

/* não aponta para nenhum local de memória*/
value = null // ausência de valor
console.log(value); //nulll

//não é ideal atribuir para undefined
// ideial é atribuir null 

//console.log(value.toString());  // erro
//Cannot read property 'toString' of null

const product = {};
console.log(product.price); // undefined

//const product = {};
//console.log(product.price.a); // Cannot read property 'a' of undefined

product.price = 3.50;
console.log(product); // { price: 3.5 }

//somente para fins didaticos
product.price = undefined // evite atribuir undefined
console.log(product.price); // undefined
console.log(product); // { price: undefined }

//delete product.price;
//console.log(product); // {}

product.price = null // sem preço
console.log(!!product.price); // false
console.log(product); // { price: null }


