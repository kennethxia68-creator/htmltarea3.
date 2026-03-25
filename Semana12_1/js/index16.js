// 16. Piedra, papel o tijera
let jugada = parseInt(prompt("1: Piedra, 2: Papel, 3: Tijera"))

switch (jugada) {
    case 1: alert("Elegiste Piedra"); break;
    case 2: alert("Elegiste Papel"); break;
    case 3: alert("Elegiste Tijera"); break;
    default: alert("Opción inválida")
}
