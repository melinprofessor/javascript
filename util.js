// Util com Strig

const nome = 'Vinicius Augustus Silva Melin';

//split server para separar conforme parametro.
console.log(nome.split(' '))

//replace servar para substiuir o que for passado como parametro;
console.log('usando Replace: ' + nome.replace('Vinicius', 'Breno'))

//Utilzando REGEX
console.log('usando Replace REGEX: ' + nome.replace(new RegExp(' ','g'), '_'))

// Utilizando REPEAT
const texto = 'abc';
console.log('Utilizando REPEAT: '+ texto.repeat(3));

// Utilizando Substr para pegar parte do texto
//O metodo retorna uma parte da string iniciando no
// indice especificado e estendendo para um determinado número
// de caracteres
console.log('Utilizando Substr:' + nome.substr(8,10))

// Slice extrai uma seção de uma string e retorna como uma nova
console.log('Utilizando o slice: ' + nome.slice(9,17));

//StartsWith inicia com a determinda palavra
// retorna boolean
console.log('Utilizando StartsWith:' + nome.startsWith('Vinicius'));

//EndsWith termina com a determinda palavra
// retorna boolean
console.log('Utilizando EndsWith:' + nome.endsWith('Melin'));

// Length determina o tamanho da nossa string
console.log('Utilizando Length: ' + nome.length)


// Number

const numeroDecimal = 3500.14852415;

//toPrecision conta apartir do primeiro número.
// e faz o arredondamento
console.log('Utilizando toPrecision: '+ numeroDecimal.toPrecision(3))

//toFixed limita depois do ponto(casas decimal)  a quantidade de casas decimais
console.log('Utilizando toFixed: '+ numeroDecimal.toFixed(2))

//isNAN
// retorna um booleano (false quando é numero)
console.log('Utilizando isNAN: '+ isNaN('vinicius'))

// Data no javascript

let date = new Date();
console.log('data completa: ' +date);
console.log('data: ' + date.getDate());
console.log('Mes: ' +date.getMonth());
console.log('Horas: ' +date.getHours());
console.log('Ano: ' +date.getFullYear());
console.log('Dia da semana: ' +date.getDay());
console.log('Segundos: ' +date.getSeconds());