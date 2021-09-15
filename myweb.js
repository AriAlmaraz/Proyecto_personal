function explorar(){
    var login = document.getElementById("loginForm");
    if (login.style.display==="none"){
        login.style.display = "block";
    } else{
        login.style.display = "none";
    }
}

function login(){
    var userInput = document.getElementById("user").value;
    var pwdInput = document.getElementById("pwd").value;

    if (userInput === "Ariana" && pwdInput === "123"){
        window.location.href= "./paginas/catalogo.html";
    } else {
        alert ("you shall not pass");
    }

}

function buscar(){
    var dato = document.getElementById("inputBuscador").value;
    var cards = document.getElementsByClassName("card");
    console.log (cards);

    for (var i = 0; i< cards.length; i++){
        var card = cards[i];
        var titulo = card.getElementsByClassName("card-title")[0].innerHTML;

        if(titulo.indexOf(dato)===-1){
            card.style.display = "none";
        } else {
            card.style.display = "block";
        }
    }   

}