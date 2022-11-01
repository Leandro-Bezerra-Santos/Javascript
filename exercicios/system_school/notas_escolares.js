/* Criar um sistema que transforme as notas do sistema numérico para sistema de notas em caracteres tipo a b c*/

const A = 90;
const B = 80;
const C = 70;
const D = 60;
const E = 50;

const value = prompt("Digite seus pontos em todo os bimestres");

if(value >= A){
    alert("Parabens a sua nota total é A 😆")
}else if(value >= B && value <= 89){
    alert("Parabens a sua nota total é B 😃")
}else if(value >= C && value <= 79){
    alert("Parabens a sua nota total é C 🤔")
}else if(value >= D && value <= 69){
    alert("Parabens a sua nota total é D 😪")
}else if(value <= 60 && value >= 0){
    alert("Parabens a sua nota total é E 😥")
}else if(value <= -1){
     alert( new Error("NOTA INVALIDA !"))
}