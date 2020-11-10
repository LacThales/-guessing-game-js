<!-- Math.random gera numeros aleatórios -->
let numcerto = Math.floor(Math.random() * 100);

function show(){
    let num = document.getElementById("num_usuario").value;
    num = parseInt(num);
    numcerto = parseInt(numcerto);

    if (num == numcerto) {
        document.getElementById("teste").innerHTML= "Show!!!";
        let teste = document.getElementById("teste");
        teste.style.setProperty("background-color", "green");
    }
    else if (num > numcerto){
        document.getElementById("teste").innerHTML= "Grande";
        let teste = document.getElementById("teste");
        teste.style.setProperty("background-color", "blue");
    }
    if (num < numcerto){
        document.getElementById("teste").innerHTML= "Pequeno";
        let teste = document.getElementById("teste");
        teste.style.setProperty("background-color", "red");
    }
}
