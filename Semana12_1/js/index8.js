// 8. Conversor de temperatura
let c = parseFloat(prompt("Ingrese Celsius:"))
let tipo = parseInt(prompt("1: Fahrenheit, 2: Kelvin"))

switch (tipo) {
    case 1:
        alert("Fahrenheit: " + ((c * 9/5) + 32))
        break;
    case 2:
        alert("Kelvin: " + (c + 273.15))
        break;
    default:
        alert("Opción inválida")
}