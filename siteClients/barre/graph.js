window.onload = function() {
    var ctx1 = document.getElementById("heartRateChart1").getContext("2d");
    var ctx2 = document.getElementById("heartRateChart2").getContext("2d");
    var ctx3 = document.getElementById("heartRateChart3").getContext("2d");
  
    var labels1 = []; // Tableau des étiquettes pour les points de données du premier graphique
    var data1 = []; // Tableau des valeurs de fréquence cardiaque du premier graphique
  
    var labels2 = []; // Tableau des étiquettes pour les points de données du deuxième graphique
    var data2 = []; // Tableau des valeurs de fréquence cardiaque du deuxième graphique
  
    var labels3 = []; // Tableau des étiquettes pour les points de données du deuxième graphique
    var data3 = []; // Tableau des valeurs de fréquence cardiaque du deuxième graphique
  
    // Fonction pour générer des données de fréquence cardiaque aléatoires pour le premier graphique
    function generateRandomData1() {
      var time = new Date().getTime();
      var heartbeat1 = Math.floor(Math.random() * (140 - 60 + 1)) + 60; // Génère une valeur aléatoire entre 60 et 140
  
      labels1.push(time);
      data1.push(heartbeat1);
  
      // Limite le nombre de points de données affichés à 20
      if (labels1.length > 25) {
        labels1.shift();
        data1.shift();
      }
      
  // Mettre à jour la valeur affichée dans le paragraphe avec l'ID "num1"
  //document.getElementById("num4").textContent = heartbeat1;
    }
  
    // Fonction pour générer des données de fréquence cardiaque aléatoires pour le deuxième graphique
    function generateRandomData2() {
      var time = new Date().getTime();
      var heartbeat2 = Math.floor(Math.random() * (140 - 60 + 1)) + 60; // Génère une valeur aléatoire entre 60 et 140
  
      labels2.push(time);
      data2.push(heartbeat2);
  
      // Limite le nombre de points de données affichés à 20
      if (labels2.length > 13) {
        labels2.shift();
        data2.shift();
      }
    }

        // Fonction pour générer des données de fréquence cardiaque aléatoires pour le deuxième graphique
        function generateRandomData3() {
            var time = new Date().getTime();
            var heartbeat3 = Math.floor(Math.random() * (140 - 60 + 1)) + 60; // Génère une valeur aléatoire entre 60 et 140
        
            labels3.push(time);
            data3.push(heartbeat3);
        
            // Limite le nombre de points de données affichés à 20
            if (labels3.length > 13) {
              labels3.shift();
              data3.shift();
            }
          }

  
    // Configuration du premier graphique
    var chart1 = new Chart(ctx1, {
      type: 'line',
      data: {
        labels: labels1,
        datasets: [{
          label: 'Variation de la consommation journalière',
          data: data1,
          borderColor: 'green',
        }]
      },
      options: {
        scales: {
            x: {
                display: false // Masque les étiquettes de l'axe X
              },
          y: {
            beginAtZero: true
          }
        },
          plugins: {
          legend: {
            display: false // Supprime l'affichage du bouton de légende
          }
        }
      }
    });
  
    // Configuration du deuxième graphique
    var chart2 = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: labels2,
        datasets: [{
          label: 'Consommation hebdomadaire',
          data: data2,
          borderColor: 'green',
          backgroundColor: 'rgba(59, 59, 203, 0.737)',
        }]
      },
      options: {
        scales: {
            x: {
                display: false // Masque les étiquettes de l'axe X
              },
          y: {
            beginAtZero: false
          }
        },
        plugins: {
        legend: {
          display: false // Supprime l'affichage du bouton de légende
        }
      }
      }
    });

        // Configuration du deuxième graphique
        var chart3 = new Chart(ctx3, {
            type: 'bar',
            data: {
              labels: labels3,
              datasets: [{
                label: 'Consommation mensuelle',
                data: data3,
                borderColor: 'gree',
                backgroundColor: 'rgba(59, 59, 203, 0.737)',
              }]
            },
            options: {
              scales: {
                x: {
                    display: false // Masque les étiquettes de l'axe X
                  },
                y: {
                  beginAtZero: false
                }
              },
              plugins: {
              legend: {
                display: false // Supprime l'affichage du bouton de légende
              }
            }
            }
          });


  
    // Génère des données de fréquence cardiaque aléatoires pour le premier graphique toutes les 2 secondes
    setInterval(function() {
      generateRandomData1();
      chart1.update(); // Met à jour le premier graphique avec les nouvelles données
    }, 2000);
  
    // Génère des données de fréquence cardiaque aléatoires pour le deuxième graphique toutes les 2 secondes
    setInterval(function() {
      generateRandomData2();
      chart2.update(); // Met à jour le deuxième graphique avec les nouvelles données
    }, 2000);

        // Génère des données de fréquence cardiaque aléatoires pour le deuxième graphique toutes les 2 secondes
        setInterval(function() {
            generateRandomData3();
            chart3.update(); // Met à jour le deuxième graphique avec les nouvelles données
          }, 2000);


  };