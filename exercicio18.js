/**
 * Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
 * switch. Crie um case default que escreva ‘Número fora do intervalo.
 */

function escreverNumeroPorExtenso(numero) {
    switch (numero) {
        case 0:
            return `zero`
        case 1:
            return `um`
        case 2:
            return `dois`
        case 3:
            return `três`
        case 4:
            return `quatro`
        case 5:
            return `cinco`
        case 6:
            return `seis`
        case 7:
            return `sete`
        case 8:
            return `oito`
        case 9:
            return `nove`
        case 10:
            return `dez`
        default:
            return `Erro. Número fora do intervalo`
    }
}

console.log(escreverNumeroPorExtenso(0))
console.log(escreverNumeroPorExtenso(1))
console.log(escreverNumeroPorExtenso(2))
console.log(escreverNumeroPorExtenso(3))
console.log(escreverNumeroPorExtenso(4))
console.log(escreverNumeroPorExtenso(5))
console.log(escreverNumeroPorExtenso(6))
console.log(escreverNumeroPorExtenso(7))
console.log(escreverNumeroPorExtenso(8))
console.log(escreverNumeroPorExtenso(9))
console.log(escreverNumeroPorExtenso(10))
console.log(escreverNumeroPorExtenso(11))
