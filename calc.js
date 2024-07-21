var qntd_derrotas = 30
var qntd_vitorias = 100
var saldoRanqueado = qntd_vitorias - qntd_derrotas

function ranking(){
    if (saldoRanqueado <= 10){
        console.log("Ferro")
    }else if (saldoRanqueado >= 11 && saldoRanqueado <= 20){
        console.log("Bronze")
    }else if (saldoRanqueado >= 21 && saldoRanqueado <= 50){
        console.log("Prata")
    }else if (saldoRanqueado >= 51 && saldoRanqueado <= 80){
        console.log("Ouro")
    }else if (saldoRanqueado >= 81 && saldoRanqueado <= 90){
        console.log("Diamante")
    }else if (saldoRanqueado >= 91 && saldoRanqueado <= 100){
        console.log("Lendário")
    }else {
        console.log("Imortal")
    }
    
}

console.log(`O Héroi tem saldo de ${saldoRanqueado} está no nível de ${ranking}`)