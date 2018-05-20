const notes = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

//Sem callback
const lowNotes1 = [];
for (let i in notes) {
    if (notes[i] < 7) {
        lowNotes1.push(notes[i]);        
    }    
}
console.log(lowNotes1); //[ 6.5, 5.2, 3.6 ]

//Com callback
const lowNotes2 = notes.filter(function (note) {
    return note < 7;
});
console.log(lowNotes2); //[ 6.5, 5.2, 3.6 ]

// Outra forma
const notesLessThan7 = note => note < 7;
const lowNotes3 = notes.filter(notesLessThan7);
console.log(lowNotes3); // [ 6.5, 5.2, 3.6 ]


