// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//     nome: 'Nome pessoa',
//     idade: 0,
//     andar() {
//       console.log(this.nome + ' andou');
//     }
//   }
  
function Pessoa(nome, idade){
    this.name = nome
    this.age = idade
    this.andar = function(){
        console.log(this.name + ' Andou')
    }
}

const pessoa = new Pessoa('Maria Eduarda Zerbone Brandão', 19)
console.log(pessoa)
console.log(pessoa.andar())

  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos
function Pessoas(nome, idade){
    this.name = nome
    this.age = idade
}

const pessoa1 = new Pessoas('João', 20)
console.log(pessoa1)

const pessoa2 = new Pessoas('Maria', 25)
console.log(pessoa2)

const pessoa3 = new Pessoas('Bruno', 15)
console.log(pessoa3)
  
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos
  
  