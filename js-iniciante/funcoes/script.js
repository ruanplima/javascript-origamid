function areaQuadrado(lado){
    return lado * lado
}
console.log(areaQuadrado(9))
console.log(areaQuadrado(2))


function pi(){
    return 3.14
}
let total = 5 * pi()
console.log(total.toFixed(2))


function calcImc(peso, altura){
    return peso / (altura**2)
}
console.log(calcImc(80, 1.60).toFixed(2))
console.log(calcImc(67, 1.68).toFixed(2))


function corFav(cor){
    return cor == 'azul' ? 'Você gosta de Azul' : 'Você não gosta de Azul'
}

console.log(corFav('azul'))
