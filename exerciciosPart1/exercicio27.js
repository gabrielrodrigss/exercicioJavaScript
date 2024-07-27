/**
 * Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
 * crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
 * quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
 */

function calcularAltura(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2) {
        if(taxa1 > taxa2) {
            return `A criança 1 passará a criança 2 em 1 ano`
        } else if(taxa1 < taxa2) {
            return `A criança 2 ultrpassará a criança 1 em 1 ano`
        } else {
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if(altura1 > altura2) {
            if(taxa1 >= taxa2) {
                return `A criança menor não ultrapassará a criança maior`
            } else {
                return `A criança 1 ultrapassará a criança 2 em ${calcularTempo(altura2, taxa2, altura1, taxa1)} anos`
            }
        } else {
            if(taxa2 >= taxa1) {
                return `A criança menor não ultrapassará a criança maior`
            } else {
                return `A criança menor ultrapassará a criança maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos`
            }
        }
    }

}

function calcularTempo(alturaMenor, taxaMenor, alturaMaior, taxaMaior) {
    let qtdAnos = 0
    while(alturaMenor < alturaMaior) {
        alturaMenor += taxaMenor
        alturaMaior += taxaMaior
        qtdAnos++
    }
    return qtdAnos
}

console.log(calcularAltura(100, 1, 110, 1))
console.log(calcularAltura(150, 2, 130, 4));