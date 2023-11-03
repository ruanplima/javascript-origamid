// Verifique a distância da primeira imagem
// em relação ao topo da página
const image = document.querySelector('img')
const topElemet = image.offsetTop

console.log(topElemet)


// Retorne a soma da largura de todas as imagens
const images = document.querySelectorAll('img')
images.forEach((imagem) => {
    console.log(imagem.offsetWidth)
})


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')
links.forEach((i) => {
    if(i.clientWidth >= 48 && i.clientHeight >= 48){
        console.log('No padrão Google')
    } else{
        console.log('Fora do padrão')
    }
})


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const verificaWidth = window.outerWidth
const menu = document.querySelector('.menu')

if(verificaWidth < 720){
    menu.classList.add('menu-mobile')
} 