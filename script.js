document.addEventListener("DOMContentLoaded", function () {
    // 🎵 Écouteur pour la musique de fond
    const music = document.getElementById("background-music-new");

    if (music) {
        console.log("🟢 Musique trouvée, tentative de lecture...");
        music.volume = 0.5;

        document.addEventListener("click", function () {
            if (music.paused) {
                music.play().catch(error => console.warn("🔇 Lecture automatique bloquée :", error));
            }
        }, { once: true });
    } else {
        console.error("❌ Erreur : La musique de fond n'a pas été trouvée !");
    }

    // 🎨 Écouteur pour l'image et les éléments cachés
    const randomImage = document.getElementById("randomImage");
    const socialLinks = document.getElementById("social-links");

    // Si l'image existe
    if (randomImage) {
        randomImage.addEventListener("click", function () {
            // Cache l'image au clic
            randomImage.style.display = "none";
            
            // Affiche les liens sociaux au clic
            if (socialLinks) {
                socialLinks.style.display = "flex";
            }
        });
    }

    // 🎵 Change l'image et la musique aléatoirement
    const audioFiles = [
        "1.wav", "1ROCKU.wav", "1-Welcome.wav", "2 dnb dream core.wav", "2 remaster.wav",
        "2.wav", "2-Legal Money.wav", "3 ENFIN DU BON A FINIR MIXED.wav", "3.5 kids play.wav",
        "3.mp3", "3.wav", "3-Underdog God (feat timo) (2Big L x Outsidaz).wav", "4 punchy percussee tondeuse remaster.wav",
        "4 punchy percussee tondeuse.wav", "4 seul.mp3", "4.5 a lancienne.wav", "4-W424 (feat Only1Dims).wav",
        "5 BOUNCE IN THE ATTIC.wav", "5 interlude massacre.wav", "5-Shawty.wav", "6 sample japonais.wav",
        "6.wav", "6-Nozbone.wav", "7 ADD MORE INSANITY TO THE THING.wav", "7 DIGITALIST MIXED.wav",
        "7.5 jazz.wav", "8 ambiant.wav", "8 jolie loop a voir remaster.wav", "8.wav", "9 A CONTINUER.wav",
        "9.wav", "10.wav", "accoustic.wav", "ADD MORE INSANITY TO THE THING.wav", "ATTAKP3.mp3",
        "Back To LoneBay.wav", "calmdown.mp3", "Could He Rewind.wav", "Inbetween Sandman’s Feelings.wav",
        "Is that a dream...wav", "It Doesn't Matter After All....wav", "izdatadrim.wav", "jolie loop a voir.mp3",
        "Life Was Different Life Was Different.wav", "minecraft.wav", "New World (Hi).wav", "Old Spaces Everywhere.wav",
        "Ok, Bye Then !.wav", "punchy percussee tondeuse.mp3", "punchy percussee tondeuse.wav",
        "Remembering, (B13100).wav", "seul.wav", "So Gentle He Plays.wav", "The Box Opened.wav",
        "The Sandman.wav", "tracklist.wav", "Trapped Inside The Music Box.wav", "Unfortunately.wav",
        "Universal Trip.wav", "untitled.wav", "When Life Was Different..wav", "Why Would He Risk It.wav"
    ];

    const images = [
        "1.png", "2.jpg", "3.jpg", "4.jpg", "5.png",
        "6.png", "7.jpg", "8.png"
    ];

    const imageElement = document.getElementById("randomImage");
    let currentAudio = new Audio();

    function changeImageAndPlayMusic() {
        // 🎵 Choisir une musique aléatoire
        let randomMusicIndex = Math.floor(Math.random() * audioFiles.length);
        let selectedMusic = audioFiles[randomMusicIndex];

        // 🎵 Arrêter la musique actuelle si elle est en lecture
        if (!currentAudio.paused) {
            currentAudio.pause();
        }

        // 🎵 Lire la nouvelle musique
        currentAudio.src = "music/" + selectedMusic;
        currentAudio.volume = 0.5;

        currentAudio.play().catch(error => {
            console.warn("🔇 Impossible de jouer l'audio :", error);
            alert("La musique n'a pas pu être lue, veuillez réessayer.");
        });

        // 🎨 Changer l'image aléatoirement
        let randomImageIndex = Math.floor(Math.random() * images.length);
        imageElement.src = "images/" + images[randomImageIndex];
    }

    if (imageElement) {
        // Charger une image et une musique au début
        changeImageAndPlayMusic();

        // Changer l'image et la musique en cliquant dessus
        imageElement.addEventListener("click", changeImageAndPlayMusic);
    }

    // 🎨 Gestion du popup "Join Us"
    var joinUsImage = document.getElementById("contact-image"); // Image "Join Us"
    var joinUsModal = document.getElementById("joinUsModal");  // Popup modale
    var closeModalButton = document.getElementById("closeModalButton"); // Bouton pour fermer le modal

    if (joinUsImage) {
        joinUsImage.addEventListener("click", function () {
            joinUsModal.style.display = "block";  // Afficher le popup
            const elements = document.getElementsByClassName('hidden');
            elements.forEach(function(element){
                element.classList.remove('hidden');
            });
        });
    }

    // 🎨 Désactiver le défilement au chargement de la page
    if (!document.body.classList.contains('no-scroll')) {
        document.body.classList.add('no-scroll');
    }

    // 🎵 Activation du défilement et changement de la musique au clic
    var joinImage = document.getElementById("joinImage"); // Image Join Us
    if (joinImage) {
        joinImage.addEventListener("click", function() {
            // Cache l'image "Join Us"
            this.style.display = "none";

            // Affiche le menu des boutons après le clic
            document.getElementById("menu").classList.remove("hidden");

            // Afficher le volume après le clic
            document.getElementById("volume-container").classList.remove("hidden");

            // Jouer la musique au premier clic
            var music = document.getElementById("background-music");
            music.play();

            // Réactive le défilement après le clic
            document.body.classList.remove('no-scroll');
        });
    }

    var joinUs = document.getElementById('joinImage');
    if (joinUs) {
        joinUs.addEventListener("click", function () {
            document.getElementsByClassName('hidden').classList.remove('hidden');
        });
    }
});

