let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

logado.innerHTML = 'Olá ' + userLogado.nome

if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = 'login.html'
}



function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('userlogado')
    window.location.href = 'index.html'
}