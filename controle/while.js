function getIntRandomBetween(min, max) {
    const value = Math.random() * (max - min) + min;
    return  Math.floor(value);
}

let option = 0;

while (option != -1) {
    option = getIntRandomBetween(-1, 10);
    console.log(`Opção escolhida foi ${option}.`);    
}

console.log('Até a próxima');

/*

Opção escolhida foi 5.
Opção escolhida foi 0.
Opção escolhida foi 3.
Opção escolhida foi 6.
Opção escolhida foi 1.
Opção escolhida foi 5.
Opção escolhida foi 0.
Opção escolhida foi 3.
Opção escolhida foi 7.
Opção escolhida foi 1.
Opção escolhida foi -1.
Até a próxima

*/