// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const tituloCurso = document.querySelectorAll('h1')
const aula = [tituloCurso].map((i) => {
    return i
})

const descricaoCurso = document.querySelectorAll('p')
const descricao = [descricaoCurso].map((i) => {
    return i
})

const aulasCurso = document.querySelectorAll('span.aulas')
const aulas = [aulasCurso].map((i) => {
    return i
})

const horasCurso = document.querySelectorAll('span.horas')
const horas = [horasCurso].map((i) => {
    return i
})

const cursos = [
    {
        titulo: aula[0][0].innerText,
        descricao: descricao[0][0].innerText,
        aula: aulas[0][0].innerText,
        horas: horas[0][0].innerText
    },
    {
        titulo: aula[0][1].innerText,
        descricao: descricao[0][1].innerText,
        aula: aulas[0][1].innerText,
        horas: horas[0][1].innerText
    },
    {
        titulo: aula[0][2].innerText,
        descricao: descricao[0][2].innerText,
        aula: aulas[0][2].innerText,
        horas: horas[0][2].innerText
    },
]
console.log(cursos)


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiorQue100 = numeros.filter((i) => {
    return i > 100
})
console.log(maiorQue100)


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const temBaixo = instrumentos.some((i) => {
    return i == 'Baixo'
})
console.log(temBaixo)


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const totalCompras = compras.reduce((acumulador, i) => {
    const precoLimpo = +i.preco.slice(3).replace(',', '.')
    return acumulador + precoLimpo
}, 0)

console.log(`O total gasto na compra foi de ${totalCompras.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`)