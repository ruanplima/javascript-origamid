// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linkInterno = document.querySelectorAll('a[href^="#"]')

function toggleLink(event){
    event.preventDefault()
    linkInterno.forEach((link) => {
        link.classList.remove('ativo')
    })
    event.currentTarget.classList.toggle('ativo')
}

linkInterno.forEach((e) =>{
    e.addEventListener('click', toggleLink)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElement = document.querySelectorAll('body *')

function mostrarElemento(event){
    // event.target.remove()
}

allElement.forEach((element) => {
    element.addEventListener('click', mostrarElemento)
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento




// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
const elementosBody = document.querySelector('body')

function upperText(event){
    console.log(event.key)
    if(event.key === 't'){
        elementosBody.classList.toggle('upper')
    }
}

elementosBody.addEventListener('keydown', upperText)