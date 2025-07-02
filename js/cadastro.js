/*cria Variaveis*/
let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmsenha = document.querySelector('#confirmsenha')
let labelConSenha = document.querySelector('#labelConSenha')
let validConSenha = false

let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')

nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *mínimo 3 caracteres*'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else{
        labelNome.setAttribute('style', 'color:  #BD8D7D')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: #BD8D7D')
        validNome = true
    }
})

usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 4){
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Usuário *mínimo 5 caracteres*'
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false
    } else{
        labelUsuario.setAttribute('style', 'color:  #BD8D7D')
        labelUsuario.innerHTML = 'Usuário'
        usuario.setAttribute('style', 'border-color: #BD8D7D')
        validUsuario = true
    }
})

email.addEventListener('keyup', () => {
    if(email.value.length <= 12){
        labelEmail.setAttribute('style', 'color: red')
        email.setAttribute('style', 'border-color: red')
        validEmail = false
    } else{
        labelEmail.setAttribute('style', 'color:  #BD8D7D')
        email.setAttribute('style', 'border-color: #BD8D7D')
        validEmail = true
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *mínimo 6 caracteres*'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    } else{
        labelSenha.setAttribute('style', 'color:  #BD8D7D')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: #BD8D7D')
        validSenha = true
    }
})

confirmsenha.addEventListener('keyup', () => {
    if(senha.value != confirmsenha.value){
        labelConSenha.setAttribute('style', 'color: red')
        labelConSenha.innerHTML = 'Senha *senha incorreta*'
        confirmsenha.setAttribute('style', 'border-color: red')
        validConSenha = false
    } else{
        labelConSenha.setAttribute('style', 'color:  #BD8D7D')
        labelConSenha.innerHTML = 'Confirma senha'
        confirmsenha.setAttribute('style', 'border-color: #BD8D7D')
        validConSenha = true
    }
})

function cadastrar(){
    if(validNome && validUsuario && validEmail && validSenha && validConSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                emailCad: email.value,
                senhaCad: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))
       
        msgSucess.setAttribute('style', 'display: block')
        msgSucess.innerHTML = '<strong>Cadastrando usuario...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(() =>{
            window.location.href = 'login.html'
        }, 2000)
    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha corretamente os campos</strong>'
        msgSucess.innerHTML = ''
        msgSucess.setAttribute('style', 'display: none')
    }
}


btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})


btnConfirm.addEventListener('click', ()=>{
    let inputCSenha = document.querySelector('#confirmsenha')

    if(inputCSenha.getAttribute('type') == 'password'){
        inputCSenha.setAttribute('type', 'text')
    }else{
        inputCSenha.setAttribute('type', 'password')
    }
})