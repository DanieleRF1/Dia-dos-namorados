function fuja(){
    var BotaoSim= document.getElementById("sim")

    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var maxX = larguraJanela - BotaoSim.offsetWidth;
    var maxY = alturaJanela - BotaoSim.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

     BotaoSim.style.left = aleatorioX + "px";
     BotaoSim.style.top = aleatorioY + "px";

    
    }


    const telaInicial = document.body.innerHTML;

function triste() {
    document.body.innerHTML = `    
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            text-align: center;
            font-family: Arial;
            background: linear-gradient(to right, #906ec4, #9b6fe8, #c78cc7);
            color: black;">
    
            <h1>💔 Tudo bem...</h1>
            <img src="https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif" width="300" height="300" alt="Coração partido">
            <p>Eu vou chorar no banho agora 😭</p>
            <br><br>

            <button id="inicio" onclick="location.href='index.html'">Início</button>
        </div>
    `;
}


