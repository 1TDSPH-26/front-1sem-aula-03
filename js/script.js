// Declaração de variáveis
// 3 tipos
// Var, Let e Const
/* var nome = "Fiap";
console.log("A melhor faculdade: " + nome);

var nr1 = 10;
var nr2 = "5";
console.log("O resultado da soma: " + (nr1 + parent(nr2))); */

// var variavel = "Giovanni";
// console.log(typeof variavel);

// variavel = 100;
// console.log(typeof variavel);

// variavel = true;
// console.log(typeof variavel);

// variavel = null;
// console.log(typeof variavel);

// variavel = 'a';
// console.log(typeof variavel);

// variavel = {};
// console.log(typeof variavel);

// variavel = [];
// console.log(typeof variavel);

// variavel = 100.456;
// console.log(typeof variavel);

// // Criando um ternário e mexendo com cálculos:
// let idade = 17;

// const resultado = idade > 18 ? "Pode passear" : "Não pode passear";
// // Ultilizando template literals `` com interpolação ${}
// console.log(`O resultado é que ele ${resultado.toLowerCase}.`);

// Diferença entre var e let
var nome1 = "Giovanni";
let nome2 = "Carlos";

if(true){
    // Redeclaração as variáveis em escopo diferente
    var nome1 = "Cristiano";
    let nome2 = "Ronaldo";
}

// Imprimir as variáveis do escopo principal
console.log(nome1);
console.log(nome2);