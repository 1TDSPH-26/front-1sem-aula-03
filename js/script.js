
//Declaração de variáveis com JS
//3 tipos = var / let / const
/*
*Comentário de Bloco
*/

// ---- Declaração com var: ----
// var nome = "Fiap";
// console.log("A melhor faculdade : " + nome);

// var nr1 = 10;
// var nr2 = "5";
// console.log("Resultado da soma : " + (nr1 + parseInt(nr2) ));

// var variavel = "Carolina"
// console.log(typeof variavel);

// var variavel = 10
// console.log(typeof variavel);

// var variavel = true
// console.log(typeof variavel);

// var variavel = null 
// console.log(typeof variavel);

// var variavel = 'a'
// console.log(typeof variavel);

// var variavel = {}
// console.log(typeof variavel);

// var variavel = []
// console.log(typeof variavel);

// var variavel = 100.456
// console.log(typeof variavel);

// // ---- Criando um ternário e mexendo com cálculos ----
// let idade = 20;
// //                                   True             False
// const resultado = idade > 18 ? "pode passear :3" : "não pode >:C"

// //Utilizando template literals '' com  interpolação ${} (print formatado)
// console.log(`O resultado é que ele ${resultado.toLowerCase()}.`);

// ---- Diferença entre var e let ----
var nome1 = "Alê";
let nome2 = "Carlos";

if(true){
    //Redeclarando
    var nome1 = "Joaquim";
    let nome2 = "das Couves";
}

// Imprimir as variáveis do escopo principal(aonde foram declaradas)! :>
console.log(nome1);
console.log(nome2);

/*---- var faz Hoisting - Içar ----
(Você não tem controle sobre valores de varoáveis com o mesmo nome.
Ela sempre soprepõe o valor de variáveis com o mesmo nome, independente
de onde foi declarada - escopo)
(O let faz o que seria o certo:
Em variáveis com o mesmo nome, ele prioriza o valor de onde foi declarado.)
*/