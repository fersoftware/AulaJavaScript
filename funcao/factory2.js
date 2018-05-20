function createProduct(name, price) {
    return {
        name,
        price,
        discount: 0.1
    }
}
console.log(createProduct('Notebook, 2199.49'));
console.log(createProduct('IPad, 1199.49'));
/*

{ name: 'Notebook, 2199.49', price: undefined, discount: 0.1 }
{ name: 'IPad, 1199.49', price: undefined, discount: 0.1 }

*/
