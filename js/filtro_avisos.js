
function aplicarFiltro() {
  const texto = document.getElementById('filtroTexto').value.toLowerCase();
  const inicio = document.getElementById('filtroDataInicio').value;
  const fim = document.getElementById('filtroDataFim').value;

  document.querySelectorAll('.aviso').forEach(aviso => {
    let mostrar = true;

    // Filtro por texto
    if (texto) {
      const descricao = aviso
        .querySelector('.aviso-texto')
        .innerText
        .toLowerCase();

      if (!descricao.includes(texto)) {
        mostrar = false;
      }
    }

    // Filtro por data
    const dataAviso = aviso.dataset.data;

    if (inicio && dataAviso < inicio) {
      mostrar = false;
    }

    if (fim && dataAviso > fim) {
      mostrar = false;
    }

    aviso.style.display = mostrar ? '' : 'none';
  });
}

function limparFiltro() {
  document.getElementById('filtroTexto').value = '';
  document.getElementById('filtroDataInicio').value = '';
  document.getElementById('filtroDataFim').value = '';

  document.querySelectorAll('.aviso').forEach(aviso => {
    aviso.style.display = '';
  });
}

