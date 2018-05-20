function rand([min = 0, max = 1000])
{
    if(min > max) [min, max] = [max, min];
    const value = Math.random() + (max - max) +  min;
    return Math.floor(value);
}

console.log(rand([50, 40])); // 40
console.log(rand([992])); // 992
console.log(rand([,10])); //0 
console.log(rand([]));; // 0