// 20. Tiempo
let segundos = parseFloat(prompt("Ingrese segundos:"))
let conv = parseInt(prompt("1: Minutos, 2: Horas"))

switch (conv) {
    case 1:
        alert("Minutos: " + (segundos / 60))
        break;
    case 2:
        alert("Horas: " + (segundos / 3600))
        break;
    default:
        alert("Opción inválida")
}