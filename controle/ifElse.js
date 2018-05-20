const printResult = function (note) {
    if (note >= 7) {
        console.log('Aprovado!');        
    }
    else{
        console.log('Repravado');        
    }
}

printResult(10); // Aprovado
printResult(4); // Reprovado

//Cuidado
printResult('Epa'); // Reprovado