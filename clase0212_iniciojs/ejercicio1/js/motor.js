function sumar(){

    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;

    let suma = parseInt(n1) + parseInt(n2);

    document.getElementById("resultado").innerText = "Resultado: "+suma;



}