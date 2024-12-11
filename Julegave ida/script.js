document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('julevideo');
    const gaveContainer = document.getElementById('gave-container');

    video.addEventListener('ended', function() {
        // Når videoen er ferdig, fjern 'hidden'-klassen slik at gaven vises
        gaveContainer.classList.remove('hidden');
    });
});
