//Função Construtora

function Car(maximunSpeed = 200, delta = 5) {
    //atributo privado
    let currentSpeed = 0;

    //metodo publico
    this.speedUp = function () {
        if (currentSpeed + delta <= maximunSpeed) {
            currentSpeed += delta;
        } else {
            currentSpeed =  maximunSpeed;
        }
    }

    // metodo publico
    this.getCurrentSpeed = function () {
        return currentSpeed;
    }
}

const uno = new Car;
uno.speedUp();
console.log(uno.getCurrentSpeed()); // 5

const ferrari = new Car(350, 20);
ferrari.speedUp() // 20
ferrari.speedUp() // 20
ferrari.speedUp() // 20
console.log(ferrari.getCurrentSpeed()); // 60

