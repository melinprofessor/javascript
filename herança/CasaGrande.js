
const Casa = require('./Casa');
//Criando a classe CasaGranse e extendendo da classe Casa (Mãe)
class CasaGrande extends Casa {
    // Construtor qdo a classe é instanciada
    // Atributos cor e qtdQuartos
    constructor(corCasaGrande, qtdQuartos) {
        // Passa os parametros para a Clase Mãe(Casa)
        super(corCasaGrande, qtdQuartos);
    }

    //metodo não estático
    // retorno void
    getCor() {
        console.log(`COR: ${this.cor}` );
    }

    //metodo não estático
    // retorno void
    abrirJanelaCasaGrande(tipoCasa){
        console.log(`${this.abrirJanela()} ${tipoCasa}`);
    }
}

// Instancia um objeto do tipo CasaGrande
// Passando dos paramentros cor e qtd de quartos
// para variavel casaGrande
const casaGrande = new CasaGrande('PRETO',2);
// Instancia um objeto do tipo CasaGrande
// Passando dos paramentros cor e qtd de quartos
// para variavel casaPequena
const casaPequena = new CasaGrande('AZUL',4);

//Chama o metodo getInformação
//Que foi herdado da Classe Casa
casaGrande.getInformacao();

//Chama o metodo abrirJanelaCasaGrande
//Que foi herdado da Classe Casa e sobrescrito pela
//Classe CasaGrande
casaGrande.abrirJanelaCasaGrande('Casa Grande');
casaPequena.abrirJanelaCasaGrande('Casa Pequena');
