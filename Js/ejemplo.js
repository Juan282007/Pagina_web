// =============================
// OBTENER LA PÁGINA ACTUAL
// =============================

let pagina = window.location.pathname.split("/").pop();

// si está vacío significa que es index
if (pagina === "") {
    pagina = "index.html";
}


// =============================
// ACTIVAR ENLACE DEL MENÚ
// =============================

// seleccionar todos los enlaces del menú
let enlaces = document.querySelectorAll("nav a");

// recorrer los enlaces
enlaces.forEach(function(enlace){

    let link = enlace.getAttribute("href");

    // comparar con la página actual
    if(link.includes(pagina)){
        enlace.classList.add("activo");
    }

});


// =============================
// CONTADOR DE VISITAS
// =============================

let visitas = localStorage.getItem("visitas");

if(visitas === null){
    visitas = 1;
}else{
    visitas++;
}

localStorage.setItem("visitas", visitas);


// mostrar contador si existe el elemento
let contador = document.getElementById("contador");

if(contador){
    contador.innerText = visitas;
}


// =============================
// MOSTRAR / OCULTAR EJEMPLOS
// =============================

function mostrarEjemplo(id){

    let ejemplo = document.getElementById(id);

    if(ejemplo.style.display === "none"){
        ejemplo.style.display = "block";
    }else{
        ejemplo.style.display = "none";
    }

}