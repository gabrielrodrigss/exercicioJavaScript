/**
 *  Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
 * e imprime a quantidade no console.
 */

function imprimirNegativo(num) {

    let numNeg = []
    for(let i = 0; i < num.length; i++) {
        
        if(num[i] < 0) {
            numNeg.push(num[i])
        }
    }

    return numNeg.length
}

console.log(imprimirNegativo([-4, 4, -3, 2, 5, -1, -2, 6]))