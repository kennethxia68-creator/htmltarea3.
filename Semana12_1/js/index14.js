// 14. Divisas
let dinero = parseFloat(prompt("Ingrese cantidad:"))
let moneda = parseInt(prompt("1: Dólares, 2: Euros, 3: Libras"))

switch (moneda) {
    case 1:
        alert("USD: " + (dinero * 0.13))
        break;
    case 2:
        alert("EUR: " + (dinero * 0.12))
        break;
    case 3:
        alert("GBP: " + (dinero * 0.10))
        break;
    default:
        alert("Opción inválida")
}