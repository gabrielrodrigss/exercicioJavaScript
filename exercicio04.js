/**
 * Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
 * e o resto da divisão destes dois valores.
 */

function dividir(dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor))
    console.log(`Resto: ${dividendo % divisor}`)
}

dividir(5, 2)