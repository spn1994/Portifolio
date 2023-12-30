const imagens = document.querySelectorAll(".home .imagem");

for (const imagem of imagens) {
  imagem.addEventListener("mouseenter", () => {
    imagem.querySelector(".imagem-hover").style.display = "block";
    imagem.querySelector("img").style.visibility = "hidden";
  });

  imagem.addEventListener("mouseleave", () => {
    imagem.querySelector(".imagem-hover").style.display = "none";
    imagem.querySelector("img").style.visibility = "visible";
  });
};


//quado a página estiver pronta paara ser manipulada
$(document).ready(function () {

    //quando clicar no menu, adiciona ou remove 'nav-toggle', abrindo ou fechando o menu
    $('#menu').click(function () {
        /*Classe adicionada agora */
        $('.navbar').toggleClass('nav-toggle');
    });

    //em JS puro
    /*function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("nav-toggle ");
}*/

    //Quando a janela estiver rolando(scroll), não é possível ter o menu aberto
    $(window).on('scroll load', function () {
        $('.navbar').removeClass('nav-toggle');

        //se a altura da tela > 60, coloca o botão de voltar ao topo
        if (window.scrollY > 60) { // 60px == 100%
            document.querySelector('#scroll-top')
            .classList.add('active');
        } else {
            document.querySelector('#scroll-top')
            .classList.remove('active');
        }

        // a medida que a página vai sendo rolada, para cada seção que vai sendo
        // exibida, vai sendo mostrado a opção no menu
        $('section').each(function () {
            let height = $(this).height(); //retorna a altura da sessão
            let offset = $(this).offset().top - 200; //retorna a posição do elemento -200
            let top = $(window).scrollTop(); //retorna a posição vertical da barra de rolagem
            let id = $(this).attr('id'); // retorna os ids das sessões

            //se a posição vertical da barra de rolagem for maior que  offset e 
            // a posição vertical da barra de rolagem for menor que offset + altura
            // é marcada no menu a sessão que está sendo mostrada
            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });
});
        
//mostra se o usuário está na guia da página, caso ele saia,
//mostra a mensagem e a imagem 
document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Sergio Nahirny";
            $("#favicon").attr("href", "js/euu.jpg");
        } else {
            document.title = "Volte para Cá";
            $("#favicon").attr("href", "js/favhand.png");
        }
    });


// <!-- Efeito de Escrever no inicio da página -->
// cria um array de objetos, com as frases a serem escritas,
// se vai durar sempre, a velocidade da escrita, o a velocidade de volta da escrita
// e o atraso para escrever

let typed = new Typed(".escrever-texto", {
    strings: ["JavaScript", "nodeJS", "React", "Java"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

// <!-- Cria o efeito 3D nas imagens -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 20,
})

function esconderBotao() {
    var maisbtn = document.getElementById('maisbtn');

    // Verifica se o elemento foi encontrado
    if (maisbtn) {
      var larguraTela = window.innerWidth;

      // Defina a largura máxima para a qual o botão será exibido (por exemplo, 600 pixels)
      var larguraMaxima = 600;

      if (larguraTela <= larguraMaxima) {
        maisbtn.style.display = 'none';
      } else {
        maisbtn.style.display = 'block';
      }
    }
  }

  // Espera até que o DOM esteja totalmente carregado
  document.addEventListener('DOMContentLoaded', esconderBotao);

  // Verifique o tamanho da tela sempre que a janela for redimensionada
  window.addEventListener('resize', esconderBotao);

  function toggleProjetos() {
    let projetos = document.querySelectorAll('.caixa.tilt');
  
    if (projetos.length === 0) {
      console.error("Nenhum elemento encontrado com as classes 'caixa' e 'tilt'");
      return;
    }
  
    // Altere o texto e o ícone do botão:
    let mostrarMaisBtn = document.getElementById('mostrarMaisBtn');
    let btnText = document.getElementById('btnText');
  
    // Inverte o estado de exibição dos projetos
    let isMostrandoMais = projetos[3].style.display === 'none' || projetos[3].style.display === '';
    for (let i = 3; i < projetos.length; i++) {
      projetos[i].style.display = isMostrandoMais ? 'block' : 'none';
    }
  
    // Altere o texto e o ícone do botão apenas uma vez, no início da função
    if (btnText) {
      btnText.innerText = 'Mostrar Menos';
      mostrarMaisBtn.innerHTML = isMostrandoMais ? '<i class="fas fa-minus"></i>' : '<i class="fas fa-plus"></i>';
    }
  
    // Altere o texto e o ícone do botão quando o evento de clique for disparado
    mostrarMaisBtn.addEventListener('click', () => {
      // Altere o texto e o ícone do botão para o oposto do que está atualmente
      if (btnText) {
        btnText.innerText = btnText.innerText === 'Mostrar Menos' ? 'Mostrar +' : 'Mostrar Menos';
      }
      mostrarMaisBtn.innerHTML = mostrarMaisBtn.innerHTML === '<i class="fas fa-minus"></i>' ? '<i class="fas fa-plus"></i>' : '<i class="fas fa-minus"></i>';
    });
  }
