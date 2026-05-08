
//Declaração de variáveis com JS
//3 tipos = var / let / const
/*
*Comentário de Bloco
*/

//Declaração com var:
// var nome = "Fiap";
// console.log("A melhor faculdade : " + nome);

// var nr1 = 10;
// var nr2 = "5";
// console.log("Resultado da soma : " + ( nr1 + parseInt(nr2) ));


// var variavel = "Alê";
// console.log(typeof variavel)

// var variavel = 100;
// console.log(typeof variavel)

// var variavel =true;
// console.log(typeof variavel)

// var variavel = null;
// console.log(typeof variavel)

// var variavel = {};
// console.log(typeof variavel)

// var variavel = [];
// console.log(typeof variavel)

// var variavel = 100.456;
// console.log(typeof variavel)

// //criando um ternario e mexendo com calculos

// let idade = 17;
// const resultado = idade > 18 ? "Pode passear" : "Não pode passear"

// //Utilizando templetes literals com `` interpolação ${}
// console.log(`O resultado é que ele ${resultado.toLowerCase()}.`)

var nome1 = "Alê";
let nome2 = "Carlos";

if(true){
    //redeclarando as variaveis em escopo diferente
    var nome1 = "Joaquim"
    let nome2 = "das Couves"

}
//imprimir as variaveis do scopo principal
console.log(nome1);
console.log(nome2);