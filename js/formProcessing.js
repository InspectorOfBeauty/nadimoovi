//Перехватывание формы при нажатии на кнопку "Отправить".

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form'); // Переменной присваем весь объект формы по айдишнику.
    //После чего на эту переменную вешаем событие, чтобы при отправки формы переходить в функцию:
    form.addEventListener('submit', formSend);

    //Напишем formSend:
    async function formSend(e) {
        //Первое что делаем в этой функции: запрещаем стандартную отправку формы:
        e.preventDefault(); //prevent с анг. "предотвращать". Теперь по нажатию на кнопку ничего не будет происходить.

        //Делаем простую валидацию форм: обязательность полей и маску почты: наличие собачки, точки и тд.
        //Для этого обявляем переменная error, и ей присваеиваем результат работы другой функции:
        let error = formValidate(form); //В нее передается сам объект формы.

        //Получаем все данные из формы:
        let formData = new FormData(form);

        //Совершаем проверку:
        if(error === 0) {
            //Процесс отправки формы, может занять некоторое время.
            //Пользователю нужно сообщить о том, что идет отправка.
            //Добавляем форме класс.
            form.classList.add('_sending'); //Появляется анимация:

            //И когда форма прошла валидацию, совершим отправку с помощью технологии AJAX,
            //а именно с помощью fatch:
            let response = await fetch('sendmail.php', {  //Файл sendmail.php будет возвращать джейсончик.
               method: 'POST',
               body: formData
            });

            //Проверим успешность отправки:
            if(response.ok) {
                let response = await response.json();
                alert(result.message); //Выводим сообщение.
                form.reset(); //Чистим форму.
                form.classList.remove('_sending'); //Убираем класс _sending как при удачной проверки, так и нет.
            } else {
                alert('Ошибка');
                form.classList.remove('_sending');
            }

        } else {
            alert('Заполните обязательные поля');
        }
    }

    //Создается функция formValidate:
    function formValidate(form) {
        //Для этой функции создадим свою переменную error, которая сразу будет равна нулю:
        let error = 0;

        //Затем переменной fromReq присваеваем все объекты с классом _req.
        //_req это сокращение от required с анг. "необходимый".
        //Заранее добавляем класс _req всем полям, которые необходимо проверять.
        //Теперь все объекты с этим классом сохранятся в переменную:
        let formReq = document.querySelectorAll('._req');

        //С помощью цикла пробегаемся по объектам и поработаем с ними,
        //но для этого понадобятся еще две функции, которые напишем чуть неже...
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];

            //При каждой проверки в самом начале убираем класс _error.
            formRemoveError(input);

            //Начнем проверку c email... Для этого привязываемся к классу:
            if (input.classList.contains('_email')) { // Для этого заранее вешаем этот новый класс на объект с полем email.
                //Создадим функции ниже emailTest для проверки с помощью регулярного выражения:
                if (emailTest(input)) {
                    formAddError(input); // Если проверку не прошел, объекту и его родителю добавляется класс _error.
                    error++;
                }
            } else { // Проверка заполнено ли поле вообще.
                if (input.value.trim() === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    //Для отслеживния, создадим стиль:
    //.form__input._error {
    // box-shadow: 0 0 15px red;
    //}


    //Эди две функции добавляют и снимают class _error  самому объекту и его родителелю:
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    //Функция для проверки почты:
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});

//Для самой отправки запроса потребуется плагин PHPMailer.
//https://github.com/PHPMailer/PHPMailer
//Разархивируем файл в корневую папку с проектом и создадим файл 'sendmail.php',
//на который мы тут ссылаемся.
