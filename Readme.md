Association Rugby

Ce projet est une application web pour gérer les membres d'une association de rugby. Il inclut un système de connexion avec des rôles d'administrateur et d'utilisateur, un formulaire pour ajouter des membres, une liste des membres, et un tableau de bord avec des statistiques et un graphique des adhérents.
Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

    Node.js (inclut npm)
    Un éditeur de texte comme Visual Studio Code

Installation

    Clonez ce dépôt ou téléchargez les fichiers source.

    bash

git clone https://github.com/votre-utilisateur/association-rugby.git
cd association-rugby

Installez http-server. http-server est un serveur HTTP simple et léger pour Node.js.

bash

    npm install -g http-server

Utilisation

    Naviguez vers le répertoire de votre projet :

    bash

cd /path/to/your/project

Démarrez le serveur :

bash

http-server

Ouvrez votre navigateur et allez à l'adresse suivante :

arduino

http://localhost:8080

Par défaut, http-server sert les fichiers sur le port 8080. Si ce port est déjà utilisé, vous pouvez spécifier un autre port avec l'option -p :

bash

http-server -p 8000

Et accédez à l'adresse :

arduino

    http://localhost:8000

Structure du Projet

    index.html : Le fichier HTML principal.
    styles.css : Le fichier CSS pour le style de l'application.
    scripts.js : Le fichier JavaScript pour la logique de l'application.
    members.json : Le fichier JSON contenant les données des membres et des utilisateurs.

Fichiers Clés
index.html

Ce fichier contient la structure HTML de l'application, y compris :

    Un formulaire de connexion pour les utilisateurs et les administrateurs.
    Un formulaire pour ajouter des membres (visible uniquement pour les administrateurs).
    Une liste des membres (avec des restrictions d'affichage pour les utilisateurs).
    Un tableau de bord avec des statistiques et un graphique des adhérents.

styles.css

Ce fichier contient les styles pour l'application, y compris les styles pour :

    Le formulaire de connexion.
    Le formulaire pour ajouter des membres.
    La liste des membres.
    Le tableau de bord.

scripts.js

Ce fichier contient la logique JavaScript pour :

    Charger les membres et les utilisateurs depuis le fichier JSON.
    Gérer la connexion des utilisateurs et des administrateurs.
    Afficher les sections appropriées en fonction du rôle de l'utilisateur connecté.
    Ajouter des membres à la liste (seulement pour les administrateurs).
    Mettre à jour le tableau de bord avec des statistiques.
    Afficher un graphique des adhérents.

members.json

Ce fichier contient les données initiales des membres et des utilisateurs. Voici un exemple de structure :


    {
    "members": [
        { "name": "Antoine Dupont", "email": "antoine@example.com", "majeur": true, "licence payée": true },
        
        { "name": "Jeanne Rouge", "email": "jeanne@example.com", "majeur": true, "licence payée": false },
        
        { "name": "Pierre Leroy", "email": "pierre@example.com", "majeur": true, "licence payée": true },
        
        { "name": "Marie Lefevre", "email": "marie@example.com", "majeur": false, "licence payée": false },
        
        { "name": "Pauline Rousseau", "email": "pauline@example.com", "majeur": true, "licence payée": true }
        
    ],
    "users": [
        { "username": "admin", "password": "adminpass", "role": "admin" },
        { "username": "user", "password": "userpass", "role": "user" }
    ]
    }
