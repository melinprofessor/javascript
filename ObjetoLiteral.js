// Objeto Literal
let Pessoa = {
    nome: 'Vinicius',
    idade: 24,
    cpf: '44433300045',
    sexo: 'M',
    compararSexo: function() {
        if(this.sexo == 'M') {
            console.log(`${this.nome} é MASCULINO`);
        } else {
            console.log(`${this.nome} é FEMININO`);
        }
    }
}

Pessoa.compararSexo();
//  Desestruturação do Objeto Literal
const {sexo, cpf, ...resto1} = Pessoa;

console.log(sexo);