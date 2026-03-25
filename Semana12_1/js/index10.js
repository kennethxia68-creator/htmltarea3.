// 10. Potencia o raíz
let num = parseFloat(prompt("Ingrese un número:"))
let op2 = parseInt(prompt("1: Cuadrado, 2: Raíz"))

switch (op2) {
    case 1:
        alert("Resultado: " + (num * num))
        break;
    case 2:
        alert("Resultado: " + Math.sqrt(num))
        break;
    default:
        alert("Opción inválida")
}