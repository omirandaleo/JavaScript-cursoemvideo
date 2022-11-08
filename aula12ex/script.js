function verificar() {
  let data = new Date()
  let ano = data.getFullYear()
  let Fano = document.getElementById('txtano')
  let res = document.querySelector('div#res')
  if (Fano.value.length == 0 || Fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
   let fsex = document.getElementsByName('radsex')
   let idade = ano - Number(Fano.value)
   let gênero = ''
   let img = document.createElement('img')
   img.setAttribute('id','foto')
   if (fsex[0].checked){
        gênero = 'Homem'
        if(idade >=0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'criançaH.png')
        } else if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'JovemH.png')
        } else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'AdultoH.png')
        } else {
            //Idoso
            img.setAttribute('src', 'velho.png')
        }
   } else if (fsex[1].checked) {
    gênero = 'Mulher'
    if(idade >=0 && idade < 10) {
        //Criança
        img.setAttribute('src', 'criançaM.png')
    } else if (idade < 21) {
        //Jovem
        img.setAttribute('src', 'JovemM.png')
    } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'AdultoM.png')
    } else {
        //Idoso
        img.setAttribute('src', 'velhoM.png')
    }
   }
   res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
   res.appendChild(img)
  }
}