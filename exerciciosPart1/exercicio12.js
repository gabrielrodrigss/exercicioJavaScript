// Faça um algoritmo que calcule o fatorial de um número

function calcularFatorial(numero) {
    let fatorial = 1; // Inicializa o fatorial com 1
    while (numero > 1) { // Continua o loop enquanto numero for maior que 1
        fatorial *= numero; // Multiplica o fatorial pelo numero atual
        numero--; // Decrementa o numero
    }
    return(fatorial)
}

console.log(calcularFatorial(5)); // Chamando a função para calcular o fatorial de 5







// function calcularFatorial(numero) {
//     let fatorial = 1; // Inicializa o fatorial com 1
//     for (let i = numero; i > 1; i--) { // Loop de numero até 1
//         fatorial *= i; // Multiplica o fatorial pelo valor atual de i
//     }
//     console.log(fatorial); // Exibe o resultado do fatorial
// }

// calcularFatorial(5); // Chamando a função para calcular o fatorial de 5