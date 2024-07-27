/**
 * Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
 * primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
 * retornará o valor da aplicação sob o regime de juros compostos.
 */

function calcularJurosSimples(capInicial, taxaJuros, tempAplicacao) {
    const montante = capInicial + (capInicial * taxaJuros * tempAplicacao)
    return montante
}

function calcularJurosComposto(capInicial, taxaJuros, tempAplicacao) {
    const montante = capInicial * (1 + taxaJuros) ** tempAplicacao
    return montante
}

const montanteJS = calcularJurosSimples(2000, 0.04, 4)
console.log(montanteJS)

const montanteJC = calcularJurosComposto(2000, 0.04, 4)
console.log(montanteJC)