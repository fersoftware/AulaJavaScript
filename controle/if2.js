function test1(num) {
    if (num > 7)
        console.log(num);
    console.log('Final');
}

//test1(6); // Final
//test1(8); // 8  Final

function test2(num){
    if(num > 7);{ // cuidado com o ';', não usar com as estruturas de controle
        console.log(num);        
    }
}

test2(6);
test2(8);

/*
6
8
*/