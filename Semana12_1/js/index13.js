// 13. Suscripciones
let plan = parseInt(prompt("1: Básico, 2: Estándar, 3: Premium"))

switch (plan) {
    case 1:
        alert("Plan Básico Q9 - Acceso limitado")
        break;
    case 2:
        alert("Plan Estándar Q15 - Acceso medio")
        break;
    case 3:
        alert("Plan Premium Q20 - Acceso completo")
        break;
    default:
        alert("Opción inválida")
}