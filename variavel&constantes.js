/*
  Variáveis são espaços de memória do computador destinados a dados que são manipulados e alterados durante a execução de um algoritmo.

  var: Consegue ter seu valor alterado,pode ser redeclarada, Váriavel global,
  let:Consegue ter seu valor alterado,não pode ser redeclarada, Variavel de escopo
  const(CONSTANTE):Não pode ter seu Valor Alterado, Constante de escopo, Não pode ser redeclarada
*/
var global = "Global"; 

function variables(){

  global = "podeeee!!";
  console.log(global);

  var global ="Redeclaração";
  console.log(global);


  let no = "Não pode ser acessada fora da função";
  console.log(no);
  no = "Pode ter valor trocado, só não pode ser redeclarada que nem o var";
  console.log(no);

  //let no = "⚠ISSO DÁ ERRO!!!!!⚠";
}
variables();

// console.log(no) A função let não pode ser acessada fora do seu escopo.