// 6. Calculadora básica
let n1 = parseFloat(prompt("Ingrese el primer número:"))
let n2 = parseFloat(prompt("Ingrese el segundo número:"))
let op = parseInt(prompt("1: Sumar, 2: Restar, 3: Multiplicar, 4: Dividir"))

switch (op) {
    case 1: alert("Resultado: " + (n1 + n2)); break;
    case 2: alert("Resultado: " + (n1 - n2)); break;
    case 3: alert("Resultado: " + (n1 * n2)); break;
    case 4:
        if (n2 === 0) {
            alert("No se puede dividir entre cero")
        } else {
            alert("Resultado: " + (n1 / n2))
        }
        break;
    default: alert("Opción inválida")
}