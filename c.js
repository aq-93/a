/*const audio = new Audio('https://aq-93.github.io/a/monkey.mp3');
    audio.preload = 'auto';

    document.body.addEventListener('click', () => {
        audio.volume = 1;
        audio.play();
    });
*/

let hasClicked = false;

document.body.addEventListener('click', () => {
    if (hasClicked) return;
    hasClicked = true;

    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'black';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '9999';
    overlay.innerHTML = `
        <img src="dog.png" style="width: 100%; height: 100%; object-fit: cover;">
    `;
    document.body.appendChild(overlay);

    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
    }

    const audio = new Audio('s.mp3');
    audio.volume = 1;
    audio.play()
        .then(() => {
            audio.onended = () => {
                overlay.remove();
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            };
        })
        .catch(error => console.error('Audio playback failed:', error));
});
