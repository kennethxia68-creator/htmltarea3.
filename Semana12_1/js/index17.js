// 17. Brújula
let angulo = parseInt(prompt("Ingrese ángulo (0,90,180,270):"))

switch (angulo) {
    case 0: alert("Norte"); break;
    case 90: alert("Este"); break;
    case 180: alert("Sur"); break;
    case 270: alert("Oeste"); break;
    default: alert("Ángulo inválido")
}