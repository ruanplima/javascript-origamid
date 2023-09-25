// Crie uma função para verificar se um valor é Truthy
function verificaValor(valor){
    return !!valor
} 
console.log(verificaValor(2003))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function calcularPerimetro(lado){
    perimetro = lado * 4
}
calcularPerimetro(2)
console.log(perimetro)

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
    return `Meu nome completo é ${nome} ${sobrenome}`
}

console.log(nomeCompleto('Ruan', 'Pinheiro Lima'))

// Crie uma função que verifica se um número é par
function verificaNumero(number){
    if(number % 2 == 0){
        return 'par'
    } else {
        return 'impar'
    }
}
console.log(verificaNumero(2003))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado){
    return typeof dado
}
console.log(tipoDeDado('2003'))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('click', function(){
    console.log('Ruanzin')
})


// Corrija o erro abaixo

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  console.log(precisoVisitar(20));
  console.log(jaVisitei(20))
 
  