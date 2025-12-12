
    function lerMais1(){
      var mostrar = document.getElementById("mostrar_mais");
      var maisTexto = document.getElementById("maiss");

      if(mostrar.style.display === "none"){
        mostrar.style.display = "inline";
        maisTexto.style.display = "none";
      } else {
        mostrar.style.display = "none";
        maisTexto.style.display = "inline";
      }
    }
    function lerMais1a(){
      var mostrar = document.getElementById("mostrar_mais");

      if(mostrar.style.display === "none"){
        document.getElementById("imagem").innerHTML = "<img src='../Imagens/cima2.png' width='17' style='position: relative; top: 2px;'>";
      } else {
        document.getElementById("imagem").innerHTML = "<img src='../Imagens/baixo2.png' width='17' style='position: relative; top: 2px;'>";
     }
}

function lerMais2() {
    var mostrar = document.getElementById("mostrar_mais2");
    var maisTexto = document.getElementById("maiss2");

    if (mostrar.style.display === "none") {
        mostrar.style.display = "inline";
        maisTexto.style.display = "none";
    } else {
        mostrar.style.display = "none";
        maisTexto.style.display = "inline";
    }
}
function lerMais2a() {
    var mostrar = document.getElementById("mostrar_mais2");

    if (mostrar.style.display === "none") {
        document.getElementById("imagem2").innerHTML = "<img src='../Imagens/cima2.png' width='17' style='position: relative; top: 2px;'>";
    } else {
        document.getElementById("imagem2").innerHTML = "<img src='../Imagens/baixo2.png' width='17' style='position: relative; top: 2px;'>";
    }
}
