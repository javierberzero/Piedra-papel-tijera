let elejir = ["piedra", "papel", "tijera"];


let puntajeJugador = 0;
let puntajeComputadora = 0;
let empate =0;

for (let ronda = 1; ronda <= 3; ronda++) {

  let jugador1 = prompt("ingrese piedra papel o tijera").toLowerCase();
 
  while (!elejir.includes(jugador1)) {
    jugador1 = prompt("Entrada inválida. Por favor ingrese piedra, papel o tijera").toLowerCase();
  }
 
  let computadora = elejir[Math.floor(Math.random() * elejir.length)];


console.log(`jugador elije ${jugador1}`);
console.log(`la computadora elijio ${computadora}`);

if (jugador1 === "piedra" && computadora === "papel") {
  console.log("gana computadora");
  puntajeComputadora++

} else if (jugador1 === "piedra" && computadora === "tijera") {
  console.log("gana jugador 1");
puntajeJugador++

} else if (jugador1 === "piedra" && computadora === "piedra") {
  console.log("empate");
   empate++

} else if (jugador1 === "papel" && computadora === "tijera") {
  console.log("gana computadora");
  puntajeComputadora++


} else if (jugador1 === "papel" && computadora === "piedra") {
  console.log("gana jugador 1");
  puntajeJugador++

} else if (jugador1 === "papel" && computadora === "papel") {
  console.log("empate");
   empate++



} else if (jugador1 === "tijera" && computadora === "piedra") {
  console.log("gana computadora");
  puntajeComputadora++



} else if (jugador1 === "tijera" && computadora === "papel") {
  console.log("gana jugador 1");
  puntajeJugador++

} else if (jugador1 === "tijera" && computadora === "tijera") {
  console.log("empate");
  empate++
  
} else {
  console.log("algo se rompio");
}

}

if (puntajeJugador > puntajeComputadora) {
  console.log("El jugador 1 gana el juego!");
} else if (puntajeJugador < puntajeComputadora) {
  console.log("La computadora gana el juego!");
} else if (puntajeJugador == puntajeComputadora){
  console.log("El juego termina en empate!");
}
