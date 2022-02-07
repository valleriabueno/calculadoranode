const interface = require('readline-sync')

const calculadora = require('./calculadora')

let resposta = ''

do{
    console.log('\033[2J')
    console.log('1 - Somar')
    console.log('2 - Subtrair')
    console.log('3 - Multiplicar')
    console.log('4 - Dividir')
    console.log('5 - Fechar Calculadora')
    resposta = interface.question('Qual calculo matematico deseja realizar? Escolha pelo numero: ')

    if(resposta != 5){
        const a = interface.question('Digite um numero: ')
        const b = interface.question('Digite outro numero: ')

        switch(resposta){
            case "1":
                console.log(`Resultado do calculo: ${calculadora.soma(parseFloat(a), parseFloat(b))}`)
                break
            case "2":
                console.log(`Resultado do calculo: ${calculadora.subtracao(parseFloat(a), parseFloat(b))}`)
                break
            case "3":
                console.log(`Resultado do calculo: ${calculadora.multiplicacao(parseFloat(a), parseFloat(b))}`)
                break
            case "4":
                console.log(`Resultado do calculo: ${calculadora.divisao(parseFloat(a), parseFloat(b))}`)
                break
            default:
                break
        }

        interface.question('Tecle ENTER para continuar')
    }
}while(resposta != 5)
