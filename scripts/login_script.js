const nome = document.getElementById("nome");
const mail = document.getElementById("mail");
const senha = document.getElementById("senha");
const botao = document.getElementById("botao");
const link_google = document.getElementById("login_google");
const link_facebook = document.getElementById("login_facebook");
const link = document.getElementById("login");

function verificarInputs() {
    if (
        nome.value.trim() === "" &&
        mail.value.trim() === "" &&
        senha.value.trim() === ""
    ) {
        botao.disabled = true;
        
    } else {
        botao.disabled = false;
        
    }

    if(
        nome.value.trim() === "" ||
        mail.value.trim() === "" ||
        senha.value.trim() === ""
    ){
        link_google.classList.add("disable");
        link_facebook.classList.add("disable");
        link.classList.add("disable");
    }else{
        link_google.classList.remove("disable");
        link_facebook.classList.remove("disable"); 
        link.classList.remove("disable");
    }


}

// Ativa o evento de escuta
nome.addEventListener('input', verificarInputs);
mail.addEventListener('input', verificarInputs);
senha.addEventListener('input', verificarInputs);

// Evento no botão reset
botao.addEventListener('click', () => {
    setTimeout(verificarInputs, 0);
});

// Executa a verificação ao carregar a página
verificarInputs(); 
