// Vérifiez que le code n'a qu'une seule déclaration de la variable

// Déclarer une seule fois la variable globalement
let currentImageIndex = 0;

// Liste des images du diaporama
const images = ["./image/lex1.jpg", "./image/lex2.jpg", "./image/lex3.jpg", "./image/lex4.jpg"];
const diaporamaImage = document.getElementById("diaporamaImage");

// Fonction pour changer l'image
function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    diaporamaImage.src = images[currentImageIndex];
}

// Démarrer le diaporama toutes les 5 secondes
setInterval(changeImage, 5000);