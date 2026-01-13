import { animate, inView, stagger } from '@motionone/dom';

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Hero animation
  const heroTitle = document.querySelector('.hero-title') as HTMLElement;
  const heroSubtitle = document.querySelector('.hero-subtitle') as HTMLElement;
  const heroCta = document.querySelector('.hero-cta') as HTMLElement;
  
  if (heroTitle) {
    animate(heroTitle, { opacity: [0, 1], y: [30, 0] }, { duration: 0.8, delay: 0.2 });
  }
  if (heroSubtitle) {
    animate(heroSubtitle, { opacity: [0, 1], y: [20, 0] }, { duration: 0.8, delay: 0.4 });
  }
  if (heroCta) {
    animate(heroCta, { opacity: [0, 1], y: [20, 0] }, { duration: 0.8, delay: 0.6 });
  }

  // Section reveal animations
  const sections = document.querySelectorAll<HTMLElement>('.animate-section');
  sections.forEach((section) => {
    inView(section, () => {
      animate(section, { opacity: [0, 1], y: [40, 0] }, { duration: 0.8 });
    }, { margin: '-100px' });
  });

  // Card stagger animations
  const cardGroups = document.querySelectorAll<HTMLElement>('.animate-cards');
  cardGroups.forEach((group) => {
    const cards = group.querySelectorAll<HTMLElement>('.card');
    inView(group, () => {
      animate(cards, { opacity: [0, 1], y: [30, 0] }, { 
        duration: 0.6, 
        delay: stagger(0.1) 
      });
    }, { margin: '-50px' });
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar') as HTMLElement;
  if (navbar) {
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      
      lastScrollY = currentScrollY;
    });
  }

  // Button hover animations
  const buttons = document.querySelectorAll<HTMLElement>('.btn-primary, .btn-secondary');
  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      animate(button, { scale: 1.05 }, { duration: 0.2 });
    });
    
    button.addEventListener('mouseleave', () => {
      animate(button, { scale: 1 }, { duration: 0.2 });
    });
  });

  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('.mobile-menu-button') as HTMLElement;
  const mobileMenu = document.querySelector('.mobile-menu') as HTMLElement;
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      
      if (isOpen) {
        animate(mobileMenu, { opacity: [1, 0], y: [0, -20] }, { duration: 0.3 });
        setTimeout(() => {
          mobileMenu.classList.remove('open');
        }, 300);
      } else {
        mobileMenu.classList.add('open');
        animate(mobileMenu, { opacity: [0, 1], y: [-20, 0] }, { duration: 0.3 });
      }
    });
  }
});