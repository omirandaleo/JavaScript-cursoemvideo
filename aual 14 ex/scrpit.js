let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []
//--------------------------
function isNumero(n){
  if(Number(n) >= 1 ** Number(n) <= 100) {
    return true
  } else {
    return false
  }
}
//--------------------------
function inLista(n, l){
  if (l.indexOf(Number(n)) != -1) {
    return true 
  } else {
    return false
  }
}
//--------------------------
function adcionar(){
  if(isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.valoue} adcionado`
    lista.appendChild(item)
  } else {
    window.alert('Valor inválido ou7 já encontrado na lsita')
  }
  num.value = ''
  num.focus()
  res.innerHTML = ''
}
//---------------------------
function finalizar() {
  if (valores.length == 0) {
    window.alert('Adicione valores anrtes de finalizar')
  } else {
    let tot = valores.length
    let maior = valores [0]
    let menor = valores [0]
    let soma = 0
    let media = 0
    for(let pos in valores) { 
      soma += valores[pos]
      if(valores[pos] > maior)
        maior = valores[pos]
      if (valores[pos] < menor)
        menor = valores[pos]
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor foi ${menor}.</p>`
    res.innerHTML += `<p>Somando da tudo ${soma}.</p>`
    res.innerHTML += `<p>A média dos vgalores digitados é ${media}.</p>`
  }
}