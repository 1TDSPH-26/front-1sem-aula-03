//declaração de variaveis com js
//3 tipos - var / let / const

/*
comentario de bloco
*/

//declaração de var:
//var nome = "Fiap";
// console.log("A melhor faculdade: " + nome);

// var nr1 = 10;
// var nr2 = "5";
// console.log("soma: " + (nr1 + parseInt(nr2)));


// var variavel = "Felipe" ;
// console.log(typeof variavel);

// variavel = 100 ;
// console.log(typeof variavel);

// variavel = true;
// console.log(typeof variavel);

// variavel = null ;
// console.log(typeof variavel);

// //criando um ternario e mexendo com cauculos

// let idade = 17;

// const resultado = idade > 18 ? "Pode passear" : "Não pode passear";

// //Utilizando template literals `` com interpretação ${}
// console.log(`O resultado é que ele ${resultado.toLocaleLowerCase()}.`)

//Diferença entre vare let:

var nome1 = "Felipe";
let nome2 = "Elias";

if(true){
    //Redeclarando as variaveis em escopo diferente
    var nome1 = "Joaquim";
    let nome2 = "das Couves";

}
//Imprimindo as variaveis do escopo principar
console.log(nome1);
console.log(nome2);
