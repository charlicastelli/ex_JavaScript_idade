function calcular() {
    var ano = document.querySelector('input#txtano')
    var resultado = document.querySelector('div#resut')
    var sexo = document.getElementsByName('sexos')
    var n1 = Number(ano.value)
    var data = new Date()
    var year = data.getFullYear()
    var idade = year - n1
    var genero = ''
    
    if (ano.value.length == 0 || n1 > year) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else {
        if (sexo[0].checked) {
            genero = 'Homem'
        } else if (sexo[1].checked) {
            genero = 'Mulher'
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}