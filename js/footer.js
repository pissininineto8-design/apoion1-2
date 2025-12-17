const head2=document.head
const body2=document.body

const estilo2="<link rel='stylesheet' href='../css/footer.css'/>"
const filtro_links="<link rel='stylesheet' href='../css/filtro_links.css'/>"
head2.innerHTML+=estilo2

const foot=document.createElement("div")
foot.setAttribute("id","foot")
foot.setAttribute("class","foot")

body2.appendChild(foot)

document.addEventListener('DOMContentLoaded', function () {
    Filtro_Todos_links();
    leiaMais_links();
});

function Filtro_Todos_links() { /*Todos*/
    document.getElementById('pesquisa_links').value = "";
}

function leiaMais_links(){
    var mostrar_links = document.getElementById("mostrar_links");
    var maisTexto_links = document.getElementById("mais_links");
    var btnLeiaMais_links = document.getElementById("btnLeiaMais_links");

    if(mostrar_links.style.display === "none"){
        mostrar_links.style.display = "inline";

    } else {

      maisTexto.style.display = "inline";
     }
  }

const rodape=
"<footer>"+
  "<nav id='menu-h'>"+
      "<ul class='menu-h'>"+
          "<li class='menu_2'><a id='a_menu_2' href='../index.html'>Início</a></li>"+
          "<li class='menu_3'><a id='a_menu_3' href='redirecionamento.html'>Redirecionamento</a></li>"+
      "</ul>"+
  "</nav>"+
  "<article id='article-footer'>"+
  "<div class='rodape'>"+
  "<div id='division_1' style='background-color:rgb(37, 37, 39)'>"+
       "<table id='tb_footer'>"+
         "<tr><td colspan='2' style='color:WHITE; border: none;'> <font size='4' style='font-family: Courier New, monospace;'><b>Ramais de Unidades</b></font> </td></tr>"+
         "<tr><td style='color:WHITE; border: none;'> <b style='font-family: Courier New, monospace;'>RH do TRT9:</b> </td><td style='color:WHITE; border: none;'> <a href='tel:+554133107388'>7388</a> </td></tr>" +
         "<tr><td style='color:WHITE; border: none;'> <b style='font-family: Courier New, monospace;'>Setor Malote:</b> </td><td style='color:WHITE; border: none;'> <a href='tel:+554133107099'>7099</a> </td></tr>" +
         "<tr><td style='color:WHITE; border: none;'> <b style='font-family: Courier New, monospace;'>Setor Transporte:</b> </td><td style='color:WHITE; border: none;'> <a href='tel:+554133107081'>7081</a> </td></tr>" +  
       "</table>"+
       "<br><p><a id='a_contatos_footer' style='font - family: Lucida Bright' href='ramais.html'>Mais contatos...</a></b> </p>" +
    "</div>" +
"<div id='division_2' class='bannern1'>"+
"<a href='paginan1.html'><img id='boxa1' style='border-radius: 5px; border-style: solid;' src='../Imagens/apoion1.png' alt='N1' title='Acessar a P gina de Orienta  es N1' width='160' height='100'></a>"+
"<a href='paginan2.html'><img id='boxa2' style='border-radius: 5px; border-style: solid;' src='../Imagens/apoion2.png' alt='N2' title='Acessar a P gina de Orienta  es N2' width='160' height='100'></a>"+
"</div>" +
    "</div>"+

"<div style='padding-left: 25px;'><font> <input type='search' id='pesquisa_links' placeholder='Digite para buscar...' oninput='limpar_links()' style='width: 200px;'> </font> "+
"<button type='button' id='botao1' onclick='filtrar_links(), leiaMais_links()'>Filtrar</button> </div>"+

"</div><br>"+

"<div id='div_filtro' align='center'>"+

"<div align='center' id='div_filtro'>"+

    "<ul>"+
        "<div align='center' id='lista_filtro_links'>"+
            "<span id='mostrar_links'></span><span id='mais_links'>"+
"<div style='max-width: 1765px; width: 100%; margin: 0 auto; text-align: left; padding-top: 30px;>"+
"<div id='div-painel'><br>"+
    "<div class='container'><p id='scroll_links'></p>"+
           "<ul class='links'>"+
                "<li align='left'><h4 style='color: white;'>Atalhos do Power BI</h4><br>"+
                "<!-- Chamados Encerrados no Mês, Chamados Estourados, Indicadores CSTI, Power BI - Painel Geral, Relatório de Procedimentos, Relatório de NCTs, Relatórios TIC SCAM, Uso das Impressoras " +
                "https://powerbi.trt9.jus.br/paineis/powerbi/TIC/SRINC/Gerenciamento%20de%20Incidentes%20e%20Requisi%C3%A7%C3%B5es/Incidentes%20e%20Requisi%C3%A7%C3%B5es%20-%20Relat%C3%B3rio%20Geral, " +
                "https://powerbi.trt9.jus.br/paineis/powerbi/TIC/SRINC/Gerenciamento%20de%20Incidentes%20e%20Requisi%C3%A7%C3%B5es/Indicadores%20Contrato%20Central%20de%20Servi%C3%A7os, " +
                "https://powerbi.trt9.jus.br/paineis/powerbi/TIC/SCAM/Painel%20Geral, " +
                "https://powerbi.trt9.jus.br/paineis/powerbi/TIC/SRINC/Gerenciamento%20de%20Incidentes%20e%20Requisi%C3%A7%C3%B5es/Procedimentos%20Mais%20Utilizados, " +
                "https://powerbi.trt9.jus.br/paineis/powerbi/TIC/SRINC/Gerenciamento%20de%20Incidentes%20e%20Requisi%C3%A7%C3%B5es/NCTs%20-%20N%C3%A3o-Conformidades%20T%C3%A9cnicas%20-%20Contrato%202023, " +
                "https://powerbi.trt9.jus.br/paineis/browse/TIC/SCAM, https://powerbi.trt9.jus.br/paineis/powerbi/TIC/SCAM/Uso%20das%20impressoras " +
                "Chamados Encerrados no Mes, Relatorio de Procedimentos, Relatorio de NCTs, Relatorios TIC SCAM --></li>" +
                "<li><a href='https://powerbi.trt9.jus.br/paineis/powerbi/TIC/SRINC/Gerenciamento%20de%20Incidentes%20e%20Requisi%C3%A7%C3%B5es/Incidentes%20e%20Requisi%C3%A7%C3%B5es%20-%20Relat%C3%B3rio%20Geral' target='_blank'> <button id='botao_links'>Chamados Encerrados no Mês</button></a><!-- Atalhos do Power BI --></li> " +
                "<li><a href='https://powerbi.trt9.jus.br/paineis/powerbi/TIC/SRINC/Gerenciamento%20de%20Incidentes%20e%20Requisi%C3%A7%C3%B5es/Indicadores%20Contrato%20Central%20de%20Servi%C3%A7os' target='_blank'> <button id='botao_links'>Indicadores CSTI</button></a><!-- Chamados Estourados, Atalhos do Power BI --></li>" +
                "<li><a href='https://powerbi.trt9.jus.br/paineis/powerbi/TIC/SCAM/Painel%20Geral' target='_blank'> <button id='botao_links'>Power BI - Painel Geral</button></a><!-- Atalhos do Power BI --></li>" +
                "<li><a href='https://powerbi.trt9.jus.br/paineis/powerbi/TIC/SRINC/Gerenciamento%20de%20Incidentes%20e%20Requisi%C3%A7%C3%B5es/Procedimentos%20Mais%20Utilizados' target='_blank'> <button id='botao_links'>Relatório de Procedimentos</button></a><!-- Atalhos do Power BI --></li>" +
                "<li><a href='https://powerbi.trt9.jus.br/paineis/powerbi/TIC/SRINC/Gerenciamento%20de%20Incidentes%20e%20Requisi%C3%A7%C3%B5es/NCTs%20-%20N%C3%A3o-Conformidades%20T%C3%A9cnicas%20-%20Contrato%202023' target='_blank'> <button id='botao_links'>Relatório de NCTs</button></a><!-- Atalhos do Power BI --></li>" +
                "<li><a href='https://powerbi.trt9.jus.br/paineis/browse/TIC/SCAM' target='_blank'> <button id='botao_links'>Relatórios TIC SCAM</button></a><!-- Atalhos do Power BI --></li>" +
                "<li><a href='https://powerbi.trt9.jus.br/paineis/powerbi/TIC/SCAM/Uso%20das%20impressoras' target='_blank'> <button id='botao_links'>Uso das Impressoras</button></a><!-- Atalhos do Power BI --></li>" +
            "</ul>"+
            "<ul class='links'>"+
                "<li align='left'><h4 style='color: white;'>Atalhos Intranet</h4><br>"+
                "<!-- Acesso à Página Inicial, Intranet - Gestão de Conteúdo, Intranet - Cadastrar Certificado, Intranet - Organograma e Força de Trabalho, Intranet - Reset de Senha, Intranet - Solicitação de Serviços, Intranet - Suspensão de Tarefas, https://intranet.trt9.jus.br/intranet2/r/portal/portal/home?session=113483601715184, " +
                "https://intranet.trt9.jus.br/intranet2/f?p=10182:3:213499140943259:::::, https://intranet.trt9.jus.br/intranet2/f?p=310:241:208458832739199:::::, https://reset.trt9.jus.br/reset/ChangePwd.aspx, " +
                "https://intranet.trt9.jus.br/intranet2/f?p=320:46:205023667485201:::::, https://intranet.trt9.jus.br/intranet2/f?p=225:3:114557457373157::NO:RP,3::&success_msg=KHIxMzUyNzYpIFJlbPNnaW8gZG8gY2hhbWFkbyBpbnRlcnJvbXBpZG8u%2F4x1inziEFooOJhUhp_7eCJWwL4dgLpeFfYzkTZxzNSpTiCdlZeiSY0InTcXukF0sJ-okT0x6CzKF0JHX6YfFZg, " +
                "https://intranet.trt9.jus.br/intranet2/f?p=205:493:328776056735788::::P493_UNIDADE:2559 " +
                " -->"+
                "<li><a href='https://intranet.trt9.jus.br/intranet2/r/portal/portal/home?session=113483601715184' target='_blank'> <button id='botao_links'>Acesso à Página Inicial</button></a><!-- Atalhos Intranet --></li>"+
                "<li><a href='https://intranet.trt9.jus.br/intranet2/f?p=10182:3:213499140943259:::::' target='_blank'> <button id='botao_links'>Cadastrar Certificado</button></a><!-- Atalhos Intranet --></li>"+
                "<li><a href='https://intranet.trt9.jus.br/intranet2/f?p=310:241:208458832739199:::::' target='_blank'> <button id='botao_links'>Gest&#227;o de Conte&#250;do</button></a><!-- Atalhos Intranet --></li>"+
                "<li><a href='https://intranet.trt9.jus.br/intranet2/f?p=205:493:328776056735788::::P493_UNIDADE:2559' target='_blank'> <button id='botao_links'>Organograma e For&ccedil;a de Trabalho</button></a><!-- Atalhos Intranet --></li>"+
                "<li><a href='https://reset.trt9.jus.br/reset/ChangePwd.aspx' target='_blank'> <button id='botao_links'>Reset de Senha</button></a><!-- Atalhos Intranet --></li>"+
                "<li><a href='https://intranet.trt9.jus.br/intranet2/f?p=320:46:205023667485201:::::' target='_blank'> <button id='botao_links'>Solicita&ccedil;&atilde;o de Servi&ccedil;os</button></a><!-- Atalhos Intranet --></li>"+
                "<li><a href='https://intranet.trt9.jus.br/intranet2/f?p=225:3:114557457373157::NO:RP,3::&success_msg=KHIxMzUyNzYpIFJlbPNnaW8gZG8gY2hhbWFkbyBpbnRlcnJvbXBpZG8u%2F4x1inziEFooOJhUhp_7eCJWwL4dgLpeFfYzkTZxzNSpTiCdlZeiSY0InTcXukF0sJ-okT0x6CzKF0JHX6YfFZg' target='_blank'> <button id='botao_links'>Suspens&atilde;o de Tarefas</button></a><!-- Atalhos Intranet --></li>"+
            "</ul>"+
            "<ul class='links'>"+
                "<li align='left'><h4 style='color: white;'>Atalhos Site TRT9</h4><br>"+
                "<!-- Atos e Portarias, Balcão Virtual, Central de Serviços de TI, Certidões de Indisponibilidade, Códigos das Varas do Trabalho, Codigos das Varas do Trabalho, Pauta Eletrônica, Pauta de Sessões, Portal Transparência, PJe Orientações Gerais, Site do TRT9, Últimas Notícias, " +
                "Unidades do TRT9 --><!-- Central de Servicos de TI, Certidão, Certidao, Certidoes de Indisponibilidade, Pauta Eletronica, Pauta de Sessoes, Transparencia, PJe Orientaçoes Gerais, Ultimas Noticias " +
                "https://www.trt9.jus.br/institucional/atoPortaria.xhtml, https://www.trt9.jus.br/portal/centralServicosTI.xhtml, https://www.trt9.jus.br/portal/paginaDownload.xhtml?id=1261, https://www.trt9.jus.br/basesjuridicas/codigoVara.xhtml" +
                "https://www.trt9.jus.br/pautaeletronica/, https://www.trt9.jus.br/pautaeletronica/pautaAudiencia.xhtml, https://www.trt9.jus.br/pautaeletronica/pautaSessao.xhtml, " +
                "https://www.trt9.jus.br/pesquisaprocessual/pesquisaNumeracaoCNJ.xhtml, https://www.trt9.jus.br/portal/pagina.xhtml?secao=39&pagina=Pje, https://www.trt9.jus.br/transparencia/ " +
                "https://www.trt9.jus.br/portal/, https://www.trt9.jus.br/portal/noticias.xhtml, https://www.trt9.jus.br/portal/contato.xhtml, https://www.trt9.jus.br/portal/balcaoVirtual.xhtml --></li>"+
                "<li><a href='https://www.trt9.jus.br/institucional/atoPortaria.xhtml' target='_blank'> <button id='botao_links'>Atos e Portarias</button></a><!-- Atalhos Site TRT9 --></li>" +
                "<li><a href='https://www.trt9.jus.br/portal/balcaoVirtual.xhtml' target='_blank'> <button id='botao_links'>Balcão Virtual</button></a><!-- Atalhos Site TRT9 --></li>" +
                "<li><a href='https://www.trt9.jus.br/portal/centralServicosTI.xhtml' target='_blank'> <button id='botao_links'>Central de Servi&ccedil;os de TI</button></a><!-- Atalhos Site TRT9 --></li>" +
                "<li><a href='https://www.trt9.jus.br/portal/paginaDownload.xhtml?id=1261' target='_blank'> <button id='botao_links'>Certid&otilde;es de Indisponibilidade</button></a><!-- Atalhos Site TRT9 --><!-- Certidão, Certidao --></li>" +
                "<li><a href='https://www.trt9.jus.br/basesjuridicas/codigoVara.xhtml' target='_blank'> <button id='botao_links'>C&oacute;digos das Varas do Trabalho</button></a><!-- Atalhos Site TRT9 --></li>" +
                "<li><a href='https://www.trt9.jus.br/pautaeletronica/' target='_blank'> <button id='botao_links'>Pauta Eletr&ocirc;nica</button></a><!-- Atalhos Site TRT9 --></li>" +
                "<li><a href='https://www.trt9.jus.br/pautaeletronica/pautaAudiencia.xhtml' target='_blank'> <button id='botao_links'>Pauta de Audi&ecirc;ncias</button></a><!-- Atalhos Site TRT9 --></li>" +
                "<li><a href='https://www.trt9.jus.br/pautaeletronica/pautaSessao.xhtml' target='_blank'> <button id='botao_links'>Pauta de Sess&otilde;es</button></a><!-- Atalhos Site TRT9 --></li>" +
                "<li><a href='https://www.trt9.jus.br/pesquisaprocessual/pesquisaNumeracaoCNJ.xhtml' target='_blank'> <button id='botao_links'>Pesquisa Processual</button></a><!-- Atalhos Site TRT9 --></li>" +
                "<li><a href='https://www.trt9.jus.br/portal/pagina.xhtml?secao=39&pagina=Pje' target='_blank'> <button id='botao_links'>PJe Orienta&ccedil;&otilde;es Gerais</button></a><!-- Atalhos Site TRT9 --></li>" +
                "<li><a href='https://www.trt9.jus.br/transparencia/' target='_blank'> <button id='botao_links'>Portal Transpar&#234;ncia</button></a><!-- Atalhos Site TRT9 --><!-- Transparencia --></li>" +
                "<li><a href='https://www.trt9.jus.br/portal/' target='_blank'> <button id='botao_links'>Site do TRT9</button></a><!-- Atalhos Site TRT9 --></li>" +
                "<li><a href='https://www.trt9.jus.br/portal/noticias.xhtml' target='_blank'> <button id='botao_links'>&Uacute;ltimas Not&iacute;cias</button></a><!-- Atalhos Site TRT9 --></li>" +
                "<li><a href='https://www.trt9.jus.br/portal/contato.xhtml' target='_blank'> <button id='botao_links'>Unidades do TRT9</button></a><!-- Atalhos Site TRT9 --></li>"+
            "</ul>"+
            "<ul class='links'>"+
                "<li><h4 style='color: white;'>Consulta de Lota&ccedil;&otilde;es</h4><br>"+
                "<!-- Agenda Magistrados, COMPOSIÇÃO, Consulta Assessores, Consulta Diretores, Consulta Peritos, Juízes Substitutos, Juízes Titulares, Lotações Intranet, Magistrado e Servidores " +
                "https://www.trt9.jus.br/portal/pagina.xhtml?secao=90&pagina=AGENDAS, https://www.trt9.jus.br/portal/pagina.xhtml?secao=13&pagina=Inicial#composicao, https://www.trt9.jus.br/portal/contato.xhtml, " +
                "https://www.trt9.jus.br/portal/contato.xhtml, https://aj.sigeo.jt.jus.br/aj2/internetaberto/profissionais.jsf, https://aj.sigeo.jt.jus.br/aj2/internetaberto/profissionais.jsf, https://www.trt9.jus.br/portal/paginaDownload.xhtml?id=127, " +
                "https://www.trt9.jus.br/portal/pagina.xhtml?secao=5&pagina=JU ZES VARA, https://intranet.trt9.jus.br/intranet2/f?p=290:56:209305340816950::NO:RP::, https://intranet.trt9.jus.br/intranet2/f?p=290:364:224667778057030::::: " +
                "COMPOSIÇAO, Juizes Substitutos, Juizes Titulares, Lotaçoes Intranet, Força de Trabalho (Organograma), Consulta Cargo de Servidor --></li>"+
                "<li><a href='https://www.trt9.jus.br/portal/pagina.xhtml?secao=90&pagina=AGENDAS' target='_blank'> <button id='botao_links'>Agenda Magistrados</button></a><!-- Consulta de Lotações --></li>"+
                "<li><a href='https://www.trt9.jus.br/portal/pagina.xhtml?secao=13&pagina=Inicial#composicao' target='_blank'> <button id='botao_links'>COMPOSI&Ccedil;&Atilde;O</button></a><!-- Consulta de Lotações --></li>"+
                "<li><a href='https://www.trt9.jus.br/portal/contato.xhtml' target='_blank'> <button id='botao_links'>Consulta Assessores</button></a><!-- Consulta de Lotações --></li>"+
                "<li><a href='https://www.trt9.jus.br/portal/contato.xhtml' target='_blank'> <button id='botao_links'>Consulta Diretores</button></a><!-- Consulta de Lotações --></li>"+
                "<li><a href='https://aj.sigeo.jt.jus.br/aj2/internetaberto/profissionais.jsf' target='_blank'> <button id='botao_links'>Consulta Peritos</button></a><!-- Consulta de Lotações --></li>"+
                "<li><a href='https://intranet.trt9.jus.br/intranet2/f?p=205:493:103155242795616:::::' target='_blank'> <button id='botao_links'>Força de Trabalho (Organograma)</button></a><!-- Consulta de Lotações, Consulta Cargo de Servidor --></li>"+
                "<li><a href='https://www.trt9.jus.br/portal/paginaDownload.xhtml?id=127' target='_blank'> <button id='botao_links'>Ju&iacute;zes Substitutos</button></a><!-- Consulta de Lotações --></li>"+
                "<li><a href='https://www.trt9.jus.br/portal/pagina.xhtml?secao=5&pagina=JU ZES VARA' target='_blank'> <button id='botao_links'>Ju&iacute;zes Titulares</button></a><!-- Consulta de Lotações --></li>"+
                "<li><a href='https://intranet.trt9.jus.br/intranet2/f?p=290:56:209305340816950::NO:RP::' target='_blank'> <button id='botao_links'>Lota&ccedil;&otilde;es Intranet</button></a><!-- Consulta de Lotações --></li>"+
                "<li><a href='https://intranet.trt9.jus.br/intranet2/f?p=290:364:224667778057030:::::' target='_blank'> <button id='botao_links'>Magistrado e Servidores</button></a><!-- Consulta de Lotações --></li>"+
            "</ul>"+
            "<ul class='links'>"+
                "<li align='left'><h4 style='color: white;'>Consulta de Patrim&ocirc;nio</h4><br>"+
                "<!-- CMDB, Equipamentos de Uso Pessoal, Histórico Mov. Bens, Painel por Localidade - SGAM, Respons. SMP por Equipamento, Respons. SMP por Local, SMP, Historico Mov. Bens, https://intranet.trt9.jus.br/intranet2/f?p=154:247:301403476648644:::::, " +
                "https://intranet.trt9.jus.br/intranet2/f?p=256:278:116959555235216::NO:::, https://intranet.trt9.jus.br/intranet2/f?p=154:43:102321844693829:::::, https://intranet.trt9.jus.br/intranet2/f?p=256:256:105505502901612::NO:::, " +
                "https://intranet.trt9.jus.br/intranet2/f?p=154:99:109207315382771:::::, https://intranet.trt9.jus.br/intranet2/f?p=154:36:211941909170167::NO:::, https://intranet.trt9.jus.br/intranet2/f?p=154:39:229092244894181:::::, --></li>"+
                "<li><a href='https://intranet.trt9.jus.br/intranet2/f?p=154:247:301403476648644:::::' target='_blank'> <button id='botao_links'>CMDB</button></a><!-- Consulta de Patrimônio --></li>"+
                "<li><a href='https://intranet.trt9.jus.br/intranet2/f?p=256:278:116959555235216::NO:::' target='_blank'> <button id='botao_links'>Equipamentos de Uso Pessoal</button></a><!-- Consulta de Patrimônio --></li>"+
                "<li><a href='https://intranet.trt9.jus.br/intranet2/f?p=154:43:102321844693829:::::' target='_blank'> <button id='botao_links'>Hist&oacute;rico Mov. Bens</button></a><!-- Consulta de Patrimônio --></li>"+
                "<li><a href='https://intranet.trt9.jus.br/intranet2/f?p=256:256:105505502901612::NO:::' target='_blank'> <button id='botao_links'>Painel por Localidade - SGAM</button></a><!-- Consulta de Patrimônio --></li>"+
                "<li><a href='https://intranet.trt9.jus.br/intranet2/f?p=154:99:109207315382771:::::' target='_blank'> <button id='botao_links'>Respons. SMP por Equipamento</button></a><!-- Consulta de Patrimônio --></li>"+
                "<li><a href='https://intranet.trt9.jus.br/intranet2/f?p=154:36:211941909170167::NO:::' target='_blank'> <button id='botao_links'>Respons. SMP por Local</button></a><!-- Consulta de Patrimônio --></li>"+
                "<li><a href='https://intranet.trt9.jus.br/intranet2/f?p=154:39:229092244894181:::::' target='_blank'> <button id='botao_links'>SMP</button></a><!-- Consulta de Patrimônio --></li>"+
            "</ul>"+
    "</div>" +
    "<br><br>" +
    "<div class='container'>" +
    "<ul class='links'>"+
    "<li><h4 style='color: white;'>Consultas Externas</h4><br>"+
    "<!-- CNA OAB, https://cna.oab.org.br/ --></li>" +
    "<li><a href='https://cna.oab.org.br/' target='_blank'> <button id='botao_links'>CNA OAB</button></a><!-- Consultas Externas --></li>" +
"</ul>"+
"<ul class='links'>"+
    "<li><h4 style='color: white;'>Contatos</h4><br>"+
    "<!-- Contatos de Unidades, Contatos Plantão Judiciário, Ramais de Servidores, Ramais de Unidades, Telefones/Ramais --><!-- Contatos Plantao Judiciario, https://www.trt9.jus.br/portal/contato.xhtml, " +
    "https://www.trt9.jus.br/portal/destaques.xhtml?id=6708474, https://intranet.trt9.jus.br/intranet2/f?p=10285:5:103945340938118:::::, https://intranet.trt9.jus.br/intranet2/f?p=10285:4:132660461895922:::::, " +
    "https://intranet.trt9.jus.br/intranet2/f?p=285:379:201032167868197::NO::: --></li>"+
    "<li><a href='https://www.trt9.jus.br/portal/contato.xhtml' target='_blank'> <button id='botao_links'>Contatos de Unidades</button></a><!-- Contatos --></li>"+
    "<li><a href='https://www.trt9.jus.br/portal/destaques.xhtml?id=6708474' target='_blank'> <button id='botao_links'>Contatos Plant&atilde;o Judici&aacute;rio</button></a><!-- Contatos --></li>"+
    "<li><a href='https://intranet.trt9.jus.br/intranet2/f?p=10285:5:103945340938118:::::' target='_blank'> <button id='botao_links'>Ramais de Servidores</button></a><!-- Contatos --></li>"+
    "<li><a href='https://intranet.trt9.jus.br/intranet2/f?p=10285:4:132660461895922:::::' target='_blank'> <button id='botao_links'>Ramais de Unidades</button></a><!-- Contatos --></li>"+
    "<li><a href='https://intranet.trt9.jus.br/intranet2/f?p=285:379:201032167868197::NO:::' target='_blank'> <button id='botao_links'>Telefones/Ramais</button></a><!-- Contatos --></li>"+
"</ul>"+ 
             "<ul class='links'>"+
    "<li><h4 style='color: white;'>Garantias de Equipamentos</h4><br>"+
    "<!-- Garantia DATEN, Garantia DELL, Garantia HP e AOC, Garantia LENOVO M80Q, Garantia LENOVO M920Q, Garantia LEXMARK, Garantia POSITIVO, Garantia SAMSUNG " +
    "http://www.daten.com.br/abertura-chamado.php, https://www.dell.com/support/, https://chamados.grupotorino.com.br/#login, https://www.lidernotebooks.com.br/suporte, " +
    "https://support.lenovo.com/br/pt/account/myproducts, https://portal.tecnoset.com.br/#/user/login, http://positivo.assistonline.com.br/bin/cliente/index.php, https://microsens.webassist.com.br/index.php --></li>"+
    "<li><a href='http://www.daten.com.br/abertura-chamado.php' target='_blank'> <button id='botao_links'>Garantia DATEN</button></a><!-- Garantias de Equipamentos --></li>"+
    "<li><a href='https://www.dell.com/support/' target='_blank'> <button id='botao_links'>Garantia DELL</button></a><!-- Garantias de Equipamentos --></li>"+
    "<li><a href='https://chamados.grupotorino.com.br/#login' target='_blank'> <button id='botao_links'>Garantia HP e AOC</button></a><!-- Garantias de Equipamentos --></li>"+
    "<li><a href='https://www.lidernotebooks.com.br/suporte' target='_blank'> <button id='botao_links'>Garantia LENOVO M80Q</button></a><!-- Garantias de Equipamentos --></li>"+
    "<li><a href='https://support.lenovo.com/br/pt/account/myproducts' target='_blank'> <button id='botao_links'>Garantia LENOVO M920Q</button></a><!-- Garantias de Equipamentos --></li>"+
    "<li><a href='https://portal.tecnoset.com.br/#/user/login' target='_blank'> <button id='botao_links'>Garantia LEXMARK</button></a><!-- Garantias de Equipamentos --></li>"+
    "<li><a href='http://positivo.assistonline.com.br/bin/cliente/index.php' target='_blank'> <button id='botao_links'>Garantia POSITIVO</button></a><!-- Garantias de Equipamentos --></li>"+
    "<li><a href='https://microsens.webassist.com.br/index.php' target='_blank'> <button id='botao_links'>Garantia SAMSUNG</button></a><!-- Garantias de Equipamentos --></li>"+  
            "</ul>"+
            "<ul class='links'>"+
                 "<li><h4 style='color: white;'>Manuais</h4><br>"+
                 "<!-- Manual do Acervo Digital, Manual do AUD4, Manual do PJe - Advogado, Manual do PJe - Oficial de Justiça, Manual do PJe - Perito, Manual do PJe - 1º Grau, Manual do PJe - 2º Grau, " +
                 "Manual do PJe - Oficial de Justiça, Manual do PJe - 1 Grau, Manual do PJe - 2 Grau, , Manual do PJe - Chips, https://pje.csjt.jus.br/manual/index.php/Acervo_Digital, https://pje.csjt.jus.br/manual/index.php/AUD_4.0, " +
                 "https://pje.csjt.jus.br/manual/index.php/Manual_Advogado, https://pje.csjt.jus.br/manual/index.php/PJe_2.0_-_Central_de_Mandados_-_Oficial_de_Justi%C3%A7a, https://pje.csjt.jus.br/manual/index.php/Manual_do_perito_-_Perfil:perito, " +
                 "https://pje.csjt.jus.br/manual/index.php/PJe_2.0_-_1%C2%BA_Grau, https://pje.csjt.jus.br/manual/index.php/PJe_2.0_-_2%C2%BA_Grau, https://pje.csjt.jus.br/manual/index.php/Chips --></li>"+
                 "<li><a href='https://pje.csjt.jus.br/manual/index.php/Acervo_Digital' target='_blank'> <button id='botao_links'>Manual do Acervo Digital</button></a><!-- Manuais --></li>" +
                 "<li><a href='https://pje.csjt.jus.br/manual/index.php/AUD_4.0' target='_blank'> <button id='botao_links'>Manual do AUD4</button></a><!-- Manuais --></li>" +
                 "<li><a href='https://pje.csjt.jus.br/manual/index.php/Manual_Advogado' target='_blank'> <button id='botao_links'>Manual do PJe - Advogado</button></a></li></li>" +
                 "<li><a href='https://pje.csjt.jus.br/manual/index.php/Chips' target='_blank'> <button id='botao_links'>Manual do PJe - Chips</button></a></li></li>" +
                 "<li><a href='https://pje.csjt.jus.br/manual/index.php/PJe_2.0_-_Central_de_Mandados_-_Oficial_de_Justi%C3%A7a' target='_blank'> <button id='botao_links'>Manual do PJe - Oficial de Justi&ccedil;a</button></a><!-- Manuais --></li>" +
                 "<li><a href='https://pje.csjt.jus.br/manual/index.php/Manual_do_perito_-_Perfil:perito' target='_blank'> <button id='botao_links'>Manual do PJe - Perito</button></a><!-- Manuais --></li>" + 
                 "<li><a href='https://pje.csjt.jus.br/manual/index.php/PJe_2.0_-_1%C2%BA_Grau' target='_blank'> <button id='botao_links'>Manual do PJe - 1&#186; Grau</button></a><!-- Manuais --></li>" +
                 "<li><a href='https://pje.csjt.jus.br/manual/index.php/PJe_2.0_-_2%C2%BA_Grau' target='_blank'> <button id='botao_links'>Manual do PJe - 2&#186; Grau</button></a><!-- Manuais --></li>" + 
            "</ul>"+ 
            "<ul class='links'>"+
                 "<li><h4 style='color: white;'>RH - CSTI</h4><br>"+
                 "<!-- Autentique, Documentos Digitalizados, Feriados TRT9, For Time Ponto, https://painel.autentique.com.br/entrar, https://drive.google.com/drive/u/0/folders/1U8ZfFoLD5y89qPUTdT7JMlt_yrZskFgE, " +
                 "https://www.trt9.jus.br/institucional/calendario.xhtml, https://go.fortime.com.br/login --></li>" +
                 "<li><a href='https://painel.autentique.com.br/entrar' target='_blank'> <button id='botao_links'>Autentique</button></a><!-- RH - CSTI --></li>" +
                 "<li><a href='https://drive.google.com/drive/u/0/folders/1U8ZfFoLD5y89qPUTdT7JMlt_yrZskFgE' target='_blank'> <button id='botao_links'>Documentos Digitalizados</button></a><!-- RH - CSTI --></li>" +
                 "<li><a href='https://www.trt9.jus.br/institucional/calendario.xhtml' target='_blank'> <button id='botao_links'>Feriados TRT9</button></a><!-- RH - CSTI --></li>" +
                 "<li><a href='https://go.fortime.com.br/login' target='_blank'> <button id='botao_links'>For Time Ponto</button></a><!-- RH - CSTI --></li>" +
            "</ul>"+
            "</div><br>" +
    "<br>" +
    "<div class='container'>" +
    "<ul class='links'>"+
                 "<li align='left'><h4 style='color: white;'>Sistemas</h4><br>"+
                 "<!-- Assyst NET (Usuários Externos), Assyst NET (Usuários Internos), Citrix Portal Remoto, Citrix Workspace, Gertoken, PJe, PJe Mídias CNJ, PJe Mídias TRT9 -->" +
                 "<!-- Assyst NET (Usuarios Externos), Assyst NET (Usuarios Internos), PJe Mídias TRT9, Pje Midias TRT9, Vetor, MFA VPN TRT9, M&#237;dias JT, Midias JT, CNJ - Corporativo (SCA) https://suporteti.trt9.jus.br/assystnet/#signup, " +
                 "https://csti.trt9.jus.br/assystnet, https://remoto.trt9.jus.br/vpn/index.html, https://teletrabalhonovo.trt9.jus.br/Citrix/storeWeb/, https://web01/gertoken/, https://mfa.trt9.jus.br/ " +
                 "https://pje.trt9.jus.br/trt/, https://www.trt9.jus.br/pjemidias/web/site/login, https://www.trt9.jus.br/vetor, https://corporativo.cnj.jus.br/, https://midias.jt.jus.br --></li>" +
                 "<li><a href='https://suporteti.trt9.jus.br/assystnet/#signup' target='_blank'> <button id='botao_links'>Assyst NET (Usu&aacute;rios Externos)</button></a><!-- Sistemas --></li>" +
                 "<li><a href='https://csti.trt9.jus.br/assystnet' target='_blank'> <button id='botao_links'>Assyst NET (Usu&aacute;rios Internos)</button></a><!-- Sistemas --></li>" +
                 "<li><a href='https://remoto.trt9.jus.br/vpn/index.html' target='_blank'> <button id='botao_links'>Citrix Portal Remoto</button></a><!-- Sistemas --></li>" +
                 "<li><a href='https://teletrabalhonovo.trt9.jus.br/Citrix/storeWeb/' target='_blank'> <button id='botao_links'>Citrix Workspace</button></a><!-- Sistemas --></li>" +
                 "<li><a href='https://corporativo.cnj.jus.br/' target='_blank'> <button id='botao_links'>CNJ - Corporativo (SCA)</button></a><!-- Sistemas --></li>" +
                 "<li><a href='https://web01/gertoken/' target='_blank'> <button id='botao_links'>Gertoken</button></a><!-- Sistemas --></li>" +
                 "<li><a href='https://mfa.trt9.jus.br/' target='_blank'> <button id='botao_links'>MFA VPN TRT9</button></a><!-- Sistemas --></li>" +
                 "<li><a href='https://midias.jt.jus.br' target='_blank'> <button id='botao_links'>M&#237;dias JT</button></a><!-- Midias JT--><!-- Sistemas --></li>" +
                 "<li><a href='https://pje.trt9.jus.br/trt/' target='_blank'> <button id='botao_links'>PJe</button></a><!-- Sistemas --></li>" +
                 "<li><a href='https://www.trt9.jus.br/pjemidias/web/site/login' target='_blank'> <button id='botao_links'>PJe M&iacute;dias TRT9</button></a><!-- Sistemas, PJe Midias TRT9 --></li>"+
                 "<li><a href='https://www.trt9.jus.br/vetor' target='_blank'> <button id='botao_links'>Vetor</button></a><!-- Sistemas --></li>"+
            "</ul>"+
                 "<ul class='links'>"+
                 "<li><h4 style='color: white;'>Sistemas Externos</h4><br>"+
                 "<!-- DJEN, Falcão, Falcao, GPrec, Malote Digital, PJe Mídias CNJ, PJe Midias CNJ, Portal do SIGEO, PROAD, SIGEO AJ-JT (Consulta de Perito), SIJU, SISCONDJ-TJ, " +
                 "https://comunica.pje.jus.br/, https://jurisprudencia.jt.jus.br/jurisprudencia-nacional/home, https://pje.trt9.jus.br/gprec, https://malotedigital.jt.jus.br/malotedigital/login.jsf, " +
                 "https://midias.pje.jus.br/midias/web/site/login, https://portal.sigeo.jt.jus.br/, https://www.trt9.jus.br/proad, https://aj.sigeo.jt.jus.br/aj2/internetaberto/profissionais.jsf, https://www.trt9.jus.br/siju/autosdigitais/index.xhtml, " + 
                 "https://www.trt9.jus.br/siscondjtrtpr/login.jsp --></li>"+
                 "<li><a href='https://comunica.pje.jus.br/' target='_blank'> <button id='botao_links'>DJEN</button></a><!-- Sistemas Externos --></li>" +
                 "<li><a href='https://jurisprudencia.jt.jus.br/jurisprudencia-nacional/home' target='_blank'> <button id='botao_links'>Falc&atilde;o</button></a><!-- Sistemas Externos, Falcao --></li>" +
                 "<li><a href='https://pje.trt9.jus.br/gprec' target='_blank'> <button id='botao_links'>GPrec</button></a><!-- Sistemas Externos --></li>" +
                 "<li><a href='https://malotedigital.jt.jus.br/malotedigital/login.jsf' target='_blank'> <button id='botao_links'>Malote Digital</button></a><!-- Sistemas Externos --></li>" +
                 "<li><a href='https://midias.pje.jus.br/midias/web/site/login' target='_blank'> <button id='botao_links'>PJe M&iacute;dias CNJ</button></a><!-- Sistemas Externos, PJe Midias CNJ --></li>"+
                 "<li><a href='https://portal.sigeo.jt.jus.br/' target='_blank'> <button id='botao_links'>Portal do SIGEO</button></a><!-- Sistemas Externos --></li>" +
                 "<li><a href='https://www.trt9.jus.br/proad' target='_blank'> <button id='botao_links'>PROAD</button></a><!-- Sistemas Externos --></li>" +
                 "<li><a href='https://aj.sigeo.jt.jus.br/aj2/internetaberto/profissionais.jsf' target='_blank'> <button id='botao_links'>SIGEO AJ-JT (Consulta de Perito)</button></a><!-- Sistemas Externos --></li>" +
                 "<li><a href='https://www.trt9.jus.br/siju/autosdigitais/index.xhtml' target='_blank'> <button id='botao_links'>SIJU</button></a><!-- Sistemas Externos --></li>" +
                 "<li><a href='https://www.trt9.jus.br/siscondjtrtpr/login.jsp' target='_blank'> <button id='botao_links'>SISCONDJ-TJ</button></a><!-- Sistemas Externos --></li>" +
            "</ul>"+ 
            "<ul class='links'>"+
                "<li><h4 style='color: white;'>Sistemas Voltados a CSTI</h4><br>"+
                "<!-- Aprendizagem RW3, Assyst WEB, BrowserStack (Testar link), Chat BOT - CSTI, CSWIKI, Elastic Kibana, Elastic Monitor, Localize IP (Descobrir Região), Meu IP (Descobrir IP), PJe Consulta Processual, PJe Homologação, Pje Treinamento, Remover MFA VPN, Portal Captive, https://aprendizagem.rw3tecnologia.com/, https://csti.trt9.jus.br/assystweb, " +
                "https://trt9-techcom.treetools.com.br/sb3/pages/inicio.zul, https://www.trt9.jus.br/cswiki/index.php/P%C3%A1gina_principal, https://kibana.trt9.jus.br/s/servicedesk/login?next=%2Fs%2Fservicedesk%2Fapp%2Fhome#/ " +
                "https://pje.trt9.jus.br/consultaprocessual/, https://pje-homologacao.trt9.jus.br/trt/, https://pje-treinamento.trt9.jus.br/, https://layer8.trt9.jus.br/removermfavpn, https://captive.trt9.jus.br/connect/PortalMain, https://test-ipv6.com/, https://localizeip.com.br/#google_vignette, https://www.browserstack.com --></li>"+
                "<li><a href='https://aprendizagem.rw3tecnologia.com/' target='_blank'> <button id='botao_links'>Aprendizagem RW3</button></a><!-- Sistemas Voltados a CSTI --></li>"+
                "<li><a href='https://csti.trt9.jus.br/assystweb' target='_blank'> <button id='botao_links'>Assyst WEB</button></a><!-- Sistemas Voltados a CSTI --></li>"+
                "<li><a href='https://www.browserstack.com' target='_blank'> <button id='botao_links'>BrowserStack (Testar link)</button></a><!-- Sistemas Voltados a CSTI --></li>"+
                "<li><a href='https://trt9-techcom.treetools.com.br/sb3/pages/inicio.zul' target='_blank'> <button id='botao_links'>Chat BOT - CSTI</button></a><!-- Sistemas Voltados a CSTI --></li>"+
                "<li><a href='https://www.trt9.jus.br/cswiki/index.php/P%C3%A1gina_principal' target='_blank'> <button id='botao_links'>CSWIKI</button></a><!-- Sistemas Voltados a CSTI --></li>"+
                "<li><a href='https://kibana.trt9.jus.br/s/servicedesk/login?next=%2Fs%2Fservicedesk%2Fapp%2Fhome#/' target='_blank'> <button id='botao_links'>Elastic Kibana</button></a><!-- Sistemas Voltados a CSTI --></li>"+
                "<li><a href='http://10.101.8.31:5601/s/cliente/app/dashboards' target='_blank'> <button id='botao_links'>Elastic Monitor</button></a><!-- Sistemas Voltados a CSTI --></li>"+
                "<li><a href='http://10.101.8.31:5601/s/cliente/app/dashboards' target='_blank'> <button id='botao_links'>Localize IP (Descobrir Região)</button></a><!-- Sistemas Voltados a CSTI --></li>"+
                "<li><a href='https://localizeip.com.br/#google_vignette' target='_blank'> <button id='botao_links'>Meu IP (Descobrir IP)</button></a><!-- Sistemas Voltados a CSTI --></li>"+
                "<li><a href='https://pje.trt9.jus.br/consultaprocessual/' target='_blank'> <button id='botao_links'>PJe Consulta Processual</button></a><!-- Sistemas Voltados a CSTI --></li>" +
                "<li><a href='https://pje-homologacao.trt9.jus.br/trt/' target='_blank'> <button id='botao_links'>PJe Homologa&ccedil;&atilde;o</button></a><!-- Sistemas Voltados a CSTI --></li>"+ 
                "<li><a href='https://pje-treinamento.trt9.jus.br/' target='_blank'> <button id='botao_links'>PJe Treinamento</button></a><!-- Sistemas Voltados a CSTI --></li>"+
                "<li><a href='https://captive.trt9.jus.br/connect/PortalMain' target='_blank'> <button id='botao_links'>Portal Captive</button></a><!-- Sistemas Voltados a CSTI --></li>"+
                "<li><a href='https://layer8.trt9.jus.br/removermfavpn' target='_blank'> <button id='botao_links'>Remover MFA VPN (LAYER8)</button></a><!-- Sistemas Voltados a CSTI --></li>"+
            "</ul>"+ 
            "<ul class='links'>"+
                 "<li><h4 style='color: white;'>Status de Equipamentos</h4><br>"+
                 "<!-- Equipamentos DATEN, Equipamentos DELL, Equipamentos LENOVO, Power BI - Monitoramento, Power BI - Uso Impressoras, Power BI - Estoque SAINF, Servidor de Impressão --><!-- Servidor de Impressao " +
                 "http://www.daten.com.br/suporte-escolha, https://www.dell.com/support/home/pt-br?app=products, https://pcsupport.lenovo.com/br/pt/products/desktops-and-all-in-ones/thinkcentre-m-series-desktops/thinkcentre-m920q/?linkTrack=Homepage%3ABody_Search%20Products&searchType=3&keyWordSearch=M920q%20Desktop%20%28ThinkCentre%29 " +
                 "https://powerbi.trt9.jus.br/paineis/powerbi/TIC/SCAM/Monitoramento, https://powerbi.trt9.jus.br/paineis/powerbi/TIC/SCAM/Uso%20das%20impressoras, https://powerbi.trt9.jus.br/paineis/powerbi/TIC/SCAM/SAINF%20-%20Estoque, https://web01/impressao/ --></li>" +
                 "<li><a href='http://www.daten.com.br/suporte-escolha' target='_blank'> <button id='botao_links'>Equipamentos DATEN</button></a><!-- Status de Equipamentos --></li>" +
                 "<li><a href='https://www.dell.com/support/home/pt-br?app=products' target='_blank'> <button id='botao_links'>Equipamentos DELL</button></a><!-- Status de Equipamentos --></li>" +
                 "<li><a href='https://pcsupport.lenovo.com/br/pt/products/desktops-and-all-in-ones/thinkcentre-m-series-desktops/thinkcentre-m920q/?linkTrack=Homepage%3ABody_Search%20Products&searchType=3&keyWordSearch=M920q%20Desktop%20%28ThinkCentre%29' target='_blank'> <button id='botao_links'>Equipamentos LENOVO</button></a><!-- Status de Equipamentos --></li>" +
                 "<li><a href='https://powerbi.trt9.jus.br/paineis/powerbi/TIC/SCAM/Monitoramento' target='_blank'> <button id='botao_links'>Power BI - Monitoramento</button></a><!-- Status de Equipamentos --></li>"+
                 "<li><a href='https://powerbi.trt9.jus.br/paineis/powerbi/TIC/SCAM/Uso%20das%20impressoras' target='_blank'> <button id='botao_links'>Power BI - Uso Impressoras</button></a><!-- Status de Equipamentos --></li>"+
                 "<li><a href='https://powerbi.trt9.jus.br/paineis/powerbi/TIC/SCAM/SAINF%20-%20Estoque' target='_blank'> <button id='botao_links'>Power BI - Estoque SAINF</button></a><!-- Status de Equipamentos --></li>" +
                 "<li><a href='https://web01/impressao/' target='_blank'> <button id='botao_links'>Servidor de Impress&atilde;o</button></a><!-- Status de Equipamentos --></li>" +
            "</ul>"+ 
            "<ul class='links'>"+

            "</ul>"+ 
        "</div>" +

        "</ul>"+

    "<br><br>"+
"</div>" +
"</div>" +
"<p id='versao'>Vers&atilde;o 0.1.14</p>"+
"</article>"+
"</footer>"
foot.innerHTML+=rodape

function limpar_links() {
    $('#lista_filtro_links li').show();
}

function filtrar_links() {
    var termo = $('#pesquisa_links').val().toUpperCase();

    $('#lista_filtro_links li').show();

    $('#lista_filtro_links li').each(function () {
        if ($(this).html().toUpperCase().indexOf(termo) === -1) {
            $(this).hide();
        }
        if (document.getElementById("pesquisa_links").value == "") {
            $('#lista_filtro_links li').show();
        }
    });

}

