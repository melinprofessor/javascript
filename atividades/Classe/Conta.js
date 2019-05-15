class Conta {
    constructor(){
        this.saldo = 0;
    }
    saque(valorSaque){
        this.saldo = this.saldo - valorSaque;
    }
    
    deposito(valorDeposito){
        this.saldo = this.saldo + valorDeposito;
    }
    exibirSaldo(){
        console.log(`Saldo atual: ${this.saldo}`)
    }
}

let conta = new Conta();
conta.deposito(100);
conta.saque(50);
conta.exibirSaldo();