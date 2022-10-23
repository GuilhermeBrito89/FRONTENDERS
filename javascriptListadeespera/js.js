const mail = document.getElementById('email');
const cep = document.querySelector('#cep');
const rg = document.getElementById('rg-mask');
const senha = document.getElementById('senha');
const confirmsenha = document.getElementById('confirmSenha');
const error = document.getElementById('erro-email');
const mensagem = document.getElementById('msg');
const enviar = document.querySelector('button');

//Para não precisar fazer muitas variáveis, é importante olhar no site https://viacep.com.br/ws/01001000/json/ e colocar no html as mesmas ids que o viacep usa
enviar.addEventListener('click', function (e) {

    function validacao() {
        const senha = document.getElementById('senha');
        const confirmsenha = document.getElementById('confirmSenha');
        let regexSenha = /[A-Za-z0-9.]/

        if (senha.value != confirmsenha.value
            && regexSenha != "") {
            alert('Por favor, verifique se sua senha foi digitada corretamente.')
            e.preventDefault()
        }
        else if (senha.value == "" || confirmsenha.value == "" || mensagem.value == "" || mail == "" || cep.value == "") {
            alert('Por favor, verifique se todos os campos foram preenchidos corretamente.')
            e.preventDefault()
            //
        } else {
            alert('Suas informações foram enviadas com sucesso! Em breve, a equipe FrontEnders entrará em contato para atender sua requisição.')
        }

    }

    idnumber = function () {
        switch (rg) {
            case NaN:
                alert('O valor digitado no RG parece não ser número');
            break;
        }
    return idnumber()
    }
    return validacao()
})




const complet = (result) => {
    for (const campo in result) {
        if (document.querySelector('#' + campo)) {
            document.querySelector('#' + campo).value = result[campo]
        }
    }
}

cep.addEventListener('blur', (e) => {
    e.preventDefault
    let procura = cep.value.replace('-', '');
    let opcoes = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${procura}/json/`, opcoes)
        .then(response => {
            response.json()
                .then(data => complet(data))
        }) //se der certo, então faça
        .catch(e => alert('Ops.. Verifique se seu CEP foi digitado corretamente ' + e.message)) // se der errado, então faça
})


//|| mail.value == "" || mail.value != regexEmail
mail.addEventListener('blur', function () {
    if (!mail.checkValidity()) {
        error.innerHTML = "Email inválido";
    }
})
mail.addEventListener('focus', function () {
    if (error.innerHTML == "Email inválido") {
        error.innerHTML = "";
    }

})