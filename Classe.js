class Pessoa {
    constructor(cpf = null, nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf || 'Não Possui';
        this.sexo = sexo;
        console.log(`Nome: ${this.nome}`, `Idade: ${this.idade}`, `CPF: ${this.cpf}`, `SEXO: ${this.sexo}`);
    }

    // Metodo não estático
    // Com retorno void
    compararSexo() {
        if (this.sexo == 'M'.toUpperCase()) {
            console.log(` ${this.nome} é MASCULINO`);
        } else {

            console.log(` ${this.nome} é FEMININO`);
        }
    }

    // Metodo não estático
    // Com retorno
    maiorIdade() {
        if (this.idade >= 18) {
            return true;
        } else {
            return false;
        }
    }

    //metodo estático -> static
    // com retorno void
    static exemplo(sexo) {
        // MASCULINO
        // FEMININO
        console.log(sexo)
        if ( sexo == 'M') {
            console.log('MASCULINO');
        } else {
            console.log('FEMININO');
        }
        console.log('Este é um metodo estático.')
    }

    //metodo estático -> static
    // com retorno booleano
    static verificaNome(nome) {
        if(nome.toUpperCase() == nome) {
            return true;
        } else {
            return false;
        }
    }
}


// Estou instanciando um novo objeto(classe)

const vinicius = new Pessoa('444.444.444-05', 'Vinicius', 24, 'M');

// Estou acessando um metódo não estático
// Que o retorno void
vinicius.compararSexo();

// Este é metodo estático
// Não precisa instaciar
// Verifica se nome é maisculo
Pessoa.exemplo(vinicius.sexo);
if(!Pessoa.verificaNome(vinicius.nome)) {
    vinicius.nome = vinicius.nome.toUpperCase();
}
if (vinicius.maiorIdade()) {
    console.log(`${vinicius.nome} É MAIOR DE IDADE!`);
} else {
    console.log(`${vinicius.nome} É MENOR DE IDADE!`);
}

console.info(Pessoa);
