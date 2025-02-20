if (window.matchMedia("(max-width: 768px)").matches) {
    document.body.classList.add("mobile");
}

document.addEventListener("DOMContentLoaded", function () {
    const randomImage = document.getElementById("randomImage");
    const audioName = document.getElementById("audioName"); // Élément pour afficher le nom du fichier audio
    const volumeControl = document.getElementById("volumeControl"); // Élément pour la barre de volume

    // Liste mise à jour des fichiers audio
    const audioFiles = [
    "1.mp3", "1ROCKU.mp3", "1Welcome.mp3", "dnb dream core.mp3", "remaster.mp3",
    "Legal Money.mp3", "ENFIN DU BON A FINIR MIXED.mp3", "3.5 kids play.mp3",
    "3.mp3", "Underdog God (feat timo) (zBig L x Outsidaz).mp3", "punchy perceuse tondeuse remaster.mp3",
    "4 seul.mp3", "4.5 a lancienne.mp3", "W42d (feat Only1Dims).mp3",
    "5bounceintheattic.mp3", "interlude massacre.mp3", "Shawty.mp3", "sample japonais.mp3",
    "6.mp3", "Nozbone.mp3", "DIGITALUST MIXED.mp3",
    "ambiant.mp3", "jolie loop a voir remaster.mp3", "8.mp3", "A CONTINUER.mp3",
    "9.mp3", "10.mp3", "accoustic.mp3", "ADD MORE INSANITY TO THE THING.mp3", "ATTAKP3.mp3",
    "Back To LoneBay.mp3", "calmdown.mp3", "Could He Rewind.mp3", "Inbetween Sandman's Feelings.mp3",
    "Is that a dream..mp3", "It Doesn't Matter After All....mp3",
    "Life Was Different Life Was Different.mp3", "minecraft.mp3", "New World (Hi).mp3", "Odd Spaces Everywhere.mp3",
    "Ok, Bye Then !.mp3",
    "Remembering, (B13100).mp3", "seul.mp3", "So Gentle He Plays.mp3", "The Box Opened.mp3",
    "The Sandman.mp3", "Trapped Inside The Music Box.mp3", "Unfortunately.mp3",
    "Universal Trip.mp3", "untitled.mp3", "When Life Was Different..mp3", "Why Would He Risk It.mp3"
    ];

    const images = [
        "1.png", "2.jpg", "4.jpg", "5.png","cover 4.jpg","cover 5.jpg",
        "6.png","8.png","cover 1.jpg","cover 2.jpg","cover 3.jpg",
    ];

    const imageElement = document.getElementById("randomImage");
    let currentAudio = new Audio();

    // Fonction pour changer la teinte de l'image de fond automatiquement
    function changeBackgroundHue() {
        const hueValue = Math.floor(Math.random() * 360); // Génère une teinte aléatoire entre 0 et 360
        document.body.style.filter = `hue-rotate(${hueValue}deg)`; // Applique un filtre de teinte (hue-rotate) à l'élément body
    }

    // Applique le changement de teinte toutes les 5 secondes (5000 ms)
    setInterval(changeBackgroundHue, 5000);

    // Fonction pour changer l'image et jouer la musique
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
        currentAudio.volume = volumeControl.value; // Réglez le volume à la valeur de la barre de volume

        currentAudio.play().catch(error => {
            console.warn("🔇 Impossible de jouer l'audio :", error);
           
        });

        // 🎨 Changer l'image aléatoirement
        let randomImageIndex = Math.floor(Math.random() * images.length);
        imageElement.src = "images/" + images[randomImageIndex];

        // Afficher le nom de la musique en cours
        audioName.textContent = "Musique : " + selectedMusic;
    }

    // Si l'élément image est présent, charger une image et une musique au début
    if (imageElement) {
        changeImageAndPlayMusic();

        // Changer l'image et la musique en cliquant dessus
        imageElement.addEventListener("click", changeImageAndPlayMusic);
    }

    // Gérer le changement de volume en fonction de la barre
    if (volumeControl) {
        volumeControl.addEventListener("input", function () {
            if (currentAudio) {
                currentAudio.volume = volumeControl.value; // Ajuster le volume de la musique
            }
        });
    }
});
