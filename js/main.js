$(document).on({
    mouseenter: function () {
        $('.main__prod').not($(this)).addClass('hide');
    },
    mouseleave: function () {
        $('.main__prod').not($(this)).removeClass('hide');
    }
}, '.main__prod');

new fullpage('.fullpage', {
    waterEffect: true,
    onLeave: function (link, index) {
        console.log(index);

        $(link.item).addClass('notNormal');
        $(index.item).css('z-index', '999');
        $(link.item).css('z-index', '2');
        if ($(index.item).hasClass('notNormal')) {
            $(index.item).removeClass('notNormal');
        }
        if (index.index == 2) {
            let counter = document.querySelectorAll('.counter');
            let limit = 0;
            if (limit == counter.length) { return; }

            for (let i = 0; i < counter.length; i++) {
                let pos = counter[i].getBoundingClientRect().top; //Позиция блока, считая сверху окна
                if (counter[i].dataset.stop === "0") {
                    counter[i].dataset.stop = 1; // Останавливаем перезапуск счета в этом блоке
                    let x = 0;
                    limit++; // Счетчик будет запущен, увеличиваем переменную на 1
                    let int = setInterval(function () {
                        // Раз в 60 миллисекунд будет прибавляться 50-я часть нужного числа
                        x = x + Math.ceil(counter[i].dataset.to / 25);
                        counter[i].innerText = x.toLocaleString();
                        if (x > counter[i].dataset.to) {
                            //Как только досчитали - стираем интервал.
                            counter[i].innerText = (counter[i].dataset.to / 1).toLocaleString();
                            clearInterval(int);
                        }
                    }, 50);
                }
            }
        }


        console.log(index.index);
    }
});
var inputs = document.querySelectorAll('.file input');
Array.prototype.forEach.call(inputs, function (input) {
    var label = input.nextElementSibling,
        labelVal = label.innerHTML;
    input.addEventListener('change', function (e) {
        var fileName = '';
        if (this.files && this.files.length > 1)
            fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
        else
            fileName = e.target.value.split('\\').pop();
        if (fileName)
            label.querySelector('span').innerHTML = fileName;
        else
            label.innerHTML = labelVal;
    });
});

$('.home-contacts__rekv').on('click', function (e) {
    e.preventDefault();
    $('.overlay-rekv').addClass('overlay-active');
    $('body').css("overflow", "hidden");
});
$('.header__call, .main__prod').on('click', function (e) {
    e.preventDefault();
    $('.overlay-call').addClass('overlay-active');
    $('body').css("overflow", "hidden");
});


$('.overlay-rekv').on('click', function (e) {
    if (!(($(e.target).parents('.popup-wrap').length) || ($(e.target).hasClass('popup-wrap')))) {
        $('body').css("overflow", "visible");
        $('.overlay-rekv').removeClass('overlay-active');
    }
});
$('.overlay-call').on('click', function (e) {
    if (!(($(e.target).parents('.popup-wrap').length) || ($(e.target).hasClass('popup-wrap')))) {
        $('body').css("overflow", "visible");
        $('.overlay-call').removeClass('overlay-active');
    }
});

$('.popup-close').on('click', function (e) {
    $('body').css("overflow", "visible");
    $(this).closest('.overlay').removeClass('overlay-active');
});
