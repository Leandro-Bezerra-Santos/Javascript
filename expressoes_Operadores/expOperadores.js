/*
  NEW => "Cria um novo objeto"
*/
const data = new Date('2022-10-15');
const name = new String('Leandro');

console.log(data.__proto__);
console.log(name)

/*
  Operadores Unários
  typeof, delete
*/
const person = {
  name: 'Leandro',
  age: 17
}
console.log(person);
delete person.name;
console.log(person)

// Operadores Aritméticos
  // - Multiplicação *
  console.log( 12*2)
  // - Divisão /
  console.log( 12/2)
  // - Soma +
  console.log( 20 + 5);
  // - Subtração -
  console.log( 30 - 10);
  // - Resto da Divisão %
  console.log(11 % 11);
  // - Incremento ++
  let increment = 0;
  increment++
  console.log(increment)
  // - Decremento --
  let decrement = 10;
  decrement--
  console.log(decrement)
  // - Exponencial  **
  console.log(3 ** 3)

  //grouping operator ()
  console.log( (2 + 5) * 2)

/* Operadores de comparação */

let one = 1;
let two = 2;

// == igual a 
console.log(two == 1);
console.log(one = "1");

//Diferente de !=
// console.log(one != two)
// console.log(one != 1)
// console.log(one != "1")

// Idêntico
console.log(one === "1");
console.log(one === 1);

// estritamente diferente de um
console.log(two !== "2");
console.log(two !== 2);

// > Maior que 
console.log(one > two + "Maior que");
// >= Maior igual a
console.log(one >= 1)
console.log(two >= 1)
// < Menor que
console.log(one < two);
// <= Menor igual a 
console.log(one <= two);