const audio = new Audio('https://aq-93.github.io/a/monkey.mp3');
    audio.preload = 'auto';

    document.body.addEventListener('click', () => {
        audio.volume = 1;
        audio.play();
    });
