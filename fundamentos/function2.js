// Armazenando uma funcao em uma variavel
const printSum =  function(a,b){
    console.log(a+b);    
}

printSum(2,3); // 5

// Armazenando uso funcao arrow em uma variavel
const sum = (a,b) => {
    return a+b;
}

console.log(sum(2,3)); // 5

// retorno implicito
const subtraction = (a,b) => a - b;
console.log(subtraction(2,3)); // -1

const print2 = a => console.log(a);
print2('Legal!!!!'); // Legal!!!

