const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});

/*const changeTextCheckbox = document.getElementById('changeTextCheckbox');
const usernameInput = document.getElementById('usernameInput');

changeTextCheckbox.addEventListener('change', function() {
   if (changeTextCheckbox.checked) {
      usernameInput.value = 'Nouveau texte';
   } else {
      usernameInput.value = 'AAAAAAAA'; // Réinitialiser le texte à sa valeur par défaut
   }
}); */

const changeTextCheckbox = document.getElementById('changeTextCheckbox');
const usernameLabel = document.querySelector('label[for="username"]');
const passwordLabel = document.querySelector('label[for="password"]');

// Fonction pour mettre à jour le texte des labels en fonction de l'état de la checkbox
function updateLabels() {
   if (changeTextCheckbox.checked) {
      usernameLabel.textContent = 'Entrez votre numero du compteur';
      passwordLabel.textContent = 'Entrez votre mot de passe';
   } else {
      usernameLabel.textContent = usernameLabel.getAttribute('data-default-label');
      passwordLabel.textContent = passwordLabel.getAttribute('data-default-label');
   }
}

// Appeler la fonction pour mettre à jour les labels lors du chargement de la page
updateLabels();

// Ajouter un écouteur d'événement pour mettre à jour les labels lorsque la checkbox est modifiée
changeTextCheckbox.addEventListener('change', updateLabels);