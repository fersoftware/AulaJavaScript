let number = 1

{
    let number = 2;
    console.log('dentro =', number); // dentro = 2
}
console.log('fora =', number); // fora = 1;


{
    let number2 = 2;
    console.log('dentro =', number); // dentro = 1
}
console.log('fora =', number); // fora = 1;

