let audio = document.querySelector('.bg-music')
audio.volume = 0.3;
const btnMusicContainer = document.querySelector('.background-music');

btnMusicContainer.classList.add('pulsate-fwd');
const btnMusic = document.querySelector('.btn_music');

btnMusic.onclick = function () {
    if (btnMusic.classList.contains('btn_music_active')) {
        btnMusic.classList.remove('btn_music_active');
        btnMusicContainer.classList.remove('pulsate-fwd');
        audio.pause();
    } else {
        btnMusic.classList.add('btn_music_active');
        btnMusicContainer.classList.add('pulsate-fwd');
        audio.play();
    }
}


