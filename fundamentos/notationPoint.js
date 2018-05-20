console.log(Math.ceil(6.1)); // 7

const obj1 = {};
obj1.name = 'Bola';
//obj1['name'] = 'Bola2';
console.log(obj1.name); // Bola

function Obj(name){
    this.name = name;
    this.exec = function(){
        console.log('Exec....');        
    }
}

const obj2 = new Obj('cadeira');
const obj3 = new Obj('Mesa');
console.log(obj2.name); // Cadeira
console.log(obj3.name); // Mesa
obj3.exec(); // Exec...