// Lorsque le DOM est chargé, on exécute nos scripts
document.addEventListener('DOMContentLoaded', () => {
    console.log('Script JS chargé avec succès !');
  
    // Exemple : Gérer un clic sur un lien du menu
    const navLinks = document.querySelectorAll('header nav ul li a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 10,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Autres interactions à ajouter dans la branche feature-interactions
  });