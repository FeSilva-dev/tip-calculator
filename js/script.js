const Gorjeta = {
    calcular(e){
        e.preventDefault()
        const { valor, pessoas, percentual} = Tools.getValues()
        if(!valor || !pessoas){
            Gorjeta.noValues()
        }else{
            const totalToPay = Gorjeta.calcularPercentual(valor, percentual, pessoas)
            Gorjeta.insertHtml(totalToPay)
        }
    },
    calcularPercentual(valor, percentual, pessoas){
        const total = (valor * percentual) / pessoas
        const totalToPay = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        return totalToPay
    },
    insertHtml(value){
        const divToInsert = document.querySelector('.result')
        const message = `O valor total de gorjeta a ser paga é de ${value}`
        divToInsert.innerHTML = message
    },
    noValues(){
        const divToInsert = document.querySelector('.result')
        const message = `Não foi possível fazer o calculo, algum campo está vazio, por favor revise!`
        divToInsert.innerHTML = message
    }
}

const Tools = {
    getValues(){
        const valor = document.querySelector('#amount').value
        const pessoas = document.querySelector('#people').value
        const percentual = document.querySelector('#quality').value

        return {
            valor,
            pessoas,
            percentual
        }
    }
}