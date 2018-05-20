//Erro
function tratamentError(error)
{
    //throw new Error ('...');
    //throw 10;
    //throw true;
    //throw 'mensagem';

    throw{
        name: error.name,
        msg: error.message,
        date: new Date
    }
}

//imprimirNomeGritado
function printNameYelled(obj){
    try {
        //forcei o erro namer ao inves de name
        console.log(obj.namer.toUpperCase() + '!!!');        
    } catch (e) {
       tratamentError(e); 
    }
}

const obj = { name :  'Roberto'};
printNameYelled(obj);

/*
c:\Projetos\exercicios-js\fundamentos\error.js:9
    throw{
    ^
[object Object]
*/