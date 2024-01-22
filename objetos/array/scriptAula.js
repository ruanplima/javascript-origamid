const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
let comida1 = comidas.shift()
console.log(comida1)

let comida2 = comidas.pop()
console.log(comida2)

console.log(comidas)


comidas.unshift('Peixe', 'Batata')
comidas.push('Arroz')
console.log(comidas)



const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes)
console.log(estudantes.sort())

console.log(estudantes.reverse())

console.log(estudantes.includes('Joana'))
console.log(estudantes.includes('Juliana'))


// Substitua section por ul e div com li,
// utilizando split e join
let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
console.log(html)

let removeSec = html.split('section')
let ul = removeSec.join('ul')

let removeDiv = ul.split('div')
let li = removeDiv.join('li')
console.log(li)

// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carros = ['Ford', 'Fiat', 'VW', 'Honda']
let carros2 = carros.slice()
console.log(carros2)
carros.pop()
console.log(carros)
console.log(carros2)



