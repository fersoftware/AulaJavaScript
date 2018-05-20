Number.prototype.between = function(start, end){
    return this >= start && this <= end;
}

const printResult = function (note) {
    if (note.between(9,10)) {
        console.log('Quadro de Honra');        
    } else if(note.between(7,8.99)){
        console.log('Aprovado');        
    }else if (note.between(4, 6.99)) {
        console.log('Recuperação');        
    }else if (note.between(0, 3.99)) {
        console.log('Reprovado');        
    }else {
        console.log('Nota inválida');        
    }
}

printResult(10); // Quadro de Honra
printResult(8.9); // Aprovado
printResult(6.55); // Recuperação
printResult(2.3); // Reprovado
printResult(-1); // Nota Inválida
printResult(11); // Nota Inválida