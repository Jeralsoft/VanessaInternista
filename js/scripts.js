document.addEventListener('DOMContentLoaded', function() {
    // Botón volver arriba
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Inicializar carrusel
    const myCarousel = new bootstrap.Carousel(document.getElementById('mainCarousel'), {
        interval: 5000,
        wrap: true
    });

    // Manejar formulario
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensaje enviado correctamente');
        this.reset();
    });
});


