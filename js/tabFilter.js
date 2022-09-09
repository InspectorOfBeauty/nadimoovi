const btns = document.querySelectorAll('.btn_filter');
const videos = document.querySelectorAll('.video-card__item');

function filterVideo(classVideo) {
    for(let video of videos) {
        video.style.display = "none";
        if(video.classList.contains(classVideo)) {
            setTimeout(() => {
                video.style.display = "block";
            }, 0); //Нужна задержка, чтобы правило успело отработать.
        }
    }

    //Перебираем все кнопок. Оставляем только одну активную.
    for(let btn of btns) {
        if(btn.dataset.filter === classVideo) {
            btn.classList.add('btn_filter_active');
        } else {
            btn.classList.remove('btn_filter_active')
        }
    }
}

//Обработчик:
for(let btn of btns) {
    btn.onclick = function () {
        filterVideo(this.dataset.filter);
    }
}
