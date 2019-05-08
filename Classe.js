class Pessoa {
    constructor( cpf,nome, idade, sexo){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf || 'Não Possui';
        this.sexo = sexo;
        console.log(`Nome: ${this.nome}`, `Idade: ${this.idade}`, `CPF: ${this.cpf}`);
    }
   

}

const vinicius = new Pessoa('444.444.444-05','Vinicius',24);
const ygor = new Pessoa(null,'Ygor', 14); 
