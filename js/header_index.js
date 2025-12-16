const head=document.head
const body=document.body

const estilo="<link rel='stylesheet' href='css/header.css'/>"
const estilo3="<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'>"

head.innerHTML+=estilo
head.innerHTML+=estilo3

const header=document.createElement("div")
header.setAttribute("id","header")
header.setAttribute("class","header")

body.prepend(header)

const cabecalho=
"<header>"+
"<nav id='menuprincipal'>"+
"<ul class='menu'>"+
   "<a id='a_menu_x' href='index.html'><img id='img_1' style='border-radius: 5px;' src='Imagens/csti.png' alt='TRT9' title='Acessar a página principal' width='200' height='100'></a>"+

   "<li align='left' class='menu_1' id='dropdown'><a id='a_menu_1' href='#'>Conhecimento &nbsp; </a>"+
   "<ul class='submenu-1'>"+  
       "<li class='menu_1_2'><a href='Paginas/redirecionamento.html'>Redirecionamento</a></li>"+
       "<li class='menu_1_3'><a href='Paginas/procedimentos.html'>Procedimentos</a></li>"+
       "<li class='menu_1_4'><a href='Paginas/sistemas.html'>Sistemas</a></li>"+
       "<li class='menu_1_5'><a href='Paginas/status.html'>Status CMDB</a></li>"+
       "<li class='menu_1_6'><a href='Paginas/glossario.html'>Glossário</a></li>"+
       "<li class='menu_1_1' id=''><a href='index.html'>Páginas de Apoio </a>" +
       "<ul class='submenu-2'>" +
       "<li class='menu_1_1_1'><a href='Paginas/paginan1.html'>Apoio N1</a></li>" +
       "<li class='menu_1_1_2'><a href='Paginas/paginan2.html'>Apoio N2</a></li>" +
       "</ul>" +
       "</li>" +
   "</ul>"+
   "</li>"+
   "<li align='left' class='menu_3' id='dropdown'><a id='a_menu_3' href='#'>Templates &nbsp; </a>"+
   "<ul class='submenu-1'>"+
       "<li class='menu_3_1' id=''><a href='Paginas/atalhos2.html'>Modelos N1 </a>" +
       "<ul class='submenu-2'>" +
       "<li class='menu_3_1_1'><a href='Paginas/atalhos2.html'>Templates N1</a></li>" +
       "<li class='menu_3_1_2'><a href='Paginas/atalhos_chat.html'>Templates Chat</a></li>" +
       "</ul>" +
       "</li>" +
       "<li class='menu_3_2' id=''><a id='menu_3_2' href='Paginas/atalhos.html'>Modelos N2 </a>" +
       "<ul class='submenu-2'>" +
       "<li class='menu_3_2_1'><a href='Paginas/atalhos.html'>Templates N2</a></li>" +
       "<li class='menu_3_2_2'><a href='Paginas/atalhos_smp.html'>Templates SMP</a></li>" +
       "<li class='menu_3_2_3'><a href='Paginas/suspensao.html'>Templates de Suspensão</a></li>" +
       "<li class='menu_3_2_4'><a href='Paginas/sessao.html'>Templates de Sessão</a></li>" +
       "<li class='menu_3_2_5'><a href='Paginas/garantia.html'>Templates de Garantia</a></li>" +
       "</ul>" +
       "</li>" +
       "<li class='menu_3_3'><a href='Paginas/termos.html'>Termos</a></li>"+
 "</ul>"+
 "</li>"+
 "<li align='left' class='menu_4' id='dropdown'><a id='a_menu_4' href='#'>Locais &nbsp; </a>"+
 "<ul class='submenu-1'>"+
     "<li class='menu_4_1' id=''><a href='Paginas/400.html'>Edifícios </a>" +
     "<ul class='submenu-2'>" +
     "<li class='menu_4_1_1'><a href='Paginas/400.html'>VM400</a></li>" +
     "<li class='menu_4_1_2'><a href='Paginas/147.html'>VM147</a></li>" +
     "<li class='menu_4_1_3'><a href='Paginas/528.html'>RB528</a></li>" +
     "</ul>" +
     "</li>" +
     "<li class='menu_4_2'><a href='Paginas/cidades.html'>Cidades</a></li>"+
     "<li class='menu_4_3' id=''><a href='Paginas/digitalizacao.html'>Pastas de Digitalização</a>"+
     "<ul class='submenu-2'>" +
     "<li class='menu_4_3_1'><a href='Paginas/digitalizacao.html'>Capital</a></li>" +
     "<li class='menu_4_3_2'><a href='Paginas/digitalizacao2.html'>Interior</a></li>" +
     "</ul>" +
     "</li>" +
     "<li class='menu_4_4'><a href='Paginas/rangeip.html'>Range de IPs</a></li>"+
 "</ul>"+
 "</li>"+
 "<li align='left' class='menu_2' id='comum'><a id='a_menu_2' href='Paginas/tokens.html'>Tokens</a></li>"+
 "<li align='left' class='menu_5' id='comum'><a id='a_menu_5' href='Paginas/malote.html'>Malote</a></li>"+
 "<li align='left' class='menu_7' id='comum'><a id='a_menu_7' href='Paginas/calculo.html'>Cálculo F</a></li>"+
 "<li align='left' class='menu_6' id='comum'><a id='a_menu_6' onclick='scrollToLinks()' style='cursor: pointer;'>Links</a></li>"+
 "</ul>"+
"</nav>"+
"</header>"
header.innerHTML+=cabecalho
