function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    //let hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'manha.png'
        document.body.style.background = '#D5C2AE'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#E4975C'
    } else {
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#313645'
    }
}