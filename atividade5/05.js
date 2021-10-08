function PesoIdeal(){
    let altura = document.querySelector("#altura").value;
    let peso = (72.7*altura) - 58;
    DocumentTimeline.querySelector("#resposta").innerHTML = "Peso ideal:" + peso;
}