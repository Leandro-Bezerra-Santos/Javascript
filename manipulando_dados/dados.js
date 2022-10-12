/*
  type conversion(typecasting) vs Type coersion

  *Alteração de um tipo de dado para outro tipo
*/

console.log('9' + 5);
//Aqui acontece um typeCoersion pois o valor do numero é altedo pra string altomaticamente.

console.log(Number('9') + 5); 
//TypeConversion eu troquei o tipo de dado por  vontade própria


//Transformar string em numero e numero em string
let string = "123"
console.log(Number(string))
let number= 321
console.log(String(number));

//Contar quantos caracteres tem uma palavra e quantos digítos um numero tem
let par = "World";
console.log(par.length);
let num = 52345;
console.log(String(num).length)

//transfomar número decimal quebrado com 2 casas e trocar ponto por 
let dec = 222.35343
console.log(dec.toFixed(2).replace(".", ","))

//Maiúsculas para minuculas e minusculas para maiúscula
let name = "LeAndro"
console.log(name.toUpperCase());
console.log(name.toLowerCase());

let phrase = 'O Amor é a base da vida!!';
let myArray = phrase.split(" ")
console.log(myArray)

let phraseWithUndrscore = myArray.join("_");
console.log(phraseWithUndrscore)

//split("separa e transforma em array")
//join("Ajunta e transforma em string")

//encontrando palavras em frases
let palavra = "Na verdade é um phrase😅";
console.log(palavra);
console.log(palavra.includes("😅"))

//Criando array com Contrutor
let arr = new Array('1', 'A', 'C')
console.log(arr)

//Contar elementos de um array
console.log([
  "Aqui aceita qualquer tipo",
  {type: 'array'},
  function(){ return 'alô'}
])

console.log(["1", "2", "3"].length)
//Acessando e rodando um elemento do array
console.log([
  "A",
  {type: "Hello World"},
  function() { return "Oi"},
][2]())

//Transformar uma cadeia de caracteres em elementos de um array
let phraseArr = "Manipulando array";
console.log(Array.from(phraseArr))

let techs = ["Html", "Css", "Javascript", "ReactJs"]
//Adionando um item no fim
techs.push("NodeJs");
console.log(techs);

//adicionar no começo
techs.unshift("SQL")
console.log(techs);

//Remover do fim
techs.pop();
console.log(techs);

//Remover do começo
techs.shift();
console.log(techs);

//pegar somente alguns elementos do array
console.log(techs.slice(1, 4))

//remover 1 ou mais item em qualquer posição do arr
techs.splice(0,3)
console.log(techs);

//encontrar a posição de um elemento no array
let index = techs.indexOf("javascript")
console.log(index)
