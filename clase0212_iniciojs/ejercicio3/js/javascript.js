/*
1. Crear el HTML
2. Recoger el valor de euros por el input con id "euros"
3. pasar el texto a número
4. calcular centimos. euros *100
5. mostrar el resultado por un parrafo con id "cent"

*/

function convertir(){
    let e = parseInt(document.getElementById("euros").value);
    
    let centimos = e * 100;

    document.getElementById("cent").innerText = "Céntimos: "+centimos;

}