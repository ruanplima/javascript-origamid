// Retorne um número aleatório
// entre 1050 e 2000
console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050)

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9'
const ale = numeros.split(',')
console.log(Math.max(...ale))

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = [
'R$ 59,99',
' R$ 100,222',
'R$ 230  ',
'r$  200'
];

function limparPreco(preco){
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.')
    preco = +preco.toFixed(2)
    return preco
}

let soma = 0
listaPrecos.forEach((i) => {
    soma += limparPreco(i)
})

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))

limparPreco(listaPrecos[1])

// const numero01 = +listaPrecos[0].replace(',', '.').substring(3)
// const result01 = +numero01.toFixed(2)
// console.log(result01)

// const numero02 = +listaPrecos[1].replace(',', '.').substring(3).trim()
// const result02 = +numero02.toFixed(2)
// console.log(result02)

// const numero03 = +listaPrecos[2].substring(3)
// const result03 = +numero03.toFixed(2)
// console.log(result03)

// const numero04 = +listaPrecos[3].substring(3).trim()
// const result04 = +numero04.toFixed(2)
// console.log(result04)

// const somar = numero01 + numero02 + numero03 + numero04

// const real = somar.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
// console.log(real)

