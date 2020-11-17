window.addEventListener('DOMContentLoaded', function() {
    // Choices Select
    const element = document.querySelector('select');
    const choices = new Choices(element, {
        searchEnabled: false,
        position: 'bottom',
        sorter: function(a) {
            return a.label;
          },
        itemSelectText: ''
    });

    // Yandex Map
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [48.88, 2.35],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 13,
            // Элементы управления (выкл).
            controls: []
        });
        // Создание кастомной метки на карте.
        var myPlacemark = new ymaps.Placemark([48.879439, 2.34954], {},
            {
               iconLayout: 'default#image', // обозначаем что будет использоваться пользовательское изображение
               iconImageHref: 'images/3.map/point.svg',  // указываем путь к картинке которая будет служить меткой
               iconImageSize: [28, 40], // указываем размер изображения
               iconImageOffset: [-14, -40] // обозначаем сдвиг от левого верхнего угла к точке изображения метки .
             });

           myMap.geoObjects.add(myPlacemark) // добавляем метку на карту
    };

    // Simple Bar
    new SimpleBar(document.getElementById('myElement'), {
        autoHide: false,
        scrollbarMaxSize: 70
    });

    // Input Mask
    var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7 (999) - 999 - 99 - 99");

    im.mask(selector);

    // Just Validate
    new JustValidate('.form', {
        rules: {
            name: {
                required: true,
                minLength: 2,
                maxLength: 20
            },
            tel: {
                required: true,
                function: (name, value) => {
                    const phone = selector.inputmask.unmaskedvalue()
                    return Number(phone) && phone.lenght === 10
                }
            },
            mail: {
                required: true,
                email: true
            },
        },
        messages: {
            name: {
                required: 'Поле обязательно для заполнения',
                minLength: 'Необходимо ввести минимум 2 символа'
            },
            tel: {
                required: 'Поле обязательно для заполнения',
                function: 'Укажите корректный номер'
            },
            mail: 'Поле обязательно для заполнения'
        },
    });
});