// 7. Áreas de figuras
let figura = parseInt(prompt("1: Cuadrado, 2: Triángulo, 3: Círculo"))

switch (figura) {
    case 1:
        let lado = parseFloat(prompt("Ingrese el lado:"))
        alert("Área: " + (lado * lado))
        break;
    case 2:
        let base = parseFloat(prompt("Ingrese la base:"))
        let altura = parseFloat(prompt("Ingrese la altura:"))
        alert("Área: " + (base * altura) / 2)
        break;
    case 3:
        let radio = parseFloat(prompt("Ingrese el radio:"))
        alert("Área: " + (Math.PI * radio * radio))
        break;
    default:
        alert("Opción inválida")
}
