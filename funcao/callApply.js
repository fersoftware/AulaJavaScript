function getPrice(tax = 0, currency = 'R$') {
    return `${currency} ${this.price + (1 + tax)}`
}

const product = {
    name: 'Notebook',
    price: 4589,
    desc: 0.15,
    getPrice
}

// para nao dar undefined
global.price = 20;
global.desc = 0.1;
//-----------------
console.log(getPrice()); //R$ 21

console.log(product.getPrice()); //R$ 4590

const car = { price: 49990, desc: 0.20}
console.log(getPrice.call(car)); // R$ 49991
console.log(getPrice.apply(car)); //R$ 49991

console.log(getPrice.call(car, 0.17, '$')); //$ 49991.17
console.log(getPrice.apply(car,[0.17, '$'])); //$ 49991.17
console.log(getPrice.apply(global,[0.17, '$']));//$ 21.17



