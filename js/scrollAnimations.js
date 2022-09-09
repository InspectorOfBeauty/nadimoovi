//Скрывает элемент в стилях, заставляее уего уехать за пределы
// с помощью транформа: transform: translate(0px, 120%);
// opacity: 0;
//transition: all 0.8s ease 0s;
//Отображаться элемент будет с помощью класса _active

//Присвоим переменной все объекты, которые будут поддаваться анимации:
const animItems = document.querySelectorAll('._anim__item');
//Проверим, существуют ли эти классы, проверив массив на длинну, если больше нуля, то объекты есть:
if(animItems.length > 0) {
    //Добавим событие на целое окно браузера:
    window.addEventListener('scroll', animOnScroll)

    function animOnScroll() {
        for(let index = 0; index < animItems.length; index++ ){
            const animItem = animItems[index];
            //Получаем высоту объекта:
            const animItemHeight = animItem.offsetHeight;
            //Получаем позицию объекта относительно верха,
            //Насклько объект находится ниже, чем верх страницы,
            // чтобы корректно найти это значение используется функция:
            const animeItemOffset = offset(animItem).top;
            //Создадим коофециента старта анимации:
            const animStart = 5;

            //Настроим момент старта анимации.
            //Из высоты окна браузера отнимаем высоту объекта,
            //и делим на коэффециент:
            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            //На тот случай, когда элемент, изначально выше окна браузера:
            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            //Добавляем класс при определенных условиях:
            if((pageYOffset > animeItemOffset - animItemPoint)
            && pageYOffset < (animeItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            }else {
                if(!animItem.classList.contains('_anim-no-hide'))
                animItem.classList.remove('_active');
            }
        }
    }

    function offset(el) {
        const rect  = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    animOnScroll(); //Чтобы изначально все элементы в видемой области отобразились.
}
