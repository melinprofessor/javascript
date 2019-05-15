const Funcionario = require('./Funcionario');
class Programador extends Funcionario {
    constructor(salarioBase){
        super(salarioBase);
    }

    calcularSalario(){
        super.calcularSalario();
        this.total = this.total + 300;
    }
}

const programdor = new Programador(500);
programdor.calcularSalario();
programdor.exibirSalario();
