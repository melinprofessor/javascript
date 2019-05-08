// While

let contador = 1;

while(contador <= 10){
    contador++;
    console.log(contador);
    if( contador == 8) {
        break;
    }

    if(contador == 7)
    {
         console.log("Entrou e continuou.");
         continue;
    }
    
}

let contador1 = 1;

do {
    console.log(`do while : ${contador1}`)
    contador1++;
} while (contador1 <= 10);

for(let x= 1; x <= 10; x++){
    console.log(`For: ${x}`);
}