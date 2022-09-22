const gameContainer= document.getElementById("game-container");
let estadoJuego= "P1";
const cuadrados= gameContainer.querySelectorAll("div");


for (let index = 0; index < cuadrados.length; index++) {
   
    cuadrados[index].addEventListener("click", () =>{

        if(cuadrados[index].textContent != "") return;

        if(estadoJuego === "P1"){
            cuadrados[index].textContent= "X"
            estadoJuego = "P2"
            
        } else if(estadoJuego === "P2"){
            cuadrados[index].textContent= "⊛"
        
            estadoJuego = "P1"
        } else return;
        
        revisarGanador()

    })
}

function revisarGanador(){
    const posiciones = [];
    
    for (let index = 0; index < cuadrados.length; index++) {
       

        posiciones.push(cuadrados[index].textContent);
        
    }
    console.log(posiciones);
}
