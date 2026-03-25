// 9. Paridad y signo
let numero = parseFloat(prompt("Ingrese un número:"))
let opcion = parseInt(prompt("1: Par/Impar, 2: Positivo/Negativo"))

switch (opcion) {
    case 1:
        if (numero % 2 === 0) {
            alert("Es par")
        } else {
            alert("Es impar")
        }
        break;
    case 2:
        if (numero >= 0) {
            alert("Es positivo")
        } else {
            alert("Es negativo")
        }
        break;
    default:
        alert("Opción inválida")
}