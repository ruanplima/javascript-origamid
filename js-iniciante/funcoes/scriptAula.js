// Crie uma função para verificar se um valor é Truthy
function valorTrue(valor){
    return typeof(valor) == 'number' ? true : false
}
console.log(valorTrue())


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function quadrado(lado){
    return lado * 4
}
console.log(quadrado(2))


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`
}
console.log(nomeCompleto('Ruan', 'Pinheiro'))


// Crie uma função que verifica se um número é par
function ePar(valor){
    return valor % 2 == 0 ? 'Par' : 'Ímpar'
}
console.log(ePar(2))


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function typeDado(dado){
    return typeof(dado)
}
console.log(typeDado(true))


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

function mostrarNome(){
    console.log('Ruan Pinheiro')
}
addEventListener('click', mostrarNome)


// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    //var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);
  