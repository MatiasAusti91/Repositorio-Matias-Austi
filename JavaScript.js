/* ---- inicio -- botones del cuadro ----*/
function historia() {
    location.href = "./historia-juego/historia.html" 
  
  
}


function juego(){
    location.href = "./historia-juego/juego.html"
    
}












/*---- historia --- sector de video ----*/

let video = document.querySelector(".video1");
let duracion = document.querySelector(".duracion")

function inicio() {
    video.play()
    console.log("inicio del video")
    duracion.textContent = `${video.duration}`
}

function pausar() {
   video.pause()
   console.log("video pausado")
}

