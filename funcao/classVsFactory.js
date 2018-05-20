class Person {
    constructor(name){
        this.name = name;
    }

    talk(){
        console.log(`Meu nome é ${this.name}`);    
    }
}

const p1 = new Person('Joao');
p1.talk(); // Meu nome é João;
//Pode trazer meu nome é undefined
//Para o browser pode não trazer dependendo do contexto por
//causa do this, abaixo um método mais adequado.

const createPerson = name => {
    return {
        talk: () => console.log(`Meu nome é ${name}`)        
    }
}

const p2 = createPerson('João');
p2.talk(); // Meu nome é João