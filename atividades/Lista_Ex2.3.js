const nome = 'Vinicius';
let altura = 160;
let peso = 80;

altura = parseFloat(altura);
peso = parseFloat(peso);

// converte para metros
altura = altura / 100;

let imc = peso / Math.pow(altura, 2);
let classificacao = '';
if ( imc < 16){
    classificacao = 'Baixo peso muito grave';
} else if( imc >= 16 && imc <= 16.99) {
    classificacao = 'Baixo peso grave';
} else if( imc >= 17 && imc <= 18.49) {
    classificacao = 'Baixo Peso';
} else if(imc >= 18.50 && imc <= 24.99) {
    classificacao = 'Peso Normal'
} else if (imc >= 25 && imc <= 29.99) {
    classificacao = 'Sobrepeso';
} else if(imc >=30 && imc <= 34.99){
    classificacao = 'Obsidade grau I';
}else if(imc >=35 && imc <= 39.99){
    classificacao = 'Obsidade grau II';
}else {
    classificacao = 'Obsidade grau III';
}

console.log(`${nome} peso: ${peso} e classificação: ${classificacao}`);