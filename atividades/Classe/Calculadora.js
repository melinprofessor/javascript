class Calculadora{
    constructor(){

    }

    static somar(numero1, numero2){
        const resultado = numero1 + numero2;
        console.log(`Resultado: ${resultado}`);
    }
}

Calculadora.somar(10,20);