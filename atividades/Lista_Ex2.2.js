const idade = 24;
let tipo = '';
if(idade >= 0 && idade < 15) {
    tipo = 'CRIANÇA';
} else if (idade >= 15 && idade < 30) {
    tipo = 'JOVEM';
} else if (idade >=30 && idade < 60) {
    tipo = 'ADULTO';
} else if (idade >= 60) {
    tipo = 'IDOSO';
}
console.log(tipo);


class Pessoa {
    constructor(idadePessoa) {
        this.idade = idadePessoa;
    }

    verificarIdade() {
        let tipo ='';
        if(this.idade >= 0 && this.idade < 15) {
            tipo = 'CRIANÇA';
        } else if (this.idade >= 15 && this.idade < 30) {
            tipo = 'JOVEM';
        } else if (this.idade >=30 && this.idade < 60) {
            tipo = 'ADULTO';
        } else if (this.idade >= 60) {
            tipo = 'IDOSO';
        }

        console.log(tipo);
    }
}

console.log('Utilizando Classe');
const pessoa = new Pessoa(24);
pessoa.verificarIdade();

const pessoa2 = new Pessoa(60);
pessoa2.verificarIdade();

for (let index = 0; index < 60; index++) {

    const pessoa2 = new Pessoa(index);
    pessoa2.verificarIdade();

}