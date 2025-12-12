    $(document).ready(function () {
        function adjustElementSize() {
            if ($(window).width() < 1220) {
                // Defina as dimensões desejadas
                var customWidth = '150%'; // Largura desejada em porcentagem
                // Aplica a largura aos elementos footer e header
                $('footer, header').css({
                    'width': customWidth,
                });
            } else if ($(window).width() < 1520) {
                // Defina as dimensões desejadas
                var customWidth = '130%'; // Largura desejada em porcentagem
                // Aplica a largura aos elementos footer e header
                $('footer, header').css({
                    'width': customWidth,
                });
            } else {
                // Caso contrário, remova as dimensões aplicadas
                $('footer, header').css({
                    'width': '',
                    'height': ''
                });
            }
        }

              // Chame a função ao carregar a página
              adjustElementSize();

    // Chame a função ao redimensionar a janela
    $(window).resize(function () {
        adjustElementSize();
              });
          });
