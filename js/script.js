//Declaração de variáveis
//3 tipos: var | let | const

//declaração com var
// var nome = "FIAP";
// console.log("A mehlor faculdade: " + nome);

// var num1 = 10;
// var num2 = "5";

// console.log("Resultado da soma: " + (num1+parseInt(num2)));

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

//Criando um ternário e mexendo em cálculo

let idade = 17;

const resultado = idade > 18 ? "Pode passear": "Não pode passear";

//Utilizando template literals ´´ com a interpolação ${}
// console.log(`O resultado é que ele ${resultado.toLowerCase()}.`)

//Diferença entre var e let
var nome1 = "Alê";
var nome2 = "Carlos";

if(true)
{
    //Declarando as variáveis em escopo diferente
    var nome1 = "Joaquim";
    let nome2 = "das Couves";
}

//Imprimir as variáveis do escopo principal
console.log(nome1);
console.log(nome2);