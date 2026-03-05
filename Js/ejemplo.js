if (!sessionStorage.getItem("inicioVisitado")) {
    alert("Bienvenido al Blog Educativo HTML");
    sessionStorage.setItem("inicioVisitado", "true");
}


let menu = document.querySelectorAll(".menu");

menu.forEach(opcion => {
    opcion.addEventListener("mouseover", function(){
        this.style.color = "#ADD8E6";
    });

    opcion.addEventListener("mouseout", function(){
        this.style.color = "#ffffff";
    });
});