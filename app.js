// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }
    amigos.push(nombre);
    console.log(amigos);
    input.value = '';
}