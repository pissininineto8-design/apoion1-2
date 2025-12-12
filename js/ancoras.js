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

// Ancora 4 - informacoes_adversas
document.addEventListener("DOMContentLoaded", function () {
    const elemento = document.getElementById("informacoes_adversas");

    if (window.location.hash === "#informacoes_adversas") {
        elemento.scrollIntoView({ block: "center" });
        elemento.classList.add("destacado2");

        setTimeout(function () {
            elemento.classList.remove("destacado2");
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