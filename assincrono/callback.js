//Callback é uma função que retorna outra função

function call(props){
    return console.log(props())
}

call(function (){
    return 'Callback return'
})