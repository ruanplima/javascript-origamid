// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoa.prototype.nomeCompleto = function(){
    return `Olá, Mundo! Meu nome completo é: ${this.nome} ${this.sobrenome}`
}

const ruan = new Pessoa('Ruan', 'Pinheiro', 20)


// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
console.log(NodeList.prototype)
console.log(HTMLCollection.prototype)
console.log(Document.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');
// li;
// li.click;
// li.innerText;
// li.value;
// li.hidden;
// li.offsetLeft;
// li.click(); UNDEFINED

console.log(li.constructor.name)
console.log(li.click.constructor.name)
console.log(li.innerText.constructor.name)
console.log(li.value.constructor.name)
console.log(li.hidden.constructor.name)
console.log(li.offsetLeft.constructor.name)


// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //STRING
