function openImage(imgElement) {
    const fullscreen = document.getElementById("fullscreen");
    const fullscreenImg = document.getElementById("fullscreen-img");

    fullscreenImg.src = imgElement.src;
    fullscreen.style.display = "flex";
    setTimeout(() => {
        fullscreen.style.background = "rgba(0, 0, 0, 0.8)"; // Se oscurece solo al abrir la imagen
    }, 10);
}

function closeImage() {
    const fullscreen = document.getElementById("fullscreen");
    fullscreen.style.background = "rgba(0, 0, 0, 0)"; // Se hace transparente antes de cerrar
    setTimeout(() => {
        fullscreen.style.display = "none";
    }, 300); // Tiempo para que la transición se vea fluida
}
