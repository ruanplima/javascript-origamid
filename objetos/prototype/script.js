function Pessoa(nome, idade, sexo){
    this.name = nome
    this.age  = idade
    this.sex  = sexo
}

Pessoa.prototype.andar = function(){
    return `${this.name} andou`
}

Pessoa.prototype.nadar = function(){
    return `${this.name} nadou`
}

const pessoa1 = new Pessoa('Andre', 27, 'M')
const pessoa2 = new Pessoa('Ruan', 20, 'M')
const pessoa3 = new Pessoa('Júlia', 18, 'F')



const pais = 'Brasil'
const cidade = new String('Castelo')

console.log(pais.charAt(0))
console.log(cidade.charAt(--cidade.length))

console.log(pais.replace('Brasil', 'Estados Unidos'))

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo']

const lista = document.querySelectorAll('li')



const Carro = {
    marca : 'Celta',
    ano : '2000',
    andar(){
        return true
    }
}