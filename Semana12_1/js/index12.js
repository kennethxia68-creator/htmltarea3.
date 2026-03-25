
// 12. Sistema de notas
let nota = parseInt(prompt("Ingrese una nota (1-10):"))

switch (true) {
    case (nota >= 1 && nota <= 4):
        alert("Insuficiente")
        break;
    case (nota <= 6):
        alert("Suficiente")
        break;
    case (nota <= 8):
        alert("Notable")
        break;
    case (nota <= 10):
        alert("Sobresaliente")
        break;
    default:
        alert("Nota inválida")
}