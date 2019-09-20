/* SCRIPTS DO TEMA */

/* Constructor - Comente ou remova as linhas 'console.log' quando o App estiver pronto! */
var app = {
    // Inicialização do jQuery e Cordova (em breve)
    start: function(){
        console.log('1) Inicializando App...')
        $(document).ready(this.config);
    },

    // Configura o app (firebase e/ou local)
    config: function(){
        console.log('2) Configurando App...');

        const store = window.localStorage;
        var configData = store.getItem('config');
        //console.log('-',config);
        if(!configData) {
            console.log('nao achei');
            var config = {
                tema : 'light',
                coisa : 'treco',
                treco : 'qqcoisa'
            };
            var configJSON = JSON.stringify(config);
            store.setItem('config', configJSON);
        } else {
            var config = JSON.parse(configData);
        }
            
        // Configura jQuery AJAX CrossDomain para rotas no Android
		$.ajaxPrefilter( 'text html json script xml', function(options){
            options.crossDomain = true;
        });

        // Executa App
        app.run(config);
    },

    // Executa o app que está na função 'runApp()'
    run: function(){
        console.log('3) Executando o App...');

        // Executa tratamento de eventos
        runApp();
    }
}

/* 'Control' do menu principal */
function toggleMenu(hideMenu){
    if( $('nav').attr('class') == 'slideOn'){ // Se o menu está aparecendo...
        menuOff();
    } else { // Se o menu está oculto...
        menuOn();
    }
    return false;
}

// Mostra o menu
function menuOn(){
    $('nav').attr('class', function(){ // Altera a classe do menu
        $('#menuModal').fadeIn('fast'); // Mostra o fundo do menu com fade
        $('#menu').addClass('rotateMenuBtn'); // Adiciona classe que rotaciona o botão
        return 'slideOn'; // Aplica classe que desloca o menu para a direita, exibindo-o
    });
}

// Oculta menu
function menuOff(){
    $('nav').attr('class', function(){ // Altera a classe do menu
        $('#menuModal').fadeOut('fast'); // Esconde fundo do menu com fade
        $('#menu').removeClass('rotateMenuBtn'); // Remove classe que rotaciona o botão
        return 'slideOff'; // Aplica classe que desloca o menu para a esquerda, escondendo
    });
}

// Tratamento de eventos do App
function runApp(){

    // Carregar html/home.html
    $.get('html/home.html', function(htmlHome){
        $('main').html(htmlHome);
    });

    // Ocultar Splash Screen 500 milissegundos após iniciar App
    setTimeout(function(){
        $('#splashScreen').fadeOut('slow'); // Oculta com fade
    }, 500);    

    // Monitorando click/touch no botão do menu principal
    $(document).on('click', '#menu', toggleMenu);

    // Monitorando click/touch no 'menuModal'
    $(document).on('click', '#menuModal', menuOff);

    // Monitorando links para virar rotas
    $(document).on('click', 'a', routing);

}

// Tudo pronto? Vamos 'rodar' o App
app.start();