const sum = function (x,y) {
    return x + y;
}

const printResult = function (a,b, operation = sum) {
    console.log(operation(a,b));    
}

printResult(3,4); // 7
printResult(3,4, sum); // 7
printResult(3,4, function (x,y) {
    return x - y;
}); // -1
printResult(3,4, (x,y) => x * y); // 12

const person = {
    talk: function () {
        console.log('Opa');        
    }
};

person.talk(); // Opa