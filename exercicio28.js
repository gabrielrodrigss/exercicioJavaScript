//  Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
function indentificarPares(array) {
    
    let arrayPares = []
    let arrayImpares = []
    array.forEach(function(numero) {
        if(numero % 2 == 0) {
            arrayPares.push(numero)
        } else {
            arrayImpares.push(numero)
        }
    })
    console.log(arrayPares.length)
    console.log(arrayImpares.length)
}

indentificarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])




// function paresImpares(vetorNumeros) {
//     let qtdPares = 0
//     let qtdImpares = 0
//     for (let i = 0; i < vetorNumeros.length; i++) {
//         if (vetorNumeros[i] % 2 == 0) {
//             qtdPares++
//         } else {
//             qtdImpares++
//         }
//     }
//     console.log(`${qtdPares} números pares e ${qtdImpares} números ímpares.`)
// }

// vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// paresImpares(vetor)