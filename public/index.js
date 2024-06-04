// Récupération des éléments html que l'on souhaite modifier
let video = document.querySelector('.video'); 
let bouton_mute = document.getElementById('mute');
let volume_slider = document.getElementById('volumeSlider');
let progression = document.getElementById('progression');
let bouton_search = document.getElementById('bouton_searchVideo');
let player_interface = document.querySelector('.player_interface');
let input_nom = document.getElementById('input_nomVideo');
let input_code = document.getElementById('input_codeVideo');
let text_error = document.querySelector('.error');

// Récupérer le bouton pour le plein écran
/*TODO*/


const http = new XMLHttpRequest(); // Déclaration de l'élément http
let fullscreen = false; // Il nous faut traquer l'état du mode plein écran

input_nom.focus(); // A l'arrivé sur la page, le champ est selectionné

// Ajout d'un évènement en cas de pression sur entré dans le champ pour le nom de la vidéo
input_nom.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) input_code.focus(); // Si la touche 13 (entré) est pressé, passe le focus sur la champ suivant
  }
); 

// Ajout d'un évènement en cas de pression sur entré dans le champ pour le code secret
// Si la touche 13 (entré) est pressé, clique sur le bouton
/*TODO*/


// Ajout d'un evenement au bouton de recherche de vidéo
bouton_search.addEventListener
(
    'click', function()
    {
        let la_page_avec_fichier_video = http.open('GET', "http://localhost:3000/videos/"+input_nom.value+"/"+input_code.value); // On récupère la page renvoyant le fichier vidéo (ou non)
        http.send(); // On envoie la requete
        http.onreadystatechange = function(){ // Lorsque l'état change
            if(this.readyState=4 && this.status==200) // Si la requête est terminée et ne renvoie pas d'erreur
            {
                if(http.responseText.length > 3) // Si la réponse est supérieur à 0 (si un fichier vidéo a été renvoyé)
                {
                    http.abort(); // Fermeture de la requete préalablement ouverte
                    video.attributes.src.value = "http://localhost:3000/videos/"+input_nom.value+"/"+input_code.value; // Attribution d'une valeur à l'attribut src de la vidéo
                    text_error.style = "display:none";
                    player_interface.attributes.style.value = 'display:flex'; // Affichage du lecteur
                    bouton_search.attributes.style.value = 'display:none'; // On cache ensuite le bouton
                    input_nom.value=""; // Vidage du textfield (en cas de refresh)
                    input_code.value=""; // de même
                    input_nom.attributes.style.value = 'display:none'; // Puis on cache le textfield
                    input_code.attributes.style.value = 'display:none'; // de même
                    video.play(); // Lancement de la vidéo
                    video.volume = 0.5; // Initialisation du volume à 50% (en accord avec la valeur initiale du volume slider)
                }
                else if(http.responseText == "err") text_error.style = "display:flex";
            }
        }        
    }
);

// Ajout d'un évènement lors du passage de plein écran à fenêtré (ou l'inverse) pour player_interface
player_interface.addEventListener("fullscreenchange", function() {
        if(fullscreen) // Si on est en plein écran
        {
            bouton_fullscreen.innerHTML = "Fullscreen"; // Ecrit fullscreen
            fullscreen = false; // Passe fullscreen à false
        }
        else
        {
            bouton_fullscreen.innerHTML = "Windowed"; // Ecrit windowed
            fullscreen = true; // Passe fullscreen à true
        }
    }
);

// Ajout d'un evenement au bouton fullscreen au clique ('click)
// Si on est en plein écran on Passe en fenêtré (exitFullscreen())
// Si on est en fenêtré on Passe en plein écran (requestFullscreen())
/*TODO*/


// Ajout d'un evenement au bouton mute
bouton_mute.addEventListener
(
    'click', function()
    {
        if(video.muted) // Si la vidéo est déjà muté
        {
            // La démute et changer le texte du bouton
            /*TODO*/
        } 
        else // Si le son de la vidéo est toujours activé
        {
            // La mute et changer le texte du bouton
            /*TODO*/
        }
    }
);

// Ajout d'un evenement au volume slider
volume_slider.addEventListener
(
    // Lorsque la valeur du volume slider change
    'change', function()
    {
        // Suite à un changement de valeur, le volume de la vidéo devient égale à la nouvelle valeur (en %)
        /*TODO*/
    }
);

// Ajout d'un evenement à la vidéo
// Lorsque la vidéo est en cours de lecture ('timeupdate')
// La barre prend la taille du temps écoulé (en %)
/*TODO*/