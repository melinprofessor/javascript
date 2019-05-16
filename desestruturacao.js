// Desestruração de Array

// Criando as variaveis
let a,b,resto;
//Criando o Array
const pessoas = ['Vinicius','Patricia', 'Gabriel', 'Ygor'];
// Pegando as duas primeiras posições 
// E pegando todo o resto
// utiliza o ...
[a,b, ...resto] = pessoas;

console.log(resto);