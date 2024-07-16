/**
 * Crie um programa que exibe se um dia é dia útil, fim de semana ou 
 * dia inválido dado o número referente ao
 * dia. Considere que domingo é o dia 1 e 
 * sábado é o dia 7. Utilize a estrutura Switch.
 */

function classificaDia(numero) {
    switch (numero) {
        case 1:
            return "Fim de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
            return "Dia útil"
        case 7:
            return "Fim de semana"
        default: 
            return "Dia inválido"
    }
}

console.log(classificaDia(1));
console.log(classificaDia(2));
console.log(classificaDia(3));
console.log(classificaDia(4));
console.log(classificaDia(5));
console.log(classificaDia(6));
console.log(classificaDia(7));
console.log(classificaDia('a'));


// function exibirDia (dia) {
//     switch (dia) {
//         case 1:
//             console.log("Fim de semana")
//             break
//         case 2:
//             console.log("Dia útil")
//             break
//         case 3:
//             console.log("Dia útil") 
//             break
//         case 4:
//             console.log("Dia útil")
//             break
//         case 5:
//             console.log("Dia útil") 
//             break
//         case 6:
//             console.log("Dia útil") 
//             break
//         case 7:
//             console.log("Fim de semana") 
//             break
//         default:
//             console.log("Dado inválido")
//             break
//     }
// }

// exibirDia(1)
// exibirDia(2)
// exibirDia(3)
// exibirDia(4)
// exibirDia(5)
// exibirDia(6)
// exibirDia(7)
// exibirDia(8)