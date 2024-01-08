// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 139',    
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 49',
    },
];

let taxaTotal = 0
let recebTotal = 0
transacoes.forEach((i) => {
    if(i.descricao.startsWith('T')){
        let valores = +i.valor.slice(3)
        taxaTotal += valores
    }
    if(i.descricao.startsWith('R')){
        let valores2 = +i.valor.slice(3)
        recebTotal += valores2
    }
})
console.log(`O valor total do recebimento é de R$${recebTotal}`)
console.log(`O valor total da taxa é de R$${taxaTotal}`)



// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

console.log(transportes.split(';'))




// Substitua todos os span's por a's
const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;
    
    console.log(html)

    let removerSpan = html.split('span')
    let adicionarA = removerSpan.join('a')
    console.log(adicionarA)



// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase[--frase.length])

// Retorne o total de taxas
const taxaTransacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
taxaTransacoes.forEach((i) => {
    let mod = i.trim().toLowerCase().slice(0, 4)

    if(mod === 'taxa'){
        console.log(mod)
    }

})

