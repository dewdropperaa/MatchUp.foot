document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Gestion du Menu Mobile (Toggle) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Fermer le menu lors du clic sur un lien (sur mobile)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                }
            });
        });
    }

    // Ajout de la classe 'active' pour afficher le menu en CSS mobile
    /* Ajoutez ce CSS dans style.css pour le menu mobile :
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex;
        }
    }
    */


    // --- 2. Animation au Scroll (Simple Fade-in) ---
    // Les éléments auront la classe CSS 'animate-on-scroll'
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Cibler les sections pour l'animation
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('animate-on-scroll');
        observer.observe(section);
    });
    
    // Ajouter l'animation au Mockup d'App
    const mockup = document.querySelector('.app-mockup');
    if (mockup) {
        mockup.classList.add('animate-on-scroll');
        observer.observe(mockup);
    }
});

/*
    N'oubliez pas d'ajouter les classes CSS correspondantes 
    dans 'style.css' pour l'animation:

    .animate-on-scroll {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }

    .animate-on-scroll.visible {
        opacity: 1;
        transform: translateY(0);
    }
*/