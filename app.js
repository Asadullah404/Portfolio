document.addEventListener('DOMContentLoaded', function() {
    // Typed.js initialization
    const typed1 = new Typed('.multiple-text', {
      strings: ['MERN Developer', 'Freelancer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });
  
    const typed2 = new Typed('.about-me', {
      strings: ['Focused', 'Passionate', 'Quick Learner', 'Team Leader'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });
  
    // CV download functionality
    const downloadLink = document.getElementById('downloadLink');
    if (downloadLink) {
      downloadLink.addEventListener('click', function() {
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute('href', 'path/to/your/cv.pdf');
        downloadAnchor.setAttribute('download', 'your-cv.pdf');
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        document.body.removeChild(downloadAnchor);
      });
    } else {
      console.error('Download link element not found');
    }
  
    // Toggle menu icon
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    if (menuIcon && navbar) {
      menuIcon.onclick = function() {
        this.classList.toggle('bx-x');
        navbar.classList.toggle('active');
      };
    } else {
      console.error('Menu icon or navbar element not found');
    }
  
    // Scroll sections active link
    window.onscroll = function() {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('header nav a');
      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
          });
        }
      });
  
      // Sticky navbar
      const header = document.querySelector('header');
      if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
      } else {
        console.error('Header element not found');
      }
  
      // Remove toggle icon and navbar when clicking navbar link
      if (menuIcon && navbar) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
      }
    };
  
    // Scroll reveal
    if (typeof ScrollReveal === 'function') {
      ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200
      }).reveal('.home-content, .heading', { origin: 'top' })
        .reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' })
        .reveal('.home-content h1, .about-img', { origin: 'left' })
        .reveal('.home-content p, .about-content', { origin: 'left' });
    } else {
      console.error('ScrollReveal is not loaded');
    }
});
