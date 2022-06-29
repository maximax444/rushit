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


        console.log(index.index);
    }
});