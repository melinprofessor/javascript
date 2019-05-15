class Funcionario {
    constructor(salarioBase) {
        this.salario = salarioBase;
        this.total = 0;
    }

    calcularSalario() {
        this.total = this.salario + 100
    }

    exibirSalario(){
        console.log(`Salário Base: ${this.total}`);
    }
}
module.exports = Funcionario;