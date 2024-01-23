//Exemplo 1
const listaCompras = ['frutas',{
    fruta1: 'melancia',
    fruta2: 'melão',
    fruta3: 'uva'
}, 'legumes', 'carnes', 'bebidas', 'itens de cozinha',
'prod. de limpeza']

console.log(listaCompras)

const listaMap = listaCompras.map((i, index, array) => {
    console.log(i, index)
    return i
})

console.log(listaMap)

//Exemplo 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numbersX2 = numbers.map((i) => {
    return i*2
})

console.log(numbersX2)


//Exemplo 3
const cursos = [
    {
        nome: 'HTML5 & CSS3',
        tempo: '23 horas'
    },
    {
        nome: 'JavaScript Completo',
        tempo: '37 horas'
    },
    {
        nome: 'React Completo',
        tempo: '18 horas'
    },
    {
        nome: 'Bootstrap 4',
        tempo: '5 horas'
    }
]
// function nomeAulas(cursos){
//     return cursos.nome
// }
// const arrayCursos = cursos.map(nomeAulas)
// console.log(arrayCursos)
const nomeCursos = cursos.map((item) => {
    return item.nome
})
console.log(nomeCursos)


//Exemplo 4
const numeros = [10, 2, 12, 27, 102, 55, 13]

const maiorNumero = numeros.reduce((primeiro, atual) => {
    // if(primeiro > atual){
    //     return primeiro
    // } else{
    //     return atual
    // }
    return primeiro > atual ? primeiro : atual
}, 0)

console.log(maiorNumero)