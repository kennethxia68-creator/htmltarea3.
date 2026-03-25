// 4. Días del mes
let mesDias = parseInt(prompt("Ingrese el número de un mes:"))

switch (mesDias) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        alert("Tiene 31 días")
        break;
    case 4: case 6: case 9: case 11:
        alert("Tiene 30 días")
        break;
    case 2:
        alert("Tiene 28 días")
        break;
    default:
        alert("Mes inválido")
}
