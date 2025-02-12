const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

rightButton.addEventListener('click', () => {
    let size = 1; // Tamaño inicial
    const interval = setInterval(() => {
        size += 0.1; // Aumentar el tamaño
        leftButton.style.transform = `scale(${size})`; // Aplicar el nuevo tamaño

        // Detener el aumento después de alcanzar un tamaño máximo
        if (size >= 2) {
            clearInterval(interval);
        }
    }, 100); // Aumentar cada 100 ms
});
