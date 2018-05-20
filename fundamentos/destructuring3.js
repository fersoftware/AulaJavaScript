function rand({ min = 0, max = 1000})
{
    const value = Math.random() * (max -  min) +  min;
    return Math.floor(value);
}

const obj = {max: 50, min: 40 };
console.log(rand(obj)); // 48
console.log(rand({min: 995})); //997
console.log(rand({})); // 999