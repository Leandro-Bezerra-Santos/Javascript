/*
  Tipagem Dinâmica
JavaScript é uma linguagem de tipagem dinâmica. Isso significa que você não necessita declarar o tipo de uma variável antes de sua atribuição. O tipo será automaticamente determinado quando o programa for processado. Isso também significa que você pode reatribuir uma mesma variável com um tipo diferente

Tipos Primitívos:
  String: Em qualquer linguagem de programação, uma string é uma sequência de caracteres usados para representar texto

  Number: No JavaScript, Number é um tipo de dado numérico no double-precision 64-bit floating point format (IEEE 754). Em outras linguagens de programação diferentes tipos numéricos podem existir, por exemplo: Integers (Inteiros), Floats (Pontos Flutuantes), Doubles (Dobros), ou Bignums.

  Boolean: TRUR OR FALSE

  Null: para um objeto ou endereço de memória inválido ou inexistente.

  undefined: Um valor primitive automaticamente atribuido para variaveis que foram recentemente declaradas ou para arguments formais para qual não existem argumentos atualmente.

*/

var string = "Conjunto de Caracteres";
var e_mail= "leandrobezerrasantos 82@gmail.com";
var pessoa = "Leandro | 17 | Masc";
var nome = "Leandro"

console.log(string);
console.log(`Há duas maneiras de acessar um caractere individual em uma string: ${string.charAt(0)} \n`);
console.log(`Procura uma palavra ou letra no "texto e substitui" ${string.replace("Conjunto", "Replace")} \n`)
console.log(`Removendo o espaço do email:${e_mail.replace(' ', '')} \n`)
console.log(`ele divide uma string em uma array de substrings e devolve esse novo array: ${pessoa.split("|")} \n`)
console.log(`Separando Letras: ${nome.split("")} \n`);
console.log(`Separando  e delimitando o tamanho do array: ${nome.split("", 2)} \n`);
console.log(`O método slice() retorna uma cópia de parte de um ${string.slice(0,8)}\n`);

// NUMBER

var idade = 17;
console.log(`O ${nome} tem ${idade} anos \n`);

var compra = 17.5;
var taxa = 13.5;
console.log(compra - taxa + '\n');

// BOOLEAN

console.log(idade <= 17 ? true : false);

// NULL
console.log(null + "\n")

//Undefined
var un;
console.log(un)