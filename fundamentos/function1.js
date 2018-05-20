// Funcao sem retorno
function printSum(a,b)
{
    console.log(a+b);    
}

printSum(2,3); // 5
printSum(2); // NaN
printSum(2,10,4,5,6); // 12
printSum(); // NaN

// Funcao com retorno
function sum(a,b = 0)
{
    return a + b;
}

console.log(sum(2,3)); // 5
console.log(sum(2)); // 2
console.log(sum()); // NaN





