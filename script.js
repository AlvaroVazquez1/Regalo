// Array de mensajes románticos
const romanticMessages = [
    "Eres el color más bonito en mi vida.",
    "Cada momento contigo es mágico.",
    "Te amo más de lo que las palabras pueden decir.",
    "Hoy es otro día especial contigo.",
    "Gracias por existir en mi vida.",
    "Tu sonrisa ilumina mis días.",
    "Mi mundo es mejor porque estás en él.",
];

// Función para cambiar el color de fondo aleatoriamente
function changeBackgroundColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}

// Función para mostrar un mensaje aleatorio
function showRomanticMessage() {
    const messageElement = document.getElementById("message");
    const randomIndex = Math.floor(Math.random() * romanticMessages.length);
    messageElement.textContent = romanticMessages[randomIndex];
}

// Reproducir o pausar música
function toggleMusic() {
    const audioElement = document.getElementById("backgroundMusic");
    if (audioElement.paused) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
}

// Iniciar todo cuando la página cargue
window.onload = () => {
    changeBackgroundColor();
    showRomanticMessage();
};
