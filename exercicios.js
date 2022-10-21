// 1
let weight;
//2
console.log(typeof weight);
//3
const person = {
  name: 'Leandro',
  age: 17,
  stars: 6.5,
  isSubscribed: true
}
console.log(person)
//4
let student ={};

console.log(typeof student);

student = {
  name: 'Leandro',
  age: 17,
  weight: 70,
  stars: 6.5,
  isSubscribed: true
}
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

//5 
const studentArray = ['Hello World'];

//6
const john = {
  name: 'john',
  age: 23,
  weight: 60,
  isSubscribed: true
}


students = [
  studentArray,
  john
]
console.log(students)

john[0] = "Leandro";
console.log(john)