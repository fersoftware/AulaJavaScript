const name = 'Rebeca';
const concatenation = 'Olá ' +  name +  "!"; // Olá Rebeca! 

const template = `
Olá 
${name}!
`;

console.log(concatenation, template); 
/*
Olá 
Rebeca!
*/

// expressoes...
console.log(` 1 + 1 = ${1+1}`); // 1 + 1 = 2

const up = text => text.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`); //Ei... CUIDADO!


