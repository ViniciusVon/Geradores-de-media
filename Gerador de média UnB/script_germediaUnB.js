var btn = document.querySelector(".btn")
var list = document.getElementById("lista")
btn.addEventListener("click", () => {
    list.classList.toggle("newlist")
})



function calcular1(){
    var tn1 = window.document.getElementById("txtn1_1")
    var tn2 = window.document.getElementById("txtn2_1")
    var tn3 = window.document.getElementById("txtn3_1")
    var tn4 = window.document.getElementById("txtn4_1")
    var tn5 = window.document.getElementById("txtn5_1")
    var res1 = window.document.getElementById("resultado")
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value)
    var n5 = Number(tn5.value)
     var s1 = (2*n1 + 2*n2 + 4*n3 + 4*n4 + n5) /13
    var valor1 =  s1 >= 743.71 ? "<strong>Parabéns! você foi aprovado na 1ª chamada.</strong>": "<strong>Não passou na 1ª chamada, aguarde a 2ª chamada.</strong>"
    res1.innerHTML = `${valor1}`
}
function calcular2(){
    var tn1 = window.document.getElementById("txtn1_1")
    var tn2 = window.document.getElementById("txtn2_1")
    var tn3 = window.document.getElementById("txtn3_1")
    var tn4 = window.document.getElementById("txtn4_1")
    var tn5 = window.document.getElementById("txtn5_1")
    var res2 = window.document.getElementById("resultado")
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value)
    var n5 = Number(tn5.value)
     var s2 = (2*n1 + 2*n2 + 4*n3 + 4*n4 + n5)/13
    var valor2 =  s2 >= 700 ?"<strong>Parabéns! você foi aprovado na 2ª chamada.</strong>": "<strong>Não passou na 2ª chamada, aguarde a 3ª chamada.</strong>"
    res2.innerHTML = `${valor2}`
}
function calcular3(){
    var tn1 = window.document.getElementById("txtn1_1")
    var tn2 = window.document.getElementById("txtn2_1")
    var tn3 = window.document.getElementById("txtn3_1")
    var tn4 = window.document.getElementById("txtn4_1")
    var tn5 = window.document.getElementById("txtn5_1")
    var res3 = window.document.getElementById("resultado")
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value)
    var n5 = Number(tn5.value)
     var s3 = (2*n1 + 2*n2 + 4*n3 + 4*n4 + n5)/13
    var valor3 =  s3 >= 650 ?"<strong>Parabéns! você foi aprovado na 3ª chamada.</strong>": "<strong>Não passou na 3ª chamada, aguarde a 4ª chamada.</strong>"
    res3.innerHTML = `${valor3}`
}
function calcular4(){
    var tn1 = window.document.getElementById("txtn1_1")
    var tn2 = window.document.getElementById("txtn2_1")
    var tn3 = window.document.getElementById("txtn3_1")
    var tn4 = window.document.getElementById("txtn4_1")
    var tn5 = window.document.getElementById("txtn5_1")
    var res4 = window.document.getElementById("resultado")
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value)
    var n5 = Number(tn5.value)
     var s4 = (2*n1 + 2*n2 + 4*n3 + 4*n4 + n5)/13
    var valor4 =  s4 >= 600 ?"<strong>Parabéns! você foi aprovado na 4ª chamada.</strong>": "<strong>Não passou na 4ª chamada, aguarde uma possível 5ª chamada.</strong>"
    res4.innerHTML = `${valor4}`
}