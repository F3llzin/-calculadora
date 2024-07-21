var qntd_derrotas = 30
var qntd_vitorias = 100
var saldoRanqueado = qntd_vitorias - qntd_derrotas
var nivel = " "

function ranking(){
    if (saldoRanqueado <= 10){
        nivel = "Ferro"
    }else if (saldoRanqueado >= 11 && saldoRanqueado <= 20){
        nivel = "Bronze"
    }else if (saldoRanqueado >= 21 && saldoRanqueado <= 50){
        nivel = "Prata"
    }else if (saldoRanqueado >= 51 && saldoRanqueado <= 80){
        nivel = "Ouro"
    }else if (saldoRanqueado >= 81 && saldoRanqueado <= 90){
        nivel = "Diamante"
    }else if (saldoRanqueado >= 91 && saldoRanqueado <= 100){
        nivel = "Lendário"
    }else {
        nivel = "Imortal"
    }
    
}
const calculadora = ranking()
console.log(`O Héroi tem saldo de ${saldoRanqueado} está no nível de ${nivel}.`)