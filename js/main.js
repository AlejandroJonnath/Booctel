// 1. Scroll suave
document.querySelectorAll('nav p').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('class');
        const targetSection = document.querySelector(`.${targetId}`);
        
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// 2. Resaltado dinámico del menú
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav p');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
            current = section.classList[0]; // Usando la primera clase del <section> como id
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.classList.contains(current)) {
            link.classList.add('active');
        }
    });
});

// 3. Efectos en las imágenes de proyectos
const projectImages = document.querySelectorAll('.loginProyect, .mainGUIProyect');
projectImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.05)';
        img.style.transition = 'transform 0.3s ease';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

// 4. Efectos en iconos sociales
const socialIcons = document.querySelectorAll('nav a img');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s ease';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});
