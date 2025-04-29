$(document).ready(function(){
    // Esperar a que se carguen las secciones
    setTimeout(function() {
        // Inicializar slider de proyectos
        $('.projects-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
            arrows: true,
            prevArrow: $('.projects-prev'),
            nextArrow: $('.projects-next'),
            appendDots: $('.projects-dots'),
            infinite: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: true
                    }
                }
            ]
        });

        // Inicializar slider de novedades
        $('.news-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            arrows: true,
            prevArrow: $('.news-prev'),
            nextArrow: $('.news-next'),
            appendDots: $('.news-dots'),
            infinite: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: true
                    }
                }
            ]
        });
        
        // Función para igualar alturas
        function equalizeCardHeights(sliderClass) {
            setTimeout(function() {
                var maxHeight = 0;
                $(sliderClass + ' .slick-slide').each(function() {
                    var slideHeight = $(this).height();
                    maxHeight = Math.max(maxHeight, slideHeight);
                });
                $(sliderClass + ' .slick-slide').height(maxHeight);
            }, 100);
        }
        
        // Aplicar equalización
        equalizeCardHeights('.projects-slider');
        equalizeCardHeights('.news-slider');
        
        // Re-aplicar cuando cambie la ventana
        $(window).resize(function() {
            equalizeCardHeights('.projects-slider');
            equalizeCardHeights('.news-slider');
        });
    }, 1000);
});
