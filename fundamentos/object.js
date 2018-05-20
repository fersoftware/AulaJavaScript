const prod1 = {};
prod1.name = 'Celular Ultra Mega';
console.log(prod1.name); // Celular Ultra Mega

prod1.price = 4998.90;
console.log(prod1); // { name: 'Celular Ultra Mega', price: 4998.9 }

//Apenas para fins didáticos
prod1['desconto Legal'] = 0.40; // Evitar atributos com espaço
console.log(prod1); // { name: 'Celular Ultra Mega',price: 4998.9,'desconto Legal': 0.4 }

const prod2 = {
    name : 'Camisa Polo',
    price : 79.90    
}
console.log(prod2); //{ name: 'Camisa Polo', price: 79.9 }

'{ "name" : "Camisa Polo", "price" : 79.90 }'; // formato JSON
// JSON não é Objeto, JSON é Textual