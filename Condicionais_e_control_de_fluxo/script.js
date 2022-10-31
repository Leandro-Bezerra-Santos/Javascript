// Control FLow 

let temperature = 36.9;
let hightTemperature = temperature > 37.5;
let mediumTemperature = temperature < 37.5 && temperature >= 37;


// IF & ELSE (SE E SENÃO;
if(hightTemperature){
    console.log("Você esta com febre");
}else if(mediumTemperature){
    console.log("Febre baixa");
}else{
    console.log("Você não esta com febre !!!!")
}

// Switch

let expression = "a";

switch(expression){
    case 'a':
        //código
          console.log('Expression: A')  
        break
    case 'b':
        //Códico caso for B
           console.log('Expression: B') 
        break
    default:
             console.log('Expression: Default')
        break
}

function calculate(n1, operator, n2){
    let result;

    switch(operator){
        case '+':
                result = n1 + n2
            break
        case '-':
                result = n1 - n2
            break
        case '*':
                result = n1 * n2
            break
        case '/':
                result = n1 / n2
            break
        default:
            console.log("Not Implemented!");
            break
    }

    return result;
}

console.log(calculate(12, "/", 2))

// throw
function sayMyName(name = ""){
    if(name === ""){
        throw new Error("Review Name Please!")
    }
    console.log('depois do erro"')
}
// Try...Catch
try{
    sayMyName();
}catch(err){
    console.log(err)
}