//Object

/*
  O que é um objeto ?
   - Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos).
*/

const person = {
  name: 'Leandro', 
  age: 17,
  weight: 70.5,
  isAdmin: true
}

//Acessando o objeto
console.log(person);
console.log(`${person.name} tem ${person.age} anos`);

// Array
/*
  O que é um array ?
  - Arrays são objetos semelhantes a listas que vêm com uma série de métodos embutidos para realizar operações de travessia e mutação.
*/

const animals = [
  'Lion',
  'Dog',
  'Cat',
  {
    name:'leandro'
  }
];

//Acessando um Array
console.log(animals);
console.log(animals[0]);

console.log(animals[3])

//lenght: Retorna o tamanho do array
console.log(animals.length);