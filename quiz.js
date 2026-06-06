let acertos = 0;
let respostaSelecionada = "";

// PERGUNTA 1

function selecionarOpcao(botao) {

    const botoes =
        botao.parentElement.querySelectorAll("button");

    botoes.forEach(btn => {
        btn.classList.remove("selecionada");
    });

    botao.classList.add("selecionada");

    respostaSelecionada = botao.innerText;
}

function validarPergunta1() {

    if (!respostaSelecionada) {
        alert("Selecione uma opção.");
        return;
    }

    if (respostaSelecionada === "Norte shopping") {
        acertos++;
    }

    document.getElementById("p1").style.display = "none";
    document.getElementById("p2").style.display = "block";
}

// PERGUNTA 2

function validarPergunta2() {

    const data =
        document.getElementById("respostaData").value;

    if (!data) {
        alert("Escolha uma data.");
        return;
    }

    if (data === "10-01-2024" || data === "2024-01-10") {
        acertos++;
    }

    document.getElementById("p2").style.display = "none";
    document.getElementById("p3").style.display = "block";
}

// PERGUNTA 3

function validarPergunta3() {

    const texto =
        document.getElementById("respostaTexto").value.trim().toLowerCase();

    if (!texto) {
        alert("Digite uma resposta.");
        return;
    }

    if (
        texto === "petrópolis" ||
        texto === "petropolis"
    ) {
        acertos++;
    }

    mostrarResultado();
}

// RESULTADO

function mostrarResultado() {

    document.querySelectorAll(".caixa").forEach(caixa => {
    caixa.style.display = "none";
});

    const resultado =
        document.getElementById("resultado");

    const texto =
        document.getElementById("textoResultado");

    resultado.style.display = "block";

    if (acertos === 3) {

        texto.innerHTML =
            `❤️ Você acertou tudo! (${acertos}/3)<br><br>
            Você conhece nossa história perfeitamente!`;

    } else if (acertos === 2) {

        texto.innerHTML =
            `🥰 Você acertou ${acertos}/3!<br><br>
            Quase perfeito!`;

    } else {

        texto.innerHTML =
            `😂 Você acertou ${acertos}/3!<br><br>
            Precisamos criar mais memórias juntas!`;
    }
}