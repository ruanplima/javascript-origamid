function areaQuadrado(lado){
    return lado * lado + '2'
}

console.log(areaQuadrado(5))
console.log(areaQuadrado.length) // RETORNA O TOTAL DE PARÂMETROS DA FUNÇÃO
console.log(areaQuadrado.name) // RETORNA O NOME DA FUNÇÃO



function darTchau(nome, idade, aniversario){
    return 'Tchau ' + nome + ', sua idade é ' + idade + '? É verdade que você faz aniversário dia ' + aniversario + '?'
}

console.log(darTchau('Ruan', 20, '26 de maio'))



function carro(modelo){
    console.log(this)
    console.log(`Comprei um ${this.carro} modelo ${modelo} do ano ${this.ano}`)
}

carro.call({carro: 'Fiat', ano: 2018}, 'Uno')



const car = ["Fiat", "Gol", "Palio"]
const frutas = ["Banana", "Laranja", "Manga"]
console.log(car, frutas)

car.forEach.call(frutas, (i) => {
    console.log(i)
})



function Dom(seletor){
    this.element = document.querySelector(seletor)
}

const ul = new Dom('ul')

console.log(ul.element)

