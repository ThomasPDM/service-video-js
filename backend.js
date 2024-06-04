// Importation des bibliothèques
const express = require('express'); // pour lancer le serveur
const path = require('path'); // pour trouver le chemin des fichiers
const fs = require('fs'); // pour lire des fichiers


// Initialisation de app 
const app = express(); 


// Récupération de la vidéo via la route /video
app.get('/videos/:nom/:code', (req, res) => {
        // :nom et :code sont des paramètres de la route
        // console.log(req.params.nom);
        // console.log(req.params.code);

        // Création d'un objet URL pour le fichier videos.json
        const url = new URL('file:'+path.join(__dirname, 'videos.json')); 

        // Récupération du fichier videos.json
        const les_videos = JSON.parse(fs.readFileSync(url));

        // Création d'une variable permettant de savoir si il y a ou non correspondance
        let good = false; 

        // Parcours de la liste des vidéos pour chercher une correspondance
        for(i=0; i<les_videos.length; i++)
        {
            if(les_videos[i].nom == req.params.nom && les_videos[i].code == req.params.code) // Si le nom correspond
            {        
                good = true; // Indique que l'accès est autorisé
            }
        }

        // Si l'accès est autorisé, on renvoie la vidéo
        if (good) {
            res.sendFile(path.join(__dirname, 'videos', req.params.nom+'.mp4'));
        }
        else {
            res.send("rien ne correspond");
        }
    }
);


// Rend accessible depuis localhost les fichiers du dossier public
app.use(express.static(path.join(__dirname, 'public'))); // Ce dossier devient accessible


// Lancement du serveur, lance la fonction en paramètre juste après.
const PORT = 3000; // Initialisation du port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));