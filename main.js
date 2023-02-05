//FUNCIONAMIENTO HERO ------------------------------------------

//Selecciona todas las imagenes
const diapo = document.querySelectorAll(".diapositiva");

// Para que cambie el numero de la imagen 
diapo.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});



let current = 0;

let maxDiapo = diapo.length - 1;

//boton siguiente
const proxDiapo = document.querySelector(".boton-prox");

proxDiapo.addEventListener("click", function () {

    if (current === maxDiapo) {
        current = 0;
    } else {
        current++;
    }

    diapo.forEach((slide, index) => {
       slide.style.transform = `translateX(${100 * (index - current)}%)`;
  })
});

//boton previo

const prevDiapo = document.querySelector(".boton-prev");

prevDiapo.addEventListener("click", function () {

    if (current === 0) {
        current = maxDiapo;
    } else {
        current--;
    }

    diapo.forEach((slide, index) => {
       slide.style.transform = `translateX(${100 * (index - current)}%)`;
  })
});


//  Skills code


//Función llenar barra
const progreso = document.querySelector(".progress-btn")
const bar = document.getElementById("bar-skill");

progreso.addEventListener("click", function () {
    if (bar.style.width === "5%"){
    bar.style.width = "50%";
    bar.innerText = "Still Loading... Aún queda un largo camino por recorrer.";
    }else{
        bar.style.width = "5%";
        bar.innerText = "Loading...";
    }
});





