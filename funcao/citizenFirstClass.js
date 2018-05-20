//Função em JS é First-Class Object (Citizens)
// Hugher-order function

//Criar de forma literal
function fun1() {}

//Armazenar em uma variavel
const fun2 = function() {};

//Armazenar em um array
const array = [function(a,b){ return a+b}, fun1, fun2];
console.log(array[0](2,3)); // 5

//Armazenar em um atributo de objeto
const obj = {}
obj.talk = function() {return 'Opa'};
console.log(obj.talk()); // Opa

//Passar função como param
function run(fun){
    fun();
}

run(function(){console.log("Executando....");})
// Executanto....

function sum(a,b) {
    return function (c) {
        console.log(a+b+c);        
    }
}

sum(2,3)(4); // 9

const fiveMore = sum(2,3);
fiveMore(4); // 9
