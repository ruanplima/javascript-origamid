// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const footer = document.querySelector('.copy')

const cloneMenu = menu.cloneNode(true)

footer.appendChild(cloneMenu)


// Selecione o primeiro DT da dl de Faq
const firstDt = document.querySelector('.faq-lista dt:first-child')

console.log(firstDt.innerHTML)


// Selecione o DD referente ao primeiro DT
console.log(firstDt.nextElementSibling.innerHTML)

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq')
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML