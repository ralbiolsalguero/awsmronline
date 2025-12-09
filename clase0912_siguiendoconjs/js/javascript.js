function calcular(){
    let base = parseInt(document.getElementById("base").value);
    let altura = parseInt(document.getElementById("altura").value);

    let resultado = base*altura;

    document.getElementById("area").innerText = "Area: "+resultado+" m2";
}