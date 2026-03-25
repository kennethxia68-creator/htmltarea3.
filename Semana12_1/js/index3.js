// 3. Estaciones del año
let mesEst = parseInt(prompt("Ingrese el número de un mes:"))

switch (mesEst) {
    case 12:
    case 1:
    case 2:
        alert("Invierno")
        break;
    case 3:
    case 4:
    case 5:
        alert("Primavera")
        break;
    case 6:
    case 7:
    case 8:
        alert("Verano")
        break;
    case 9:
    case 10:
    case 11:
        alert("Otoño")
        break;
    default:
        alert("Mes inválido")
}
