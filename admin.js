

const formulario = document.getElementById("formEvento");
const alerta = document.getElementById('alerta');

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    let campos = [

        "titulo",
        "descricao",
        "categoria",
        "imagem",
        "data",
        "horario",
        "telefone",
        "local",
        "endereco"

    ];



    let valido = true;


    campos.forEach(function (id) {


        let campo = document.getElementById(id);



        if (campo.value.trim() === "") {
            campo.classList.add("is-invalid");
            valido = false;
        } else {
            campo.classList.remove("is-invalid");
            campo.classList.add("is-valid");
        }
    });

    // VALIDA EMAIL
    let email = document.getElementById("email");

    if (email.value !== "") {
        if (!email.value.includes("@") || !email.value.includes(".")) {
            email.classList.add("is-invalid");
            email.classList.remove("is-valid");
            valido = false;
        } else {
            email.classList.remove("is-invalid");
            email.classList.add("is-valid");
        }
    }

    // VALIDA SITE
    let site = document.getElementById("site");

    if (site.value !== "") {
        let formatoSite = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-z]{2,}/;

        if (!formatoSite.test(site.value)) {
            site.classList.add("is-invalid");
            site.classList.remove("is-valid");
            valido = false;
        } else {
            site.classList.remove("is-invalid");
            site.classList.add("is-valid");
        }
    }

    if (valido) {

       
        alerta.classList.remove('d-none');
    }

});










