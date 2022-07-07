$(document).on({
    mouseenter: function () {
        $('.main__prod').not($(this)).addClass('hide');
    },
    mouseleave: function () {
        $('.main__prod').not($(this)).removeClass('hide');
    }
}, '.main__prod');
if ($(window).width() > 1199) {
    $(".fullpage").onepage_scroll({
        sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 800,             // AnimationTime let you define how long each section takes to animate
        pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function (index) { },  // This option accepts a callback function. The function will be called before the page moves.
        afterMove: function (index) { },   // This option accepts a callback function. The function will be called after the page moves.
        loop: true,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true,                  // You can activate the keyboard controls
        responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
        // the browser's width is less than 600, the fallback will kick in.
        direction: "horizontal"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
    });
}

$(".fullpage").moveTo(1);
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
});
$('.header__call, .main__prod').on('click', function (e) {
    e.preventDefault();
    $('.overlay-call').addClass('overlay-active');
});
$('.home-contacts__map').on('click', function (e) {
    e.preventDefault();
    $('.overlay-ya').addClass('overlay-active');
});


$('.overlay-rekv').on('click', function (e) {
    if (!(($(e.target).parents('.popup-wrap').length) || ($(e.target).hasClass('popup-wrap')))) {
        $('.overlay-rekv').removeClass('overlay-active');
    }
});
$('.overlay-call').on('click', function (e) {
    if (!(($(e.target).parents('.popup-wrap').length) || ($(e.target).hasClass('popup-wrap')))) {
        $('.overlay-call').removeClass('overlay-active');
    }
});
$('.overlay-ya').on('click', function (e) {
    if (!(($(e.target).parents('.popup-wrap').length) || ($(e.target).hasClass('popup-wrap')))) {
        $('.overlay-ya').removeClass('overlay-active');
    }
});

$('.popup-close').on('click', function (e) {
    $(this).closest('.overlay').removeClass('overlay-active');
});

if ($(window).width() <= 575) {
    var items = $('.home-features__el'),
        per = 5,
        i = 1,
        total = 0;
    $('.home-features__more').on('click', function (e) {
        e.preventDefault();
        total = per * (i++);
        items.slice(0, total).css('display', 'block');
        $(this)[total >= items.length ? 'hide' : 'show']();
    }).click();
}

function sendFormTo(form) {
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    var th = form;


    // Валидация
    var novalidInputs = th.querySelectorAll('[novalid]');
    for (let i = 0; i < novalidInputs.length; i++) {
        novalidInputs[i].removeAttribute("novalid");
    }

    var novalidInputs = 0;
    for (var key of formData.keys()) {
        if (formData.get(key) == '' || formData.get(key) == null) {
            if (key == 'name') {
                form.querySelector('input[name=' + key + ']').setAttribute("novalid", "true");
                novalidInputs++
            }
            if (key == 'phone') {
                form.querySelector('input[name=' + key + ']').setAttribute("novalid", "true");
                novalidInputs++
            }
        }
    }

    if (novalidInputs > 0) {
        return false;
    }

    xhr.open("POST", "../mail/mail.php");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                form.reset();
            }
        }
    };
    xhr.send(formData);
}


document.querySelectorAll('form').forEach(link => {
    link.addEventListener('submit', function (e) {
        e.preventDefault();
        sendFormTo(this);
    });
});

// var isMoving = false;
// setTimeout(function () {
//     $(window).bind('mousewheel', function (e) {
//         e.preventDefault();
//         let now = $('.fullpage').scrollTop() / $(window).width();
//         console.log(now);

//         if (isMoving) return;
//         isMoving = true;
//         console.log(isMoving);
//         if (now != 0 && now != 1 && now != 2 && now != 3) {
//             let nowSect = Math.floor($('.fullpage').scrollTop() / $(window).width());
//             console.log(nowSect);
//             if (e.originalEvent.wheelDelta / 120 > 0) {
//                 $('.fullpage').animate({
//                     scrollTop: (Math.floor($('.fullpage').scrollTop() / $(window).width()) - 1) * $(window).width()
//                 }, 800);
//             } else {
//                 $('.fullpage').animate({
//                     scrollTop: (Math.floor($('.fullpage').scrollTop() / $(window).width()) + 1) * $(window).width()
//                 }, 800);

//             }

//         }

//         setTimeout(function () {
//             isMoving = false;
//         }, 100);


//     });
// }, 0);