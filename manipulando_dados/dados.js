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