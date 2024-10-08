/* const toggleSwitch = document.getElementById('toggleSwitch1');
const observPlaceholder = document.getElementById('observ1');

// Fonction pour mettre à jour le texte en fonction de l'état du bouton
function updateObservText() {
  if (toggleSwitch.checked) {
    observPlaceholder.textContent = 'Ouvert';
    observ1.style.color = "blue";
    
  } else {
    observPlaceholder.textContent = 'Fermé';
    observ1.style.color = "red";
  }
}

// Appeler la fonction pour mettre à jour le texte lors du chargement de la page
updateObservText();

// Ajouter un écouteur d'événement pour mettre à jour le texte lorsque l'état du bouton est modifié
toggleSwitch.addEventListener('change', updateObservText);

/*------------------------------------------------ */ 
/*const openFormBtn = document.getElementById('openFormBtn');
const closeFormBtn = document.getElementById('closeFormBtn');
const paymentForm = document.getElementById('paymentForm');
const overlay = document.getElementById('overlay');

// Fonction pour ouvrir le formulaire
function openForm() {
  paymentForm.style.display = 'block';
  overlay.style.display = 'block';
}

// Fonction pour fermer le formulaire
function closeForm() {
  paymentForm.style.display = 'none';
  overlay.style.display = 'none';
}

// Ajouter un écouteur d'événement pour ouvrir le formulaire lors du clic sur le bouton "faire un paiement"
openFormBtn.addEventListener('click', openForm);

// Ajouter un écouteur d'événement pour fermer le formulaire lors du clic sur le bouton "close"
closeFormBtn.addEventListener('click', closeForm);*/