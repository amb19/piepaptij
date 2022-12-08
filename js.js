// 1 es piedra, 2 es papel, 3 es tijera

// funcion:
function aleatorio(min, max){
    return Math.floor(Math.random()* (max - min + 1)+min)
}

let jugador = 0
let min = 1
let max = 3
let pc = aleatorio(1,3)
jugador = prompt("Elige: 1 para piedrad, 2 para papel, 3 para tijera")
//alert("Elegiste " + jugador)

if(jugador == 1){
    alert("Elegiste piedra")
} else if (jugador == 2){
    alert("Elegiste papel")
} else if (jugador == 3){
    alert("Elegiste tijera") 
}else {
    alert("Elege piedra,papel o tijera")
}

// pc

if(pc == 1){
    alert("pc elige piedra")
} else if (pc  == 2){
    alert("pc elige  papel")
} else if (pc == 3){
    alert("pc elige tijera") 
}else {
    alert("Elege piedra,papel o tijera")
}

// combate

if (pc == jugador){
    alert("Empate")
} else if ( jugador == 1 && pc == 3 ){
    alert("Ganaste")
} else if (jugador == 2 && pc == 1){
    alert("Ganaste")
} else if (jugador == 3 && pc == 2){
    alert("Ganaste")
} else {
    alert("Perdiste")
}