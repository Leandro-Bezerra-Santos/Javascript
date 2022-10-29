/* Operadors de Atribuição */

// Operadores de atribuição (Assignment)
let x
// assignment normal:
x = 1
// addition assignment (adição):
x += 2
// subtraction assignment (subtração):
x -= 1
// multiplication assignment (multiplacação):
x *= 2
// division assignment (divisão):
x /= 2
// exponetiation assignment (exponenciação):
x **= 2
// remainder assignment (resto de divisão):
x %= 2

// Logical Operators
let pao = true;
let queijo = true;

// AND &&
console.log(pao && queijo);

// OR ||
console.log(pao || queijo)

// NOT !
console.log(!pao) // Trocando o valor para falso 

//Operador Ternário
let cafe = true;
let leite = true;

const niceBreakfast = cafe && leite ? 'Café top' : "Café Ruim!"
console.log(niceBreakfast)

// Operador de String

//Comparison (Comparação)
console.log('a' == "a");

//concatenation (Concatenação)
console.log("lean" + "dro concatenation");


// * grouping                      ( )
// * negação e incremento          ! ++ --
// * multiplicação e divisão       * /
// * adição e subtração            + -
// * relacional                    < <= > >=
// * igualdade                     == != === !==
// * AND                           && 
// * OR                            ||
// * condicional                   ?:
// * assignment (atribuição)       = += -= *= %= 