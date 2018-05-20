const fabricators = ["Mercedes", "Audi", "BMW"];

function print(name, index) {
    console.log(`${index+1}. ${name}`);    
}

fabricators.forEach(print);

fabricators.forEach(fabricator => console.log(fabricator));    
