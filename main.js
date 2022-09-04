window.addEventListener('keydown', playSound);

function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
    key.classList.add('audioEffect')
    if (audio === null) return;
    audio.currentTime = 0;
    audio.play();
}

function removeBorder(event) {
    if (event.propertyName !== "transform") return;
    this.classList.remove('audioEffect');
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeBorder))