document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            indicators[i].classList.toggle('active', i === index);
        });
        // Cambiar la posición del slider
        const offset = -index * 100; // Mueve el slider según el índice
        document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Cambia el slide cada 5 segundos (5000 milisegundos)
    setInterval(nextSlide, 5000);

    // Agregar eventos de clic en los indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
});


document.getElementById('color-picker').addEventListener('input', function(event) {
    const selectedColor = event.target.value;
    const mockup = document.getElementById('tshirt-mockup');
    
    // Cambia el color del mockup (Asegúrate de tener un mockup que permita esto)
    mockup.style.filter = `hue-rotate(${getHueFromColor(selectedColor)}deg)`;
});

// Función para obtener el ángulo de matiz (hue) de un color hex
function getHueFromColor(hex) {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let hue;

    if (max === min) {
        hue = 0; // En caso de que sea un gris
    } else if (max === r) {
        hue = (60 * (g - b) / (max - min) + 360) % 360;
    } else if (max === g) {
        hue = (60 * (b - r) / (max - min) + 120) % 360;
    } else {
        hue = (60 * (r - g) / (max - min) + 240) % 360;
    }

    return hue;
}
