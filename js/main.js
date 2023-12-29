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
