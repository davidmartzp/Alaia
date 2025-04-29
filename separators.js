/**
 * Script para mejorar la interactividad del separador "curve-separator"
 */

document.addEventListener('DOMContentLoaded', function() {
    // Detectar el "curve-separator" para la sección "Proyectos"
    const curveSeparator = document.querySelector('.curve-separator');

    // Aplicar efecto de parallax al "curve-separator"
    if (curveSeparator) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const sectionTop = curveSeparator.parentElement.offsetTop;
            const distance = scrollPosition - sectionTop;

            if (distance > -500 && distance < 500) {
                const svgElement = curveSeparator.querySelector('svg');
                if (svgElement) {
                    svgElement.style.transform = `translateY(${distance * 0.05}px)`;
                }
            }
        });
    }
});
