const now = new Date().getTime();
const goLive = new Date("Mar 25 2021 11:00").getTime();

console.log(goLive)

//Transforma milesimos em segundos
diff = (goLive - now) / 1000 

console.log(diff % 60)

const countdownText = document.querySelector('#countdown')

const updateCountdown = (() =>{
  //Transforma segundos em minutos
  const minutes = Math.floor(diff / 60)
  //Transforma minutos em segundos
  let seconds = Math.floor(diff % 60)

  //Adicionar o 0 caso o numero não seja uma dezena 
  seconds = seconds < 10 ? '0' + seconds : seconds

  //Adiciona as alterações do HTML na tela
  countdownText.innerHTML = `${minutes}:${seconds}`
  diff--
})

//Seta cada alteração para 1s (cada segundo muda o número do segundo na tela)
setInterval(() => {
  updateCountdown()
}, 1000)

//Animação neon
const titulo = document.querySelector('#titulo')

const flickerLetter = letter => `<span style="animation: blink linear ${Math.random()*4}s">${letter}</span>`

console.log(flickerLetter)

//split tranforma em umarray, map roda a função flickerLetter em cada letra, join contatena as letras formando assim o titulo com a animação aleatória
const flicker = text => text.split('').map(flickerLetter).join('')

const neonTemps = titulo => titulo.innerHTML = flicker(titulo.textContent)

setInterval(() => {
  neonTemps(titulo)
}, 6000);


