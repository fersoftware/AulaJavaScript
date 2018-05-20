// Lógicos
function purchases(job1, job2)
{
    const buyIceCream = job1 || job2;
    const buyTv50 = job1 && job2;
    //const buyTv32 = !!(job1 ^ job2) //bitwise xor
    const buyTv32 = job1 != job2;
    const keepHealthy = !buyIceCream // operador unário

    return {buyIceCream, buyTv50, buyTv32, keepHealthy};
}

console.log(purchases(true, true));
console.log();
console.log(purchases(true, false));
console.log();
console.log(purchases(false, true));
console.log();
console.log(purchases(false, false));

/*

{ buyIceCream: true,
  buyTv50: true,
  buyTv32: false,
  keepHealthy: false }

{ buyIceCream: true,
  buyTv50: false,
  buyTv32: true,
  keepHealthy: false }

{ buyIceCream: true,
  buyTv50: false,
  buyTv32: true,
  keepHealthy: false }

{ buyIceCream: false,
  buyTv50: false,
  buyTv32: false,
  keepHealthy: true }

*/

