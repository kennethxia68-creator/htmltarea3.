// 15. Impuestos
let salario = parseFloat(prompt("Ingrese salario:"))
let tipoEmp = parseInt(prompt("1: Público, 2: Privado, 3: Independiente"))

switch (tipoEmp) {
    case 1:
        alert("Impuesto: " + (salario * 0.10))
        break;
    case 2:
        alert("Impuesto: " + (salario * 0.15))
        break;
    case 3:
        alert("Impuesto: " + (salario * 0.08))
        break;
    default:
        alert("Opción inválida")
}
