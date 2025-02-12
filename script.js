const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

let leftButtonSize = 1; // Tamaño inicial del botón izquierdo

rightButton.addEventListener('click', () => {
    // Aumentar el tamaño del botón izquierdo
    leftButtonSize += 0.1; // Aumentar el tamaño
    leftButton.style.transform = `scale(${leftButtonSize})`; // Aplicar el nuevo tamaño

    // Mover el botón derecho a una nueva posición aleatoria
    const windowWidth = window.innerWidth; // Ancho de la ventana
    const windowHeight = window.innerHeight; // Alto de la ventana

    // Calcular una nueva posición aleatoria
    const randomX = Math.random() * (windowWidth - rightButton.offsetWidth);
    const randomY = Math.random() * (windowHeight - rightButton.offsetHeight);

    // Aplicar la nueva posición al botón derecho
    rightButton.style.position = 'absolute'; // Cambiar a posición absoluta
    rightButton.style.left = `${randomX}px`;
    rightButton.style.top = `${randomY}px`;
});
