function Person(name) {    
    this.name = name;   

    this.talk = function(){
        console.log(`Meu nome é ${this.name}`);    
    }
}

const p1 = new Person('Joao');
p1.talk(); 