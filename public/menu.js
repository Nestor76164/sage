// Sélectionner le bouton de menu et la fenêtre du menu
const menuToggle = document.querySelector('.menu-toggle');
const menuWindow = document.querySelector('.menu-window');
const overlay = document.querySelector(".overlay");

// Ajouter un gestionnaire d'événement 'click' au bouton de menu
menuToggle.addEventListener('click', () => {
  overlay.style.display = "block";
  menuWindow.style.display = "block";
});

// Ajouter un gestionnaire d'événement 'click' en dehors de la fenêtre du menu pour la fermer
window.addEventListener('click', (event) => {
  if (!event.target.closest('.menu-window, .menu-toggle')) {
    overlay.style.display = "none";
    menuWindow.style.display = "none";
  }
});



