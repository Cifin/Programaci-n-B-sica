
let ataqueJugador
let ataqueEnemigo
let vidasJugador=3
let vidasEnemigo=3


function Iniciarjuego() {

    

    let sectionSeleccionarAtaque=document.getElementById("seleccionar-ataque")

    let sectionReiniciar=document.getElementById("Reiniciar")
    sectionReiniciar.style.display='none'

    sectionSeleccionarAtaque.style.display='none'
    let botonMascotaJugador = document.getElementById('mascota')

botonMascotaJugador.addEventListener('click' , seleccionarMascotaJugador)

let botonFuego= document.getElementById('boton-fuego')
botonFuego.addEventListener('click', ataqueFuego)
let botonAgua= document.getElementById('boton-agua')
botonAgua.addEventListener('click', ataqueAgua)
let botonTierra=document.getElementById('boton-tierra')
botonTierra.addEventListener('click', ataqueTierra)

let botonReiniciar = document.getElementById('boton-reiniciar')
botonReiniciar.addEventListener('click', ReiniciarJuego)

}

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota=document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display='none'

    let sectionSeleccionarAtaque=document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display='flex'

    let imputPosei= document.getElementById(`Posei`)
    let imputGai= document.getElementById('Gai')
    let imputPyro= document.getElementById('Pyri')
    let spanMascotaJugador = document.getElementById('mascota-jugador')


    if (imputPosei.checked){
        spanMascotaJugador.innerHTML='Sr Rana'
        }
        
        else if (imputGai.checked){
            spanMascotaJugador.innerHTML='Don Key Kong'
        }
        else if (imputPyro.checked){
            spanMascotaJugador.innerHTML='Cheemy Balboa'
        }
        else {
            alert ("Selecciona una mascota")
            location.reload()
            
        }
        seleccionarMascotaEnemigo()



        
      


}
function seleccionarMascotaEnemigo(){
    let MascotaAleatoria = aleatorio (1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo ')

    if (MascotaAleatoria==1){
        spanMascotaEnemigo.innerHTML='Sr Rana'
    } else if (MascotaAleatoria==2){
        spanMascotaEnemigo.innerHTML='Don Key Kong'
    } else {spanMascotaEnemigo.innerHTML='Cheemy Balboa'
    }


    function aleatorio(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min)}            
    
    
    
    

}
function ataqueFuego() {
    ataqueJugador='FUEGO'
    ataqueAleatorioEnemigo()
}function ataqueAgua() {
    ataqueJugador='AGUA'
    ataqueAleatorioEnemigo()
}function ataqueTierra() {
    ataqueJugador='TIERRA'
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio= aleatorio(1,3)

    if (ataqueAleatorio==1) {
        ataqueEnemigo='FUEGO'

    } else if (ataqueAleatorio==2){
        ataqueEnemigo='AGUA'
    }else {
        ataqueEnemigo='TIERRA'
    }


    function aleatorio(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min)}

 combate()
}

function combate(){

    let spanVidasJugador=document.getElementById('vidas-jugador')
    let spanVidasEnemigo=document.getElementById('vidas-enemigo')

    if(ataqueEnemigo==ataqueJugador) {
        crearMensaje ('Empate 🐸')
        vidasEnemigo
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador=='FUEGO' && ataqueEnemigo=='TIERRA') {
        crearMensaje ("Ganaste 👨‍🚀") 
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
      
    } else if(ataqueJugador=='AGUA' && ataqueEnemigo=='FUEGO') {
        crearMensaje ("Ganaste 👨‍🚀")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        
    } else if(ataqueJugador=='TIERRA' && ataqueEnemigo=='AGUA') {
        crearMensaje ("Ganaste 👨‍🚀")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        
    } else {
        crearMensaje("Perdiste 😕")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
        
    }    

    revisarVidas()
   
}

function revisarVidas(){
    if (vidasEnemigo==0){
        crearMensajeFinal('Felicitaciones  has Ganado 🐱‍👤')
}   else if(vidasJugador==0){
    crearMensajeFinal(' Perdiste, una derrota que ocurre siempre, lo volveràs a intentar? 🦕')

} 

}



function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado')
    let AtaqueDelJugador = document.getElementById('ataque-del-jugador')
    let AtaqueDelEnemigo = document.getElementById('ataque-del-enemigo')

    let nuevoAtaqueDelEnemigo = document.createElement('p')
    let nuevoAtaqueDelJugador = document.createElement('p')
    
    sectionMensajes.innerHTML=resultado
    nuevoAtaqueDelJugador.innerHTML=ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML=ataqueEnemigo

    
    AtaqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    AtaqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')

    
    sectionMensajes.innerHTML = resultadoFinal


    let botonFuego= document.getElementById('boton-fuego')
botonFuego.disabled=true
let botonAgua= document.getElementById('boton-agua')
botonAgua.disabled=true
let botonTierra=document.getElementById('boton-tierra')
botonTierra.disabled=true

let sectionReiniciar=document.getElementById("Reiniciar")
    sectionReiniciar.style.display='block'

}


function ReiniciarJuego() {
     
    location.reload()

}



window.addEventListener('load', Iniciarjuego) 