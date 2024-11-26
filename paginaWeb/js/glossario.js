document.querySelectorAll('.btnPalavra').forEach(button => {
    button.addEventListener('click', function() {
        const audio = this.querySelector('audio');
        audio.play(); // Toca o áudio
    });
});