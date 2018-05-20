let _double = function (a) {
    return 2 * a;
}

_double = (a) => {
    return 2 * a;
}

_double = a => 2 * a;
console.log(_double(Math.PI)); //6.283185307179586
O

let hi = function () {
    return 'Hi';    
}

hi = () => 'Olá';
hi = _ => 'Olá' // possui um param
console.log(hi()); // Olá