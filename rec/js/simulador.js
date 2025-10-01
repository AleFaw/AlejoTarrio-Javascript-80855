// Variables globales (Las accedo en muchas funciones asique así me queda mas comodo profe)
const opciones = ["piedra", "papel", "tijera"];
let puntajeJ1 = 0, puntajeJ2 = 0, puntajePC = 0;
let jugadorUno = '', jugadorDos = '';
let modo = 0;

function elegirModo() {
    do {
        modo = parseInt(prompt("1) Jugar con amigo\n2) Jugar con la PC"));
    } while (modo !== 1 && modo !== 2);

    jugar();
}

function jugar() {
    if (modo === 1) {
        jugadorUno = prompt("Jugador 1, decime tu nombre:");
        jugadorDos = prompt("Jugador 2, decime tu nombre:");

        do {
            let jugadaJ1 = pedirJugada(jugadorUno);
            alert("Perfecto!! " + jugadorUno + ", cerrá los ojos que ahora es turno de " + jugadorDos);
            let jugadaJ2 = pedirJugada(jugadorDos);

            let resultado = determinarGanador(jugadaJ1, jugadaJ2);
            alert(jugadorUno + " eligió: " + jugadaJ1 +
                "\n" + jugadorDos + " eligió: " + jugadaJ2 +
                "\nResultado: " + resultado);

        } while (confirm("¿Querés jugar otra ronda?"));

        alert("🏁 Juego terminado.\nMarcador final:\n" + jugadorUno + ": " + puntajeJ1 + " - " + jugadorDos + ": " + puntajeJ2);
    } else {
        jugadorUno = prompt("Decime tu nombre:");

        do {
            let jugadaJ1 = pedirJugada(jugadorUno);
            let jugadaPC = obtenerJugadaPC();

            let resultado = determinarGanador(jugadaJ1, jugadaPC);
            alert(jugadorUno + " eligió: " + jugadaJ1 +
                "\nLa PC eligió: " + jugadaPC +
                "\nResultado: " + resultado);

        } while (confirm("¿Querés jugar otra ronda?"));

        alert("🏁 Juego terminado.\nMarcador final:\n" + jugadorUno + ": " + puntajeJ1 + " - PC: " + puntajePC);
    }
}

function obtenerJugadaPC() {
    return opciones[Math.floor(Math.random() * opciones.length)];
}

function determinarGanador(jugada1, jugada2) {
    if (jugada1 === jugada2) return "Empate 🤝";

    const ganaJ1 = (jugada1 === "piedra" && jugada2 === "tijera") ||
        (jugada1 === "papel" && jugada2 === "piedra") ||
        (jugada1 === "tijera" && jugada2 === "papel");

    if (modo === 1) {
        if (ganaJ1) {
            puntajeJ1++;
            return jugadorUno + " gana esta ronda 🏆";
        } else {
            puntajeJ2++;
            return jugadorDos + " gana esta ronda 🏆";
        }
    } else {
        if (ganaJ1) {
            puntajeJ1++;
            return "Ganaste esta ronda 🎉";
        } else {
            puntajePC++;
            return "Perdiste esta ronda 😢";
        }
    }
}

function pedirJugada(nombre) {
    let jugada;
    do {
        jugada = prompt(nombre + ", ¿qué elegís?: piedra, papel o tijera").toLowerCase();
    } while (!opciones.includes(jugada));
    return jugada;
}
