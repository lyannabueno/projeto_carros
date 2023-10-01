$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true, /*as imagens passam sozinhas no slide*/
    }); /*inicializa o slick carousel*/

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle(); /*executa um slideDown para exibir e verifica se ele já foi executado - se sim, executa um slideUp*/
    })

    $('#telefone').mask('(00) 00000-0000') /*mascará de como será a leitura do número*/
    /*letra ssão representas por 'S'*/

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true /*verifica se o email está na estrutura correta de envio*/
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome' /*altera as mensagens de 'required' para o usuário*/
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top //retorna a posição do elemento
        }, 1000) // duração da animação 
    })
});