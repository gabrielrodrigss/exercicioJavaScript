//  Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros
 
function calcularMedia(num) {
    

    let soma = 0
    for(let i = 0; i < num.length; i++) {
        soma = i + soma
        soma++
        
    }

    return soma / num.length
}

console.log(calcularMedia([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
