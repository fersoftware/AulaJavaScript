//Closure é o escopo criado quandouma função é declarada
// Esse escopo permite a função acessa e manipular variaveis externas à função

//Contexto léxico a ação!

const x = 'Global';

function out() {
    const x = 'Local';
    function inside() {
        return x;
    }
    return inside;
}

const myFunction = out();
console.log(myFunction()); // Local