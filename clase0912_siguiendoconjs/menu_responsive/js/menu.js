function desplegarMenu(){
    let barra = document.getElementById("barraMenu");

    if(barra.className === "menuSuperior"){
        barra.className += " responsivo";
    }else{
        barra.className = "menuSuperior";
    }
}