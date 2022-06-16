const mensagemLink = document.getElementById('mensagem-whatsapp-link')
const mensagemButton = document.getElementById('mensagem-whatsapp-button')
const mensagem = document.getElementById('mensagem')

const numero = 5531983697337

function enviarMensagemLink(e) {
    e.preventDefault()
    let mensagemTexto = "Olá, gostaria de uma consultoria jurídica"
    let url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(numero)}&text=${encodeURIComponent(mensagemTexto)}`
    window.open(url, '_blank')
}

function enviarMensagemButton(e) {
    e.preventDefault()
    let mensagemTexto = mensagem.value
    let url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(numero)}&text=${encodeURIComponent(mensagemTexto)}`
    window.open(url, '_blank')
}

mensagemLink.onclick = enviarMensagemLink

mensagemButton.onclick = enviarMensagemButton
