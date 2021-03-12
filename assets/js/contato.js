let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector("#mapa");

function validarNome() {
    let txtNome = document.querySelector("#txtNome");
    if(nome.value.length < 3) {
        nomeOk = false;
        txtNome.innerHTML = "o nome precisa ter no mínimo 3 caracteres";
        txtNome.style.color = "red";
    }
    else {
        nomeOk = true;
        txtNome.innerHTML = "nome válido";
        txtNome.style.color = "green";
    }
}

function validarEmail() {
    let txtEmail = document.querySelector("#txtEmail");
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) { //se o @ ou o . não existirem
        emailOk = false;
        txtEmail.innerHTML = "e-mail inválido";
        txtEmail.style.color = "red";
    }
    else {
        emailOk = true;
        txtEmail.innerHTML = "e-mail válido";
        txtEmail.style.color = "green";
    }
}

function validarAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto");
    if(assunto.value.length > 100) {
        assuntoOk = false;
        txtAssunto.innerHTML = "o texto aceita no máximo 100 caracteres";
        txtAssunto.style.color = "red";
    }
    else {
        assuntoOk = true;
        txtAssunto.innerHTML = "";
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Mensagem enviada com sucesso!");
    }
    else {
        alert("Preencha o formulário corretamente antes de enviar...");
    }
}

function mapaZoom() {
    mapa.style.width = "800px";
    mapa.style.height = "600px";
}

function mapaNormal() {
    mapa.style.width = "400px";
    mapa.style.height = "250px";
}