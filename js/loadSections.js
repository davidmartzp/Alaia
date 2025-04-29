document.addEventListener('DOMContentLoaded', function() {
    // Lista de secciones a cargar
    const sections = [
        { id: 'header-container', file: 'sections/header.html' },
        { id: 'hero-container', file: 'sections/hero.html' },
        { id: 'nosotros-container', file: 'sections/nosotros.html' },
        { id: 'video-container', file: 'sections/video.html' }, // Nueva sección de video
        { id: 'proyectos-container', file: 'sections/proyectos.html' },
        { id: 'novedades-container', file: 'sections/novedades.html' },
        { id: 'contacto-container', file: 'sections/contacto.html' },
        { id: 'footer-container', file: 'sections/footer.html' }
    ];

    // Función para cargar una sección
    function loadSection(section) {
        return fetch(section.file)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                document.getElementById(section.id).innerHTML = html;
                return section;
            })
            .catch(error => {
                console.error(`Error cargando ${section.file}:`, error);
            });
    }

    // Cargar todas las secciones en orden
    let chain = Promise.resolve();
    
    sections.forEach(section => {
        chain = chain.then(() => loadSection(section));
    });

    // Inicializar funcionalidades después de cargar todas las secciones
    chain.then(() => {
        // Reactivar el smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Reactivar efecto de scroll para logo y header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            const logo = document.querySelector('.logo');
            const logoImg = document.querySelector('.logo-img');
            
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
                logo.classList.add('logo-scrolled');
                logoImg.classList.add('logo-img-scrolled');
            } else {
                header.classList.remove('header-scrolled');
                logo.classList.remove('logo-scrolled');
                logoImg.classList.remove('logo-img-scrolled');
            }

            // Highlight active menu item based on scroll position
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.desktop-nav .nav-links li');
            
            let currentSection = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if(pageYOffset >= (sectionTop - 200)) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(li => {
                li.classList.remove('active');
                if(li.querySelector('a').getAttribute('href') === '#' + currentSection) {
                    li.classList.add('active');
                }
            });
            
            // Activar animaciones scroll-reveal
            document.querySelectorAll('.scroll-reveal').forEach(element => {
                const position = element.getBoundingClientRect();
                
                // Si el elemento está visible en el viewport
                if(position.top < window.innerHeight - 100) {
                    element.classList.add('revealed');
                }
            });
        });
        
        // Inicializar clases scroll-reveal en elementos que deberían animarse
        document.querySelectorAll('.mission-box, .vision-box, .project-card, .news-card, .contact-card').forEach(el => {
            el.classList.add('scroll-reveal');
        });
        
        // Reactivar funcionalidad del menú móvil
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
        const body = document.body;

        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', () => {
                mobileMenu.classList.toggle('show-mobile-menu');
                // Añadir/quitar clase al body para prevenir scroll cuando el menú está abierto
                body.classList.toggle('menu-open');
                
                // Cambiar el ícono del botón dependiendo si el menú está abierto o cerrado
                const menuIcon = mobileMenuToggle.querySelector('i');
                if (mobileMenu.classList.contains('show-mobile-menu')) {
                    menuIcon.classList.remove('fa-bars');
                    menuIcon.classList.add('fa-times');
                } else {
                    menuIcon.classList.remove('fa-times');
                    menuIcon.classList.add('fa-bars');
                }
            });
        }
        
        if (mobileMenuLinks) {
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Cerrar el menú
                    mobileMenu.classList.remove('show-mobile-menu');
                    body.classList.remove('menu-open');
                    
                    // Restaurar icono
                    const menuIcon = mobileMenuToggle.querySelector('i');
                    menuIcon.classList.remove('fa-times');
                    menuIcon.classList.add('fa-bars');
                    
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    setTimeout(() => {
                        targetSection.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }, 300);
                });
            });
        }
        
        // Reactivar funcionalidad de separadores de hilos
        if (typeof createThreadLines === 'function') {
            createThreadLines();
        }
    });
});
