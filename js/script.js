document.addEventListener('DOMContentLoaded', () => {
    let indiceActual = 0;
    const diapositivas = document.querySelectorAll('.carousel img'); 
    const totalDiapositivas = diapositivas.length;

    // Inicializa la primera imagen como visible
    function inicializarCarrusel() {
        diapositivas.forEach((diapositiva, index) => {
            diapositiva.classList.toggle('active', index === 0); // Muestra solo la primera imagen
        });
    }

    // Muestra la siguiente imagen
    function mostrarSiguienteDiapositiva() {
        diapositivas[indiceActual].classList.remove('active'); // Oculta la imagen actual
        indiceActual = (indiceActual + 1) % totalDiapositivas; // Incrementa el índice, vuelve a 0 si se pasa
        diapositivas[indiceActual].classList.add('active'); // Muestra la nueva imagen
    }

    // Llama a la función de inicialización
    inicializarCarrusel();

    // Cambia la imagen cada 3 segundos (3000 ms)
    setInterval(mostrarSiguienteDiapositiva, 3000);
});
