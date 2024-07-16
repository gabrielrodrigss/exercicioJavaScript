/**
 * O cardápio de uma lanchonete é o seguinte:
 * Código Descrição do Produto Preço
 * 100    Cachorro Quente      R$ 3,00
 * 200    Hambúrguer Simples   R$ 4,00
 * 300    Cheeseburguer        R$ 5,50
 * 400    Bauru                R$ 7,50
 * 500    Refrigerante         R$ 3,50
 * 600    Suco                 R$ 2,80
 * Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
 * a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
 * comando switch. Crie um caso default para produto não existente.
 */

function calcularLanche(cod, qtd) {
    switch (cod) {
        case 100:
            preco = 3.0
            valor = qtd * preco
            return `Valor do lanche ${valor}`
        case 200:
            preco = 4.0
            valor = qtd * preco
            return `Valor do lanche ${valor}`
        case 300:
            preco = 5.5
            valor = qtd * preco
            return `Valor do lanche ${valor}`
        case 400:
            preco = 7.5
            valor = qtd * preco
            return `Valor do lanche ${valor}`
        case 500:
            preco = 3.5
            valor = qtd * preco
            return `Valor do lanche ${valor}`
        case 600:
            preco = 2.8
            valor = qtd * preco
            return `Valor do lanche ${valor}`
    }
}

console.log(calcularLanche(100, 2))
console.log(calcularLanche(200, 2))
console.log(calcularLanche(300, 2))
console.log(calcularLanche(400, 2))
console.log(calcularLanche(500, 2))
console.log(calcularLanche(600, 2))