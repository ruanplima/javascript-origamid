function areaQuadrado(lado){
    return lado * lado + '2'
}

console.log(areaQuadrado(5))
console.log(areaQuadrado.length) // RETORNA O TOTAL DE PARÂMETROS DA FUNÇÃO
console.log(areaQuadrado.name) // RETORNA O NOME DA FUNÇÃO

// -//-

function darTchau(nome, idade, aniversario){
    return 'Tchau ' + nome + ', sua idade é ' + idade + '? É verdade que você faz aniversário dia ' + aniversario + '?'
}

console.log(darTchau('Ruan', 20, '26 de maio'))

