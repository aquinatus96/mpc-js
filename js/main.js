window.addEventListener('keydown', function (e) {

    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');

});

var keys = document.querySelectorAll('.key');


[...keys].forEach(key => key.addEventListener('click', playOnClick));

function playOnClick(e) {

    var sample = this.getAttribute('data-key');
    var audio = document.querySelector(`audio[data-key="${sample}"]`)

    
    if (!sample) {
        return;
    }
    
    audio.currentTime = 0;
    audio.play();
    
    this.classList.add('playing');

}

[...keys].forEach(key => key.addEventListener('touchstart', playOnTouch));

function playOnTouch(e) {

    var sample = this.getAttribute('data-key');
    var audio = document.querySelector(`audio[data-key="${sample}"]`)

    
    if (!sample) {
        return;
    }
    
    audio.currentTime = 0;
    audio.play();
    
    this.classList.add('playing');



function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    console.log(e.propertyName);
    this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
