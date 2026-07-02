function mostrarSenha() {

    let senha = document.getElementById("senha");
    let icone = document.getElementById("icone");

    if (senha.type == "password") {

        senha.type = "text";
        icone.className = "bi bi-eye-slash-fill";

    } else {

        senha.type = "password";
        icone.className = "bi bi-eye-fill";

    }

}

document.getElementById("loginForm").addEventListener("submit", function(event){

    // Se houver algum campo inválido, deixa o navegador mostrar o erro
    if (!this.checkValidity()) {
        return;
    }

    // Impede o envio real do formulário
    event.preventDefault();

    // Redireciona para a página principal
    window.location.href = "index.html";

});