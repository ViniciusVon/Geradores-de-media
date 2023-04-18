
function calcular(){
    var tn1 = window.document.getElementById("txtn1")
    var tn2 = window.document.getElementById("txtn2")
    var tn3 = window.document.getElementById("txtn3")
    var tn4 = window.document.getElementById("txtn4")
    var res = window.document.getElementById("res")
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value)
    var s = (n1+n2+n3+n4)/4
    var valor = s >= 6 ?"Aprovado": "Reprovado"
    res.innerHTML = `A sua média final é <strong>${s}</strong>. <br>Portanto, você está <strong>${valor}</strong>.`
}

