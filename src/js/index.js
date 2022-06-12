function enviarFormulario() {
    const nomeCompleto = formulario.nomeCompleto
    const email = formulario.email
    const telefone = formulario.telefone
    const mensagem = formulario.mensagem
    const campoObrigatorio = document.getElementsByClassName('campo-obrigatorio')
    if (nomeCompleto.value == '') {
        nomeCompleto.style.borderColor = '#F52E2E'
        campoObrigatorio[0].style.display = 'block'
    } else {
        nomeCompleto.style.borderColor = '#00C22B'
        campoObrigatorio[0].style.display = 'none'
    }

    if (email.value == '') {
        email.style.borderColor = '#F52E2E'
        campoObrigatorio[1].style.display = 'block'
    } else {
        email.style.borderColor = '#00C22B'
        campoObrigatorio[1].style.display = 'none'
    }

    if (telefone.value == '') {
        telefone.style.borderColor = '#F52E2E'
        campoObrigatorio[2].style.display = 'block'
    } else {
        telefone.style.borderColor = '#00C22B'
        campoObrigatorio[2].style.display = 'none'
    }

    if (mensagem.value == '') {
        mensagem.style.borderColor = '#F52E2E'
        campoObrigatorio[3].style.display = 'block'
    } else {
        mensagem.style.borderColor = '#00C22B'
        campoObrigatorio[3].style.display = 'none'
    }
}