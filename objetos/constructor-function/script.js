// function Carro(){
//     this.marca = 'Marca',
//     this.preco = 10
// }

// const honda = new Carro()
// console.log(honda)

// const fiat = new Carro
// console.log(fiat)

// fiat.marca = 'Fiat'
// fiat.preco = 20
// console.log(fiat)


function Carro(marcaCarro, precoCarro){
    this.marca = marcaCarro,
    this.preco = precoCarro
}

const honda = new Carro('fit', 10)
console.log(honda)

const fiat = new Carro('Uno', 20)
console.log(fiat)


function Carro2(marca, precoInicial){
    const taxa = 1.2
    const precoFinal = precoInicial * taxa
    this.preco = precoFinal
    this.marca = marca
}


const sandero = new Carro2('Sandero', 1000)
console.log(sandero)