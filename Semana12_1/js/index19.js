// 19. Error HTTP
let codigo = parseInt(prompt("Ingrese código HTTP:"))

switch (codigo) {
    case 200: alert("OK"); break;
    case 404: alert("No encontrado"); break;
    case 500: alert("Error del servidor"); break;
    case 403: alert("Prohibido"); break;
    default: alert("Código desconocido")
}
