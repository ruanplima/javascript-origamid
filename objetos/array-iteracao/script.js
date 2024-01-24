// //Exemplo 1
// const listaCompras = ['frutas',{
//     fruta1: 'melancia',
//     fruta2: 'melão',
//     fruta3: 'uva'
// }, 'legumes', 'carnes', 'bebidas', 'itens de cozinha',
// 'prod. de limpeza']

// console.log(listaCompras)

// const listaMap = listaCompras.map((i, index, array) => {
//     console.log(i, index)
//     return i
// })

// console.log(listaMap)

// //Exemplo 2
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const numbersX2 = numbers.map((i) => {
//     return i*2
// })

// console.log(numbersX2)


// //Exemplo 3
// const cursos = [
//     {
//         nome: 'HTML5 & CSS3',
//         tempo: '23 horas'
//     },
//     {
//         nome: 'JavaScript Completo',
//         tempo: '37 horas'
//     },
//     {
//         nome: 'React Completo',
//         tempo: '18 horas'
//     },
//     {
//         nome: 'Bootstrap 4',
//         tempo: '5 horas'
//     }
// ]
// // function nomeAulas(cursos){
// //     return cursos.nome
// // }
// // const arrayCursos = cursos.map(nomeAulas)
// // console.log(arrayCursos)
// const nomeCursos = cursos.map((item) => {
//     return item.nome
// })
// console.log(nomeCursos)


// //Exemplo 4
// const numeros = [10, 2, 12, 27, 102, 55, 13]

// const maiorNumero = numeros.reduce((primeiro, atual) => {
//     // if(primeiro > atual){
//     //     return primeiro
//     // } else{
//     //     return atual
//     // }
//     return primeiro > atual ? primeiro : atual
// }, 0)

// console.log(maiorNumero)


// //Exemplo 5
// const aulas = [
//     {
//       nome: 'HTML 1',
//       min: 15
//     },
//     {
//       nome: 'HTML 2',
//       min: 10
//     },
//     {
//       nome: 'CSS 1',
//       min: 20
//     },
//     {
//       nome: 'JS 1',
//       min: 25
//     },
//   ]
  
//   const listaAulas = aulas.reduce((acumulador, atual, index) => {
//     acumulador[index] = atual.nome;
//     return acumulador;
//   }, {})
  
// console.log(listaAulas)


// //Exemplo 6
// const carnes = ['Picanha', 'Fraldinha', 'Chorizo', 'Alcatra']
// const temPicanha = carnes.some((item) => {
//     return item == 'Picanha'
// })

// console.log(temPicanha)


// const numeros2 = [8, 14, 21, 78, 92, 100]
// const maiorQue4 = numeros2.every((n) => {
//     return n > 5
// })

// console.log(maiorQue4)


// //Exemplo 7
// const aulas3 = [
//     {
//       nome: 'HTML 1',
//       min: 15
//     },
//     {
//       nome: 'HTML 2',
//       min: 10
//     },
//     {
//       nome: 'CSS 1',
//       min: 20
//     },
//     {
//       nome: 'JS 1',
//       min: 25
//     },
//   ]
  
//   const aulasMaiores = aulas3.filter((aula) => { 
//     return aula.min > 15;
//   });

// console.log(aulasMaiores)
  