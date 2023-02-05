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
    bar.innerText = "Queda mucho aún...";
    }else{
        bar.style.width = "5%";
        bar.innerText = "Loading...";
    }
});


//Ver skills

const skillsBtn = document.querySelector(".skill-btn");

//Json con las habilidades
let skill = '{"skills": [' +
'{"skillName":"Entendimiento de POO", "descripcion": "Con la práctica he logrado obtener un mejor entendimiento de esta forma de programar mediante la práctica con diferentes ejercicios y un repaso constante a la teoría."},' +
'{"skillName":"Rapidez para aprender un nuevo lenguaje", "descripcion": "Tras haber aprendido los aspectos básicos de un lenguaje de programación inicial (en mi caso Python) y asimilarlos, me ha permitido entender mejor otros lenguajes sin necesidad de estudiarlos a fondo, es decir, soy capaz de extrapolar los conocimientos que tengo sobre uno a otro lenguaje sin demasiada complicación, lo que hace más rápido el proceso de aprendizaje."},' +
'{"skillName":"Mejor entendimiento de la lógica de programación", "descripcion": "Con el uso de una gran variedad de ejercicios, he podido desarrollar una mayor facilidad para analizar un problema y traducirlo a la lógica de programación."},' +
'{"skillName":"Interés en la tecnología", "descripcion": "Desde siempre he tenido un gran interés en el mundo de la tecnología y siempre me ha gustado curiosear cosas en mi computadora para arreglarla o modificarla como me gusta, por lo tanto aunque no tengo un conocimiento tan amplio como me gustaría, creo que sí facilita mi entendimiento sobre algunos aspectos básicos del mundillo."}]}';

//convertir el json a Objeto

const skillJson = JSON.parse(skill)


skillsBtn.addEventListener("click", function() {
    
    document.querySelector(".skills-chart").innerHTML =

    `
    <div class="skill-post skill1">
        <h3 class="skill-title ">${skillJson.skills[0].skillName}</h3>
        <p class="skill-description"> ${skillJson.skills[0].descripcion}
        </p>
    </div>

    <div class="skill-post skill2">
        <h3 class="skill-title">${skillJson.skills[1].skillName}</h3>
        <p class="skill-description">${skillJson.skills[1].descripcion}
        </p>
    </div>

    <div class="skill-post skill3">
        <h3 class="skill-title">${skillJson.skills[2].skillName}</h3>
        <p class="skill-description">${skillJson.skills[2].descripcion}
        </p>
    </div>

    <div class="skill-post skill4">
        <h3 class="skill-title">${skillJson.skills[3].skillName}</h3>
        <p class="skill-description">${skillJson.skills[3].descripcion}
        </p>
    </div>`
     
});



