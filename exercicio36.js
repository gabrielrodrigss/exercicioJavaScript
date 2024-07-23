/**
 * Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
 * inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
 * elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
 * o valor do elemento for maior que 5.
 */

function multiplicarValores(array, numero) {
    let resultado = []
    for(let i = 0; i < array.length; i++) {
        multiplicacao = array[i] * numero
        resultado.push(multiplicacao)
    }
    return resultado
}

console.log(multiplicarValores([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))

function multiplicarValoresMaiores5(array, numero) {
    let resultado = []
    for(let i = 0; i < array.length; i++) {
        if(array[i] > 5) {
            multiplicacao = array[i] * numero
            resultado.push(multiplicacao)
        }
    }
    return resultado
}

console.log(multiplicarValoresMaiores5([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))

