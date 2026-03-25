// 11. Cajero automático
let saldo = 1000
let accion = parseInt(prompt("1: Ver saldo, 2: Depositar, 3: Retirar"))

switch (accion) {
    case 1:
        alert("Saldo: Q" + saldo)
        break;
    case 2:
        let deposito = parseFloat(prompt("Ingrese monto:"))
        saldo += deposito
        alert("Nuevo saldo: Q" + saldo)
        break;
    case 3:
        let retiro = parseFloat(prompt("Ingrese monto:"))
        if (retiro > saldo) {
            alert("Fondos insuficientes")
        } else {
            saldo -= retiro
            alert("Nuevo saldo: Q" + saldo)
        }
        break;
    default:
        alert("Opción inválida")
}