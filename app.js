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
    mostrarLista();
    input.value = '';
}

function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // ayuda a limpiar el campo para ingresar otro nombre
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    const amigoSorteado = document.getElementById('resultado');
    const lista = document.getElementById('listaAmigos');
    if (amigos.length === 0) {
        alert('Agrega al menos un nombre antes de sortear.');
        return;
    }
    lista.innerHTML = ''; // limpiamos {li} para mostrar el resultado final
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    amigoSorteado.innerHTML = `El amigo secreto es: ${amigos[indiceAleatorio]} 🎉`;
}