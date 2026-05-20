// Ancora 1 - Procedimento 1
    document.addEventListener("DOMContentLoaded", function () {
            const elemento = document.getElementById("proc_1");

    if (window.location.hash === "#proc_1") {
        elemento.scrollIntoView({ block: "center" });
    elemento.classList.add("destacado");

    setTimeout(function () {
        elemento.classList.remove("destacado");
                }, 1500); // Mant�m o realce por 1 segundo e meio
            }
    });

// Ancora 2 - Procedimento 2
document.addEventListener("DOMContentLoaded", function () {
    const elemento = document.getElementById("proc_2");

    if (window.location.hash === "#proc_2") {
        elemento.scrollIntoView({ block: "center" });
        elemento.classList.add("destacado");

        setTimeout(function () {
            elemento.classList.remove("destacado");
        }, 1500); // Mant�m o realce por 1 segundo e meio
    }
});

// Ancora 3 - Procedimento 3
document.addEventListener("DOMContentLoaded", function () {
    const elemento = document.getElementById("proc_3");

    if (window.location.hash === "#proc_3") {
        elemento.scrollIntoView({ block: "center" });
        elemento.classList.add("destacado");

        setTimeout(function () {
            elemento.classList.remove("destacado");
        }, 1500); // Mant�m o realce por 1 segundo e meio
    }
});

// Ancora 5 - teste
document.addEventListener("DOMContentLoaded", function () {
    const elemento = document.getElementById("orientacao_pdpj");

    if (window.location.hash === "#orientacao_pdpj") {
        elemento.scrollIntoView({ block: "center" });
        elemento.classList.add("destacado3");

        setTimeout(function () {
            elemento.classList.remove("destacado3");
        }, 1500); // Mant�m o realce por 1 segundo e meio
    }
});

// Ancora 4 - informacoes_adversas
document.addEventListener("DOMContentLoaded", function () {

    const params = new URLSearchParams(window.location.search);
    const destino = params.get("destino");

    if (destino === "informacoes_adversas") {

        const elemento = document.getElementById("informacoes_adversas");

        if (elemento) {

            // inicia no topo
            window.scrollTo(0, 0);

            setTimeout(() => {

                elemento.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                elemento.classList.add("destacado2");

                setTimeout(() => {
                    elemento.classList.remove("destacado2");
                }, 1600);

            }, 300);
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {

    const params = new URLSearchParams(window.location.search);
    const destino = params.get("destino");

    if (!destino) return;

    const elemento = document.getElementById(destino);

    if (!elemento) return;

    // remove destaques anteriores
    elemento.classList.remove("destacado2");
    elemento.classList.remove("destacado4");

    // começa do topo
    window.scrollTo(0, 0);

    setTimeout(() => {

        elemento.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        // AQUI ficam os IFs
        if (destino === "informacoes_adversas") {
            elemento.classList.add("destacado2");
        }

        if (destino === "pje_marketplace") {
            elemento.classList.add("destacado4");
        }

        // remove depois do tempo
        setTimeout(() => {
            elemento.classList.remove("destacado2");
            elemento.classList.remove("destacado4");
        }, 1650);

    }, 400);
});