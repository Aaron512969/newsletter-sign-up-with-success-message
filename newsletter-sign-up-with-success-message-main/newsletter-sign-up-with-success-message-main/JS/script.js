function suscrito() {

    let email = document.getElementById("elemail").value;
    // let resultado = email.includes("@.");

    // document.getElementById("correcto").innerHTML = resultado;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (emailRegex.test(email)) {

        window.location.href = "index-mensajeaceptado.html"

    } else {

    document.getElementById("emailrequerido").innerHTML = ("Valid email required");
    document.getElementById("elemail").style.backgroundColor = "#ff6f5c"
    document.getElementById("elemail").style.color = "red"
    document.getElementById("elemail").style.border = "red"

    
    }

}