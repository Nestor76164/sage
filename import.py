import math

def calculer_circonference_et_surface():
    while True:
        try:
            # Demande du diamètre à l'utilisateur
            diametre = float(input("Entrez le diamètre du cercle en centimètres : "))

            # Vérification si le diamètre est négatif
            if diametre < 0:
                print("Valeur saisie n'est pas correcte, veuillez recommencer.")
                continue

            # Calcul du rayon
            rayon = diametre / 2

            # Calcul de la circonférence
            circonference = 2 * math.pi * rayon

            # Calcul de la surface
            surface = math.pi * rayon ** 2

            # Affichage des résultats
            print(f"La circonférence du cercle est : {circonference:.2f} cm")
            print(f"La surface du cercle est : {surface:.2f} cm²")

        except ValueError:
            # Gestion des erreurs si l'utilisateur saisit autre chose qu'un nombre
            print("Valeur saisie n'est pas correcte, veuillez recommencer.")
            continue

        # Demander si l'utilisateur souhaite effectuer un autre calcul
        choix = input("Souhaitez-vous faire un autre calcul ? (O/N) : ").strip().upper()

        # Sortir de la boucle si l'utilisateur ne veut plus faire d'autres calculs
        if choix != 'O':
            print("Fin du programme.")
            break

# Appel de la fonction pour démarrer le programme
calculer_circonference_et_surface()