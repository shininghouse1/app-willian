/* CONFIGURAÇÕES DO APLICATIVO */

// Consigurações da conexão com o Google Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBP9a4m_X_6zxf5oM_q_Gl8AA7dZgop2PM",
    authDomain: "noxixinaruaapp01.firebaseapp.com",
    databaseURL: "https://noxixinaruaapp01.firebaseio.com",
    projectId: "noxixinaruaapp01",
    storageBucket: "noxixinaruaapp01.appspot.com",
    messagingSenderId: "597702054125",
    appId: "1:597702054125:web:8d79d4e9615e6a7df43ce4"
}

// Nome da 'key' que armasena as configurações locais
var localStorageKeyName = 'config';

// Configuração inicial do App
var initialConfig = {
    tema : 'light', // Tema inicial (light | dark)
    user : { // Configuração inicial do usuário (Não logado)
        name : '',
        email : '',
        photo : ''
    }
}