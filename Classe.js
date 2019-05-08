class Pessoa {
    constructor(cpf = null, nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf || 'Não Possui';
        this.sexo = sexo;
        console.log(`Nome: ${this.nome}`, `Idade: ${this.idade}`, `CPF: ${this.cpf}`, `SEXO: ${this.sexo}`);
    }

    compararSexo() {
        if (this.sexo == 'M'.toUpperCase()) {
            console.log(` ${this.nome} é MASCULINO`);
        } else {

            console.log(` ${this.nome} é FEMININO`);
        }
    }

    maiorIdade() {
        if (this.idade >= 18) {
            return true;
        } else {
            return false;
        }
    }
}

const vinicius = new Pessoa('444.444.444-05', 'Vinicius', 24, 'M');
vinicius.compararSexo();
if (vinicius.maiorIdade()) {
    console.log(`${vinicius.nome} É MAIOR DE IDADE!`);
} else {
    console.log(`${vinicius.nome} É MENOR DE IDADE!`);
}

