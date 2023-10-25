// Retorne no console todas as imagens do site
const imagesAll =  document.querySelectorAll('img')
console.log(imagesAll)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const image02 = document.querySelectorAll('[src^="images/imagem"]')
console.log(image02)

// Selecione todos os links internos (onde o href começa com #)
const linksInternosAll = document.querySelectorAll('[href^="#"')
console.log(linksInternosAll)

// Selecione o primeiro h2 dentro de .animais-descricao
const selectH2 = document.querySelector('.animais-descricao h2')
console.log(selectH2.innerHTML)


// Selecione o último p do site
const last = document.querySelectorAll('p')
console.log(last[last.length-1])
