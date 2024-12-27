// Simulation des valeurs pour les paramètres vitaux
let temperature = 45;
//let cardiaque = 70;
//let spo2 = 98;
let pression = "120/80";

// Fonction pour simuler les changements des valeurs
function miseAJourValeurs() {
    temperature = (36.0 + Math.random() * 1.0).toFixed(1);
    //cardiaque = Math.floor(65 + Math.random() * 10);
    //spo2 = Math.floor(97 + Math.random() * 2);
    //pression = `${Math.floor(110 + Math.random() * 10)}/${Math.floor(70 + Math.random() * 10)}`;

    document.getElementById("temperature").textContent = temperature + "°C";
    //document.getElementById("cardiaque").textContent = cardiaque + " bpm";
    //document.getElementById("spo2").textContent = spo2 + "%";
    document.getElementById("pression").textContent = pression + " mmHg";
}

// Fonction pour ouvrir/fermer le menu
document.getElementById('menuToggle').addEventListener("click", function() {
    const menu = document.getElementById("menu");
    // Vérification de l'état actuel du menu (visible ou non)
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('show');
    } else {
        menu.classList.remove('show');
        menu.classList.add('hidden');
    }
});

// Fonction pour changer de mode clair à sombre
document.getElementById("modeToggle").addEventListener("click", function() {
    const body = document.body;
    // Toggle entre le mode clair et le mode sombre
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
});

// Mettre à jour les valeurs toutes les 2 secondes
setInterval(miseAJourValeurs, 2000);

