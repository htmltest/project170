$(document).ready(function() {

    $('.welcome-slider-inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $('.master-video-list-next').click(function(e) {
        var curBlock = $(this).parents().filter('.master-video-list');
        var curIndex = curBlock.data('curIndex');
        var curTop = Number(curBlock.find('.master-video-list-inner').css('top').replace(/px/, ''));
        curTop -= curBlock.find('.master-video-list-item').eq(curIndex).outerHeight(true);

        curIndex++;
        curBlock.find('.master-video-list-inner').css({'top': curTop});
        curBlock.data('curIndex', curIndex);

        $('.master-video-list-prev').addClass('visible');
        if (curBlock.find('.master-video-list-inner').outerHeight() + curTop <= curBlock.outerHeight()) {
            curBlock.find('.master-video-list-next').removeClass('visible');
        }
        e.preventDefault();
    });

    $('.master-video-list-prev').click(function(e) {
        var curBlock = $(this).parents().filter('.master-video-list');
        var curIndex = curBlock.data('curIndex');
        var curTop = Number(curBlock.find('.master-video-list-inner').css('top').replace(/px/, ''));
        curIndex--;
        curTop += curBlock.find('.master-video-list-item').eq(curIndex).outerHeight(true);
        if (curTop > 0) {
            curTop = 0;
        }

        curBlock.find('.master-video-list-inner').css({'top': curTop});
        curBlock.data('curIndex', curIndex);

        $('.master-video-list-next').addClass('visible');
        if (curTop == 0) {
            curBlock.find('.master-video-list-prev').removeClass('visible');
        }
        e.preventDefault();
    });

    $('.master-other-list-next').click(function(e) {
        var curBlock = $(this).parents().filter('.master-other-list');
        var curIndex = curBlock.data('curIndex');
        if ($(window).width() < 1200) {
            var curTop = Number(curBlock.find('.master-other-list-inner').css('top').replace(/px/, ''));
            curTop -= curBlock.find('.master-other-item').eq(curIndex).outerHeight(true);

            curIndex++;
            curBlock.find('.master-other-list-inner').css({'top': curTop});
            curBlock.data('curIndex', curIndex);

            $('.master-other-list-prev').addClass('visible');
            if (curBlock.find('.master-other-list-inner').outerHeight() + curTop <= curBlock.outerHeight()) {
                curBlock.find('.master-other-list-next').removeClass('visible');
            }
        } else {
            var curLeft = Number(curBlock.find('.master-other-list-inner').css('left').replace(/px/, ''));
            curLeft -= curBlock.find('.master-other-item').eq(curIndex).outerWidth(true);

            curIndex++;
            curBlock.find('.master-other-list-inner').css({'left': curLeft});
            curBlock.data('curIndex', curIndex);

            $('.master-other-list-prev').addClass('visible');
            if (curBlock.find('.master-other-list-inner').outerWidth() + curLeft <= curBlock.outerWidth()) {
                curBlock.find('.master-other-list-next').removeClass('visible');
            }
        }
        e.preventDefault();
    });

    $('.master-other-list-prev').click(function(e) {
        var curBlock = $(this).parents().filter('.master-other-list');
        var curIndex = curBlock.data('curIndex');
        if ($(window).width() < 1200) {
            var curTop = Number(curBlock.find('.master-other-list-inner').css('top').replace(/px/, ''));
            curIndex--;
            curTop += curBlock.find('.master-other-item').eq(curIndex).outerHeight(true);
            if (curTop > 0) {
                curTop = 0;
            }

            curBlock.find('.master-other-list-inner').css({'top': curTop});
            curBlock.data('curIndex', curIndex);

            $('.master-other-list-next').addClass('visible');
            if (curTop == 0) {
                curBlock.find('.master-other-list-prev').removeClass('visible');
            }
        } else {
            var curLeft = Number(curBlock.find('.master-other-list-inner').css('left').replace(/px/, ''));
            curIndex--;
            curLeft += curBlock.find('.master-other-item').eq(curIndex).outerWidth(true);
            if (curLeft > 0) {
                curLeft = 0;
            }

            curBlock.find('.master-other-list-inner').css({'left': curLeft});
            curBlock.data('curIndex', curIndex);

            $('.master-other-list-next').addClass('visible');
            if (curLeft == 0) {
                curBlock.find('.master-other-list-prev').removeClass('visible');
            }
        }
        e.preventDefault();
    });

    $('body').on('click', 'a.master-video-big-player-preview', function(e) {
        var curPlayer = $(this).parents().filter('.master-video-big-player');
        $('.master-video-big-player-content').html('');
        $('.master-video-big-player.start').removeClass('start');
        curPlayer.find('.master-video-big-player-content').html('<video src="' + $(this).attr('href') + '" controls autoplay></video>');
        curPlayer.addClass('start');
        e.preventDefault();
    });

    $('body').on('click', 'a.master-video-list-item', function(e) {
        var curItem = $(this);
        if (!curItem.hasClass('active')) {
            $('a.master-video-list-item.active').removeClass('active');
            curItem.addClass('active');
            $('.master-video-big-item.active').removeClass('active');
            var curIndex = $('a.master-video-list-item').index(curItem);
            $('.master-video-big-item').eq(curIndex).addClass('active');
            $('html, body').animate({'scrollTop': $('.master-header-subtitle').offset().top - 20});
        }
        e.preventDefault();
    });

    $('.school-video-list-next').click(function(e) {
        var curBlock = $(this).parents().filter('.school-video-list');
        var curIndex = curBlock.data('curIndex');
        var curTop = Number(curBlock.find('.school-video-list-inner').css('top').replace(/px/, ''));
        curTop -= curBlock.find('.school-video-list-item').eq(curIndex).outerHeight(true);

        curIndex++;
        curBlock.find('.school-video-list-inner').css({'top': curTop});
        curBlock.data('curIndex', curIndex);

        $('.school-video-list-prev').addClass('visible');
        if (curBlock.find('.school-video-list-inner').outerHeight() + curTop <= curBlock.outerHeight()) {
            curBlock.find('.school-video-list-next').removeClass('visible');
        }
        e.preventDefault();
    });

    $('.school-video-list-prev').click(function(e) {
        var curBlock = $(this).parents().filter('.school-video-list');
        var curIndex = curBlock.data('curIndex');
        var curTop = Number(curBlock.find('.school-video-list-inner').css('top').replace(/px/, ''));
        curIndex--;
        curTop += curBlock.find('.school-video-list-item').eq(curIndex).outerHeight(true);
        if (curTop > 0) {
            curTop = 0;
        }

        curBlock.find('.school-video-list-inner').css({'top': curTop});
        curBlock.data('curIndex', curIndex);

        $('.school-video-list-next').addClass('visible');
        if (curTop == 0) {
            curBlock.find('.school-video-list-prev').removeClass('visible');
        }
        e.preventDefault();
    });

    $('.school-other-list-next').click(function(e) {
        var curBlock = $(this).parents().filter('.school-other-list');
        var curIndex = curBlock.data('curIndex');
        if ($(window).width() < 1200) {
            var curTop = Number(curBlock.find('.school-other-list-inner').css('top').replace(/px/, ''));
            curTop -= curBlock.find('.school-other-item').eq(curIndex).outerHeight(true);

            curIndex++;
            curBlock.find('.school-other-list-inner').css({'top': curTop});
            curBlock.data('curIndex', curIndex);

            $('.school-other-list-prev').addClass('visible');
            if (curBlock.find('.school-other-list-inner').outerHeight() + curTop <= curBlock.outerHeight()) {
                curBlock.find('.school-other-list-next').removeClass('visible');
            }
        } else {
            var curLeft = Number(curBlock.find('.school-other-list-inner').css('left').replace(/px/, ''));
            curLeft -= curBlock.find('.school-other-item').eq(curIndex).outerWidth(true);

            curIndex++;
            curBlock.find('.school-other-list-inner').css({'left': curLeft});
            curBlock.data('curIndex', curIndex);

            $('.school-other-list-prev').addClass('visible');
            if (curBlock.find('.school-other-list-inner').outerWidth() + curLeft <= curBlock.outerWidth()) {
                curBlock.find('.school-other-list-next').removeClass('visible');
            }
        }
        e.preventDefault();
    });

    $('.school-other-list-prev').click(function(e) {
        var curBlock = $(this).parents().filter('.school-other-list');
        var curIndex = curBlock.data('curIndex');
        if ($(window).width() < 1200) {
            var curTop = Number(curBlock.find('.school-other-list-inner').css('top').replace(/px/, ''));
            curIndex--;
            curTop += curBlock.find('.school-other-item').eq(curIndex).outerHeight(true);
            if (curTop > 0) {
                curTop = 0;
            }

            curBlock.find('.school-other-list-inner').css({'top': curTop});
            curBlock.data('curIndex', curIndex);

            $('.school-other-list-next').addClass('visible');
            if (curTop == 0) {
                curBlock.find('.school-other-list-prev').removeClass('visible');
            }
        } else {
            var curLeft = Number(curBlock.find('.school-other-list-inner').css('left').replace(/px/, ''));
            curIndex--;
            curLeft += curBlock.find('.school-other-item').eq(curIndex).outerWidth(true);
            if (curLeft > 0) {
                curLeft = 0;
            }

            curBlock.find('.school-other-list-inner').css({'left': curLeft});
            curBlock.data('curIndex', curIndex);

            $('.school-other-list-next').addClass('visible');
            if (curLeft == 0) {
                curBlock.find('.school-other-list-prev').removeClass('visible');
            }
        }
        e.preventDefault();
    });

    $('body').on('click', 'a.school-video-big-player-preview', function(e) {
        var curPlayer = $(this).parents().filter('.school-video-big-player');
        $('.school-video-big-player-content').html('');
        $('.school-video-big-player.start').removeClass('start');
        curPlayer.find('.school-video-big-player-content').html('<video src="' + $(this).attr('href') + '" controls autoplay></video>');
        curPlayer.addClass('start');
        e.preventDefault();
    });

    $('body').on('click', 'a.school-video-list-item', function(e) {
        var curItem = $(this);
        if (!curItem.hasClass('active')) {
            $('a.school-video-list-item.active').removeClass('active');
            curItem.addClass('active');
            $('.school-video-big-item.active').removeClass('active');
            var curIndex = $('a.school-video-list-item').index(curItem);
            $('.school-video-big-item').eq(curIndex).addClass('active');
            $('html, body').animate({'scrollTop': $('.school-video-big').offset().top});
        }
        e.preventDefault();
    });

    $('.up-link a').click(function(e) {
        $('html, body').animate({'scrollTop': 0});
        e.preventDefault();
    });

    $('body').on('click', 'a.mix-video-player-preview', function(e) {
        var curPlayer = $(this).parents().filter('.mix-video-player');
        $('.mix-video-player-content').html('');
        $('.mix-video-player.start').removeClass('start');
        curPlayer.find('.mix-video-player-content').html('<video src="' + $(this).attr('href') + '" controls autoplay></video>');
        curPlayer.addClass('start');
        e.preventDefault();
    });

    $('.mix-schedule').mCustomScrollbar({
        axis: 'y'
    });

    $('body').on('click', '.window-link', function(e) {
        windowOpen($(this).attr('href'));
        e.preventDefault();
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            windowClose();
        }
    });

    $('body').on('click', '.window-close', function(e) {
        windowClose();
        e.preventDefault();
    });

    $.validator.addMethod('inputDate',
        function(curDate, element) {
            if (this.optional(element) && curDate == '') {
                return true;
            } else {
                if (curDate.match(/^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/)) {
                    return true;
                } else {
                    $.validator.messages['inputDate'] = 'Дата введена некорректно';
                    return false;
                }
            }
        },
        ''
    );

    $('form').each(function() {
        initForm($(this));
    });

    $('.mobile-menu-link').click(function(e) {
        $('html').toggleClass('mobile-menu-open');
        e.preventDefault();
    });

    $(document).click(function(e) {
        if ($(e.target).hasClass('mobile-menu')) {
            $('html').removeClass('mobile-menu-open');
        }
    });

    $('.mix-schedule-link a').click(function(e) {
        $('html').addClass('schedule-open');
        e.preventDefault();
    });

    $('.mix-schedule-close a').click(function(e) {
        $('html').removeClass('schedule-open');
        e.preventDefault();
    });

    $('a.mix-schedule-item').click(function(e) {
        var curItem = $(this);
        if (!curItem.hasClass('active')) {
            $('a.mix-schedule-item.active').removeClass('active');
            curItem.addClass('active');
            $('.mix-detail-item.active').removeClass('active');
            var curIndex = $('a.mix-schedule-item').index(curItem);
            $('.mix-detail-item').eq(curIndex).addClass('active');
        }
        e.preventDefault();
    });

});

$(window).on('load resize', function() {

    $('.master-video-list').each(function() {
        var curBlock = $(this);
        curBlock.data('curIndex', 0);
        curBlock.find('.master-video-list-inner').css({'top': 0});
        curBlock.find('.master-video-list-prev, .master-video-list-next').removeClass('visible');
        if (curBlock.find('.master-video-list-inner').outerHeight() > curBlock.outerHeight()) {
            curBlock.find('.master-video-list-next').addClass('visible');
        }
    });

    $('.master-other-list').each(function() {
        var curBlock = $(this);
        curBlock.data('curIndex', 0);
        curBlock.find('.master-other-list-inner').css({'top': 0, 'left': 0});
        curBlock.find('.master-other-list-prev, .master-other-list-next').removeClass('visible');
        if ($(window).width() < 1200) {
            if (curBlock.find('.master-other-list-inner').outerHeight() > curBlock.outerHeight()) {
                curBlock.find('.master-other-list-next').addClass('visible');
            }
        } else {
            if (curBlock.find('.master-other-list-inner').outerWidth() > curBlock.outerWidth()) {
                curBlock.find('.master-other-list-next').addClass('visible');
            }
        }
    });

    $('.school-video-list').each(function() {
        var curBlock = $(this);
        curBlock.data('curIndex', 0);
        curBlock.find('.school-video-list-inner').css({'top': 0});
        curBlock.find('.school-video-list-prev, .school-video-list-next').removeClass('visible');
        if (curBlock.find('.school-video-list-inner').outerHeight() > curBlock.outerHeight()) {
            curBlock.find('.school-video-list-next').addClass('visible');
        }
    });

    $('.school-other-list').each(function() {
        var curBlock = $(this);
        curBlock.data('curIndex', 0);
        curBlock.find('.school-other-list-inner').css({'top': 0, 'left': 0});
        curBlock.find('.school-other-list-prev, .school-other-list-next').removeClass('visible');
        if ($(window).width() < 1200) {
            if (curBlock.find('.school-other-list-inner').outerHeight() > curBlock.outerHeight()) {
                curBlock.find('.school-other-list-next').addClass('visible');
            }
        } else {
            if (curBlock.find('.school-other-list-inner').outerWidth() > curBlock.outerWidth()) {
                curBlock.find('.school-other-list-next').addClass('visible');
            }
        }
    });

});

function initForm(curForm) {
    curForm.find('.form-input-date input').mask('00.00.0000');
    curForm.find('.form-input-date input').attr('autocomplete', 'off');
    curForm.find('.form-input-date input').addClass('inputDate');

    curForm.find('.form-input-date input').on('keyup', function() {
        var curValue = $(this).val();
        if (curValue.match(/^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/)) {
            var isCorrectDate = true;
            var userDate = new Date(curValue.substr(6, 4), Number(curValue.substr(3, 2)) - 1, Number(curValue.substr(0, 2)));
            if (isCorrectDate) {
                var myDatepicker = $(this).data('datepicker');
                if (myDatepicker) {
                    var curValueArray = curValue.split('.');
                    myDatepicker.selectDate(new Date(Number(curValueArray[2]), Number(curValueArray[1]) - 1, Number(curValueArray[0])));
                    myDatepicker.show();
                    $(this).focus();
                }
            } else {
                $(this).addClass('error');
                return false;
            }
        }
    });

    curForm.find('.form-input-date input').each(function() {
        $(this).datepicker({
            language: 'ru',
            toggleSelected: false,
            position: 'bottom right'
        });
        if (typeof ($(this).attr('value')) != 'undefined') {
            var curValue = $(this).val();
            if (curValue != '') {
                var startDateArray = curValue.split('.');
                startDate = new Date(Number(startDateArray[2]), Number(startDateArray[1]) - 1 , Number(startDateArray[0]));
                $(this).data('datepicker').selectDate(startDate);
            }
        }
    });

    curForm.find('.form-select select').each(function() {
        var curSelect = $(this);
        var options = {
            minimumResultsForSearch: 999
        }

        curSelect.select2(options);

        if (curSelect.val() != '' && curSelect.val() !== null) {
            curSelect.trigger({type: 'select2:select'})
        }
    });

    var curFormOptions = {
        ignore: '',
        submitHandler: function(form) {
            var curForm = $(form);
            if (curForm.hasClass('window-form')) {
                var formData = new FormData(form);
                windowOpen(curForm.attr('action'), formData);
            } else {
                form.submit();
            }
        }
    };

    curForm.validate(curFormOptions);
}

function windowOpen(linkWindow, dataWindow) {
    if ($('.window').length == 0) {
        var curPadding = $('.wrapper').width();
        var curWidth = $(window).width();
        if (curWidth < 480) {
            curWidth = 480;
        }
        var curScroll = $(window).scrollTop();
        $('html').addClass('window-open');
        curPadding = $('.wrapper').width() - curPadding;
        $('body').css({'margin-right': curPadding + 'px'});

        $('body').append('<div class="window"><div class="window-loading"></div></div>')

        $('.wrapper').css({'top': -curScroll});
        $('.wrapper').data('curScroll', curScroll);
        $('meta[name="viewport"]').attr('content', 'width=' + curWidth);
    } else {
        $('.window').append('<div class="window-loading"></div>')
        $('.window-container').addClass('window-container-preload');
    }

    $.ajax({
        type: 'POST',
        url: linkWindow,
        processData: false,
        contentType: false,
        dataType: 'html',
        data: dataWindow,
        cache: false
    }).done(function(html) {
        if ($('.window-container').length == 0) {
            $('.window').html('<div class="window-container window-container-preload">' + html + '<a href="#" class="window-close"></a></div>');
        } else {
            $('.window-container').html(html + '<a href="#" class="window-close"></a>');
            $('.window .window-loading').remove();
        }

        window.setTimeout(function() {
            $('.window-container-preload').removeClass('window-container-preload');
        }, 100);

        $('.window form').each(function() {
            initForm($(this));
        });

    });
}

function windowClose() {
    if ($('.window').length > 0) {
        $('.window').remove();
        $('html').removeClass('window-open');
        $('body').css({'margin-right': 0});
        $('.wrapper').css({'top': 0});
        $('meta[name="viewport"]').attr('content', 'width=device-width');
        $(window).scrollTop($('.wrapper').data('curScroll'));
    }
}