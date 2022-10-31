// FOR

for(let i = 0; i <= 5; i++){
    console.log(i)
}

console.log("WHILE--------------");
 
// While - ENQUANTO
let h = 6;
while(h <= 10  ){
    console.log(h);
    
    h++;
}

// For...of
let name = 'Leandro';
let names = ['João', 'Paulo', 'Luana'];

for(let name of names){ //Pegar um caracter da variavel
    console.log(name)
}

// For...In
let person ={
    name: 'Roberto',
    age: 30,
    weight: 88.6
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}