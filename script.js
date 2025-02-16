document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Script chargé et DOM prêt !");

    // 🎵 Gestion de la musique
    const music = document.getElementById("background-music");
    if (music) {
        console.log("🎶 Musique détectée.");
        music.volume = 0.5;
        document.addEventListener("click", function () {
            if (music.paused) {
                music.play().catch(error => console.warn("🔇 Lecture automatique bloquée :", error));
            }
        }, { once: true });
    }

    // 🎨 Gestion de l'image "Join Us"
    const joinImage = document.getElementById("joinImage");
    
    if (joinImage) {
        joinImage.addEventListener("click", function () {
            console.log("📌 Clic sur Join Us !");
            this.style.display = "none"; // Cache l'image
            
            // Afficher les éléments cachés
            document.querySelectorAll(".hidden").forEach(element => {
                element.classList.remove("hidden");
            });

            // Jouer la musique après l'affichage des éléments
            if (music) {
                music.play();
            }
        });
    }

    // 🔊 Réglage du volume
    const volumeControl = document.getElementById("volume-control");
    if (volumeControl) {
        volumeControl.addEventListener("input", function () {
            if (music) {
                music.volume = this.value;
                console.log(`🔊 Volume réglé à ${this.value}`);
            }
        });
    }
});
