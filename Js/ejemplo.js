if (!localStorage.getItem("alertMostrado")) {
    alert("Bienvenido al Blog Educativo HTML");
    localStorage.setItem("alertMostrado", "true");
}