window.addEventListener('keydown', playOnKey);

var playOnKey = function (e) {

    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');
};

var keys = document.querySelectorAll('.key');


// chaning a click on desktop to touch on mobile

if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    keys.forEach(key => key.addEventListener('click', playOnClick));

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

} else {

    keys.forEach(key => key.addEventListener('touchstart', playOnTouch));

    function playOnTouch(e) {

        var sample = this.getAttribute('data-key');
        var audio = document.querySelector(`audio[data-key="${sample}"]`);


        if (!sample) {
            return;
        }

        audio.currentTime = 0;
        audio.play();

        this.classList.add('playing');

    }
}



function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    console.log(e.propertyName);
    this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));


/* INPUT MODE SCRIPTS start */

// input mode turn on and off

var btnInputFile = document.querySelector('.file-input');

btnInputFile.addEventListener('click', function () {

    var key = document.getElementsByClassName('key');
    var keyIcon = document.querySelectorAll('.key .fa');
    var keyCaption = document.getElementsByClassName('key-caption');

    if (btnInputFile.classList.contains('off')) {

        btnInputFile.classList.remove('off');
        btnInputFile.classList.add('on');

        //removing functions which playing samples
        window.removeEventListener('keydown', playOnKey);
        keys.forEach(key => key.removeEventListener('click', playOnClick));
        keys.forEach(key => key.removeEventListener('touchstart', playOnTouch));


        var input = document.createElement('input');
        input.setAttribute('type', 'file');


        for (var i = 0; i < key.length; i++) {

            key[i].classList.remove('key-style');
            key[i].classList.add('input-mode');
            keyCaption[i].classList.add('disable');
            keyIcon[i].classList.remove('disable');
        }

    } else if (btnInputFile.classList.contains('on')) {

        btnInputFile.classList.remove('on');
        btnInputFile.classList.add('off');

        for (var i = 0; i < key.length; i++) {

            key[i].classList.remove('input-mode');
            key[i].classList.add('key-style');
            keyCaption[i].classList.remove('disable');
            keyIcon[i].classList.add('disable');
        }
    }

});


/* INPUT MODE SCRIPT end */
