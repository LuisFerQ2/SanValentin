const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

let leftButtonSize = 1; // Tamaño inicial del botón izquierdo
let rightButtonPosition = 0; // Posición inicial del botón derecho

rightButton.addEventListener('click', () => {
    // Aumentar el tamaño del botón izquierdo
    leftButtonSize += 0.1; // Aumentar el tamaño
    leftButton.style.transform = `scale(${leftButtonSize})`; // Aplicar el nuevo tamaño

    // Mover el botón derecho a una nueva posición
    rightButtonPosition += 20; // Cambia este valor para ajustar la distancia
    rightButton.style.transform = `translateX(${rightButtonPosition}px)`; // Mover el botón
});
