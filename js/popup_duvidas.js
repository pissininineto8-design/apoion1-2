// popup_duvidas.js

document.addEventListener("DOMContentLoaded", function () {

    // Cria o popup
    const popup = document.createElement("div");
    popup.id = "popup-ajuda";

    popup.innerHTML = `
        <div class="popup-conteudo">
            <span class="popup-titulo">Precisa de ajuda?</span>
            <p>Consulte os Assistentes de IA.</p>

            <a href="https://chatgpt.com/g/g-6a0d0d0498ac8191b6aca0f38ac0463b-assistente-de-pesquisa-de-base-de-conhecimento"
               target="_blank"
               class="popup-link">
                GPT CSTI/TRT9
            </a>

            <a href="https://ia.jt.jus.br/chat/"
               target="_blank"
               class="popup-link">
                Chat-JT
            </a>

            <button class="popup-fechar">×</button>
        </div>
    `;

    document.body.appendChild(popup);

    // Evento para fechar
    popup.querySelector(".popup-fechar").addEventListener("click", function () {
        popup.style.display = "none";
    });

});