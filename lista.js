// Tipo Array Vazio
let listaVazia = [];

// Tipo Array Valores definidos
let listaValor = [1,2,3,'Vinicius',4,5,6,7,8,9,10];

// buscar valor dentro do array
//retorna o valor
let item = listaValor.find (f => f == 'Vinicius');
console.log(item);

// retorna uma nova lista
let itemFilter = listaValor.filter(i => i == 'Vinicius' || i == 1 );
console.log(itemFilter);

// Me informa o tamanho
console.log(listaValor.length);

// Adicionar itens na lista
listaValor.push('Ana');
console.log(listaValor);

// Excluir itens da lista <- ultimo
listaValor.pop();
console.log(listaValor);

 //Excluir determida posição para frente
 let index = listaValor.indexOf(2);
 console.log(listaValor.splice(0,index));

listaValor = listaValor.filter( f =>( f < 4 || f >8) );
console.log(listaValor);