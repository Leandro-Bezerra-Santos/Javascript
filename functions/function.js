// Uma função é composta por uma sequência de instruções chamada corpo da função. Valores podem ser passados para uma função e ela vai retornar um valor.

// Função anonima não tem nome

function types_DEVS(){
  console.log("Developer Front-End");
  console.log("Developer Back-End");
  console.log("Developer Full-Stack");
}
types_DEVS();

//function(parameters)
const funAno = function(fun1, fun2){
  console.log(fun2, fun1)
}

//arguments
funAno("function", "anonymous")

//function scope
let subject = 'create video';

function createThink(subject){
  subject = 'study'
  return subject;
}

console.log(subject)
console.log(createThink(subject))

// Function Hoisting
fileSystem();

function fileSystem(){
  console.log('Arquivo');
}

// Arrow Function
const MY_NAME = () => {
  console.log("ARROW FUNCTION")
}
MY_NAME();

// Callback Function
function sayMyName(name){
  name()
}

sayMyName(
  () => {
    console.log('Callback é uma função que retorna outra função')
  }
)

// Funções Construtoras 
/*
  Function() constructor

  *expressão new
  *criar um novo objeto
*/

function Person(name){
  this.name = name;
  this.walk = () => {
    return this.name + ' está andando!'
  }
}
const leh = new Person("Leandro");
const joao = new Person("João");
console.log(leh.walk())
console.log(joao.walk())