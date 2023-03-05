document.addEventListener("DOMContentLoaded", function(){

    const r = document.querySelector(".r");

    const displayR = document.querySelector(".marcador-rojo");
    const botones1 = document.getElementsByClassName("boton-rojo");
    const boton1 = Array.from(botones1);

    const displayA = document.querySelector(".marcador-azul");
    const botones2 = document.getElementsByClassName("boton-azul");
    const boton2 = Array.from(botones2);

    r.addEventListener("click", function(){
        displayR.innerHTML = "0";
        displayA.innerHTML = "0";
    });

    boton1.forEach(b =>{
        b.addEventListener("click", function(){

            result = parseInt(displayR.innerHTML);

            if(b.innerHTML === "+"){
                result++
                displayR.innerHTML = result.toString();
            }
            if(b.innerHTML === "-"){
                if(displayR.innerHTML === "0"){
                    displayR.innerHTML =  "0";
                } else{
                    result--
                    displayR.innerHTML = result.toString();
                }
            }
        });
    });

    boton2.forEach(b =>{
        b.addEventListener("click", function(){
            result = parseInt(displayA.innerHTML);

            if(b.innerHTML === "+"){
                result++
                displayA.innerHTML = result.toString();
            }
            if(b.innerHTML === "-"){
                if(displayA.innerHTML === "0"){
                    displayA.innerHTML =  "0";
                } else{
                    result--
                    displayA.innerHTML = result.toString();
                }
            }
        });
    });
});