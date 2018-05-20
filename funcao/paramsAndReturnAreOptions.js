// Parametros e Retornos são Opcionais

function area(width, height) {
    const area = width * height;
    if (area > 20) {
        console.log(`Valor acima do permitido ${area}m2.`);     
    }else{
        return area;
    }
}

console.log(area(2,3)); // 6
console.log(area(2)); // NaN
console.log(area()); //NaN
console.log(area(2,3,17,22,44)); // Valor acima do permitido 25m2
console.log(area(5,5)); // undefined

