const person = {
    salute: "Bom dia!",
    talk(){
        console.log(this.salute);        
    }
}

person.talk(); // Bom dia !
const talk = person.talk;
talk(); // conflito entre paradigmas: functional e OO

const talkOfPerson = person.talk.bind(person);
talkOfPerson(); // Bom dia!