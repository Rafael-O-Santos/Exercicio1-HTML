/*function clickMe(){
    console.log("Fui clicado!")
}

function overMe(){
    console.log("Mouse aqui!")
} 

function onFocus(){
    console.log("Focus0")
}

function Blur(){
    console.log("TO CEEEGO")
}

function Troca(){
    console.log("troca!")
}
document.querySelector('#ex').innerHTML = "<h1>Papa Pio</h1>"*/


/*function clicar(){
    document.querySelector('.quadreido').innerText = "Aracnídeos são um grupo de animais invertebrados representado pelas aranhas, escorpiões, opiliões, ácaros e carrapatos. São agrupados na classe Arachnida, pertencente ao filo Arthropoda, diferindo das outras classes de artrópodes (insetos, crustáceos e etc) por não apresentarem antenas e mandíbulas e sim quelíceras, sendo assim chamados quelicerados."
}

function passando(){
    document.querySelector('.quadreido').innerText = "As aranhas possuem até 8 pares de olhos simples, enquanto os escorpiões têm até 5 pares nas laterais do exoesqueleto, essas estruturas podem perceber movimentos."
}


function saindo(){
    document.querySelector('.quadreido').innerHTML = "<h1>Aracnídeos</h1>"
}*/



function conta(){

    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let resultado = document.getElementById("resultado").innerHTML = parseInt(n1) + parseInt(n2)
}


let paragrafo = document.createElement("p")

paragrafo.innerText = "Caneta Azul (Blue Pen) last sigma"
document.body.appendChild(paragrafo)


function minhaFuncao(){
    document.getElementById("minhaDiv").classList.add("classe1","classe2","classe3")
}

function minhaFacao(){
    document.getElementById("minhaDiv").classList.remove("classe1","classe2","classe3")
}