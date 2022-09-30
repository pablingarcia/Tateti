const gameContainer = document.getElementById("game-container");
let estadoJuego = "P1";
const cuadrados = gameContainer.querySelectorAll("div");


for (let index = 0; index < cuadrados.length; index++) {

    cuadrados[index].addEventListener("click", () => {

        if (cuadrados[index].textContent != "") return;

        if (estadoJuego === "P1") {
            cuadrados[index].textContent = "✖"
            estadoJuego = "P2"

        } else if (estadoJuego === "P2") {
            cuadrados[index].textContent = "〇"

            estadoJuego = "P1"
        } else return;

        revisarGanador()

    })
}

function revisarGanador() {
    const posiciones = [];

    //se crea un array al cual se completa con la posición de las cruces o circulos en el tablero.

    for (let index = 0; index < cuadrados.length; index++) {


        posiciones.push(cuadrados[index].textContent);

    }

    console.log(posiciones);

    //horizontales

    //este loop indica cual de las lineas horizontales es la ganadora

    for (let index = 0; index < 3; index++) {

        if (posiciones[index * 3] === posiciones[index * 3 + 1] &&
            posiciones[index * 3] === posiciones[index * 3 + 2] &&
            posiciones[index * 3] !== "") {

            console.log("ganador linea:", index + 1);
        }
    }

    //verticales

    //este loop indica cual de las lineas verticales es la ganadora

    for (let index = 0; index < 3; index++) {

        if (posiciones[index] !== "" &&
            posiciones[index] === posiciones[index + 3] &&
            posiciones[index] === posiciones[index + 6]) {

            console.log("ganador columna:", index + 1);
        }

    }

    //oblicuas

    //estos if indican cual de las lineas oblicuas es la ganadora

    if (posiciones[0] !== "" &&
        posiciones[0] === posiciones[4] &&
        posiciones[0] === posiciones[8]) {
        console.log("ganador oblicua arriba para abajo");
    }

    if (posiciones[6] !== "" &&
        posiciones[6] === posiciones[4] &&
        posiciones[6] === posiciones[2]) {
        console.log("ganador oblicua abajo para arriba");
    }

}
