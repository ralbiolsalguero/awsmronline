function calcular(){
    let base = parseInt(document.getElementById("base").value);
    let altura = parseInt(document.getElementById("altura").value);

    let resultado = base*altura;

    document.getElementById("area").innerText = "Area: "+resultado+" m2";
}

function perimetro(){
    let base = parseInt(document.getElementById("base").value);
    let altura = parseInt(document.getElementById("altura").value);

    let perimetro = (base*2) + (altura*2)

    document.getElementById("perimetro").innerText = "Perimetro: "+perimetro+" m";

}