
//Declaração de variáveis com JS
//3 tipos = var / let / const
/*
*Comentário de Bloco
*/

//Declaração com var:
//var nome = "Fiap";
//console.log("A melhor faculdade : " + nome);

//var nr1 = 10;
//var nr2 = "5";
//console.log("Resultado da soma : " + (nr1 + parseInt(nr2) ));

// var variavel = "Alê";
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

// //Criando um ternário e mexendo com cálculos:

// let idade = 17;

// const resultado = idade > 18 ? "Pode beber" : "Não pode beber";

// //Utilizando o template literals `` com interpolação ${}
// console.log(`O resultado é que ele ${resultado.toLowerCase()}.`);

//Diferença entre var e let:

var nome1 = "Alê";
let nome2 = "Carlos";


if(true){
    //Redeclarando as variáveis em escopo diferente
    var nome1 = "Felipe";
    let nome2 = "das Couves";
}

//Imprimir as variáveis do escopo principal!
console.log(nome1);
console.log(nome2);

