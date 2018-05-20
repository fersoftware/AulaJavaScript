function sum() {
    let sum =0;
    for (const i in arguments) {
        sum+= arguments[i];
    }
    return sum;
}

console.log(sum()); // 0
console.log(sum(1)); // 1
console.log(sum(1.1,2.2,3.3)); // 6.6

console.log(sum(1.1,2.2, "Teste")); // 3.3000000000000003Teste
console.log(sum('a', 'b', 'c')); //0abc
