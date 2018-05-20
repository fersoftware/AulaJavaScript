const funcs = [];

for(let i = 0; i <  10; i++)
{
    funcs.push(function () {
        console.log(i);        
    })    
}

// let tem escopo de funcao
funcs[2](); // 2
funcs[8](); // 8