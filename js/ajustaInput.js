function ajustaLarguraInput(input) {
    // largura mínima
    const minimo = 50;

    // cria um elemento temporário para medir o texto
    let medida = document.createElement("span");
    medida.style.visibility = "hidden";
    medida.style.position = "absolute";
    medida.style.whiteSpace = "pre";
    medida.style.font = window.getComputedStyle(input).font;

    medida.textContent = input.value || "";
    document.body.appendChild(medida);

    input.style.width = Math.max(minimo, medida.offsetWidth + 1) + "px";

    document.body.removeChild(medida);
}

for (let i = 0; i <= 300; i++) {
    let input = document.getElementById("linha" + i);
    if (input) {
        ajustaLarguraInput(input);      // ajusta inicialmente
        input.addEventListener("input", () => ajustaLarguraInput(input));  // ajusta ao digitar
    }
}
