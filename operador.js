const nome = 'Vinicius';
const idade = 24;

if(nome == 'Vinicius'){
    console.log('Operador: ==');
}

if(idade === '24'){
    console.log('Operador: ===');
}

if(idade != 24){
    console.log('Operador: !=');
}

if(idade !== '24'){
    console.log('Operador: !==');
}

if(nome !== '24'){
    console.log('Operador: !== 24 inteiro');
}

if('24' !== '24'){
    console.log('Operador: !== 24 texto');
}

if(idade > 24){
    console.log('Operador: >');
}

if(idade < 24){
    console.log('Operador: <');
}

if(idade >= 24){
    console.log('Operador: >=');
}

if(idade <= 24){
    console.log('Operador: <=');
}


// Operador lógicos

if(idade == 24 || nome == 'Aline') {
    console.log('OU -> Entrou');
}
if(idade == 24 && nome == 'Aline') {
    console.log('E -> Não entrou');
}

if (!idade == 24) {
    console.log('! -> Não')
}

if ((!idade == 24) && (nome =='Breno')) {
    console.log('! -> Entrou Breno')
}
if (!(idade == 24 && nome =='Breno')) {
    console.log('! -> Entrou Breno')
}