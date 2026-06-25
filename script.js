function darBoasVindas() {
    const titulo = document.getElementById("titulo-principal");
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("input-mensagem").value;

    if (nome === "") {
        alert("Por favor, digite seu nome!");
    } else {
        titulo.innerText = "Olá, "+ nome + "!";
        titulo.style.color = "purple";

        document.getElementById("texto-mensagem").innerText = "Sua mensagem: " + mensagem;
    }
}

function mudarCor(elemento){
    elemento.style.backgroundColor = "blue";
}

function voltarCor(elemento) {
    elemento.style.backgroundColor = "white";
}