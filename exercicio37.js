/**
 * Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
 * como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
 * bem como a soma dos elementos.
 */

function pA (n, a1, r) {
    for (let i = 0; i < n; i++) {
        console.log(a1 + r*i)
    }
    console.log('Soma: ' + (n * (a1 + (a1 + ((n-1)*r))))/2)    
}

function pG (n, a1, r) {
    //console.log(a1)
    for(let i = 0; i < n; i++){
        console.log(a1*(r**i))
    }
    console.log('Soma: ' + (a1 * ((r**n)-1))/(r-1))
}

pA(10, 10, 15)
console.log('----------------');
pG(10, 5, 3)

// function elementoPA(n, a1, r) {
//     let numerosTermos = []
//     for(let i = 0; i < n; i++) {
//         let resultado = a1 + (r*i)
//         numerosTermos.push(resultado)
//         console.log(resultado)
//     }
//     let soma = 0
//     for(let i = 0; i < numerosTermos.length; i++) {
//         soma += numerosTermos[i] 
//     }
//     console.log(soma)
// }

// elementoPA(5, 1, 2)