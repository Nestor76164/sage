// Générer une valeur aléatoire entre 0 et 100
function generateRandomValue() {
    return Math.floor(Math.random() * 101);
  }
  
  // Mettre à jour la barre de progression avec une nouvelle valeur
  function updateProgressBar() {
    var progressBar = document.getElementById('progressBar');
    var progressValue = document.getElementById('progressValue');
    var value = generateRandomValue();
  
    progressBar.style.height = value + '%';
    progressValue.textContent = value + '%';
  }
  
  // Mettre à jour la barre de progression toutes les 2 secondes
  setInterval(updateProgressBar, 2000);