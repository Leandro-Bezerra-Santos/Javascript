const family = {
    receitas: [991, 200],
    despensas: [300, 300, 120, 100, 100,25, 50]
}

function sum(arr){
    let total = 0;

    for(let value of arr){
        total += value;
    }

    return total;
}

function calc(){
    const calcularReceitas = sum(family.receitas);
    const calcularDespensas = sum(family.despensas);

    const total = calcularReceitas - calcularDespensas;
    total.toFixed(2);
    let boolean = total >= 0 ? `Seu saldo é positivo: ${total} R$` : `Seu saldo é negativo: ${total}R$`;

    return console.log(boolean);
}

calc();