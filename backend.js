// Importation des bibliothèques
const express = require('express'); // pour lancer le serveur
const path = require('path'); // pour trouver le chemin des fichiers
const fs = require('fs'); // pour lire des fichiers


// Initialisation de app 
const app = express(); 




// DÉBUT DES MODIFICATIONS

// Récupération de la vidéo via la route /video
app.get('/videos/:nom', (req, res) => {
    // :nom et :code sont des paramètres de la route
    console.log(req.params.nom);

    // Création d'un objet URL pour le fichier videos.json
    const url = new URL(/*TODO*/); 

    // Récupération du fichier videos.json
    const les_videos = JSON.parse(fs.readFileSync(/*TODO*/));

    // Création d'une variable permettant de savoir si il y a ou non correspondance
    /*TODO*/

    // Parcours de la liste des vidéos pour chercher une correspondance
    for(i=0; i<les_videos.length; i++)
    {
        /*TODO*/
    }

    // Si le nom correspond, on renvoie la vidéo (res.sendFile)
    /*TODO*/
}
);


// FIN DES MODIFICATIONS





// Rend accessible depuis localhost les fichiers du dossier public
app.use(express.static(path.join(__dirname, 'public'))); // Ce dossier devient accessible


// Lancement du serveur, lance la fonction en paramètre juste après.
const PORT = 3000; // Initialisation du port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));