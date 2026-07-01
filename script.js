const contato = document.getElementById('form-contato') //aqui pegamos o id e é aqui que ele vai achar o elemento
function enviarFormulario(evento){
    evento.preventDefault()//aqui foi aplicado para não recarregar a página quando o forms for enviado
    const nomeDigitado = document.getElementById('nome').value;
    if (nomeDigitado === '') {
        document.getElementById('mensagem-confirmacao').innerHTML = 'Prestenção, sô! Preencha os campos do formulário.'
    } else {
        document.getElementById('mensagem-confirmacao').innerHTML = `Olá, ${nomeDigitado}!`
    }
}
contato.addEventListener('submit', enviarFormulario) //aqui diz que quando esse formulário for enviado, irá acionar uma função. Nesse caso irá aparecer no console.log "Formulário enviado!" e o nome do user.


