$(document).ready(function() {

    $('.gallery').each(function() {
        var curGallery = $(this);
        curGallery.on('init', function(event, slick) {
            var curSlide = curGallery.find('.slick-current');
            var curPhotoHeight = curSlide.find('.gallery-item-photo').outerHeight();
            curGallery.find('.slick-prev').css({'top': curPhotoHeight / 2});
            curGallery.find('.slick-next').css({'top': curPhotoHeight / 2});
        });
        curGallery.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#gallery-prev"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#gallery-next"></use></svg></button>',
            adaptiveHeight: true,
            fade: true,
            dots: false,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        dots: true
                    }
                }
            ]
        }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var curSlide = curGallery.find('.slick-slide:not(.slick-cloned)').eq(nextSlide);
            var curPhotoHeight = curSlide.find('.gallery-item-photo').outerHeight();
            curGallery.find('.slick-prev').css({'top': curPhotoHeight / 2});
            curGallery.find('.slick-next').css({'top': curPhotoHeight / 2});
        });
    });

    $('.welcome-slider-inner').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        dots: false
    });

    $('body').on('click', '.master-video-list-next', function(e) {
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

    $('body').on('click', '.master-video-list-prev', function(e) {
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

    $('body').on('click', '.master-other-list-next', function(e) {
        var curBlock = $(this).parents().filter('.master-other-list-wrapper');
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

    $('body').on('click', '.master-other-list-prev', function(e) {
        var curBlock = $(this).parents().filter('.master-other-list-wrapper');
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
        curPlayer.find('.master-video-big-player-content').html('<iframe width="560" height="315" src="' + $(this).attr('href') + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        curPlayer.addClass('start');
        e.preventDefault();
    });

    $('body').on('click', 'a.master-video-list-item', function(e) {
        var curItem = $(this);
        if (!curItem.hasClass('active')) {
            $('.master-video-big-player-content').html('');
            $('.master-video-big-player.start').removeClass('start');
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
        var curBlock = $(this).parents().filter('.school-other-list-wrapper');
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
        var curBlock = $(this).parents().filter('.school-other-list-wrapper');
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
        curPlayer.find('.school-video-big-player-content').html('<iframe width="560" height="315" src="' + $(this).attr('href') + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        curPlayer.addClass('start');
        e.preventDefault();
    });

    $('.school-video-descr').mCustomScrollbar({
        axis: 'y'
    });

    $('.mix-video-descr').mCustomScrollbar({
        axis: 'y'
    });

    $('body').on('click', 'a.school-video-list-item', function(e) {
        var curItem = $(this);
        if (!curItem.hasClass('active')) {
            $('.school-video-big-player-content').html('');
            $('.school-video-big-player.start').removeClass('start');
            $('a.school-video-list-item.active').removeClass('active');
            curItem.addClass('active');
            $('.school-video-big-item.active').removeClass('active');
            var curIndex = $('a.school-video-list-item').index(curItem);
            $('.school-video-big-item').eq(curIndex).addClass('active');
            $('html, body').animate({'scrollTop': $('.school-video').offset().top - 20});
        }
        e.preventDefault();
    });

    $('body').on('click', 'a.mix-video-player-preview', function(e) {
        var curPlayer = $(this).parents().filter('.mix-video-player');
        $('.mix-video-player-content').html('');
        $('.mix-video-player.start').removeClass('start');
        curPlayer.find('.mix-video-player-content').html('<iframe width="560" height="315" src="' + $(this).attr('href') + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        curPlayer.addClass('start');
        e.preventDefault();
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

    $.validator.addMethod('phoneRU',
        function(phone_number, element) {
            return this.optional(element) || phone_number.match(/^\+7 \d{3} \d{3}\-\d{2}\-\d{2}$/);
        },
        'Ошибка заполнения'
    );

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
        var curWidth = $(window).width();
        if (curWidth < 480) {
            curWidth = 480;
        }
        var curScroll = $(window).scrollTop();
        $('html').addClass('schedule-open');
        $('meta[name="viewport"]').attr('content', 'width=' + curWidth);
        e.preventDefault();
    });

    $('.mix-schedule-close a').click(function(e) {
        $('html').removeClass('schedule-open');
        $('meta[name="viewport"]').attr('content', 'width=device-width');
        e.preventDefault();
    });

    $('a.mix-schedule-item').click(function(e) {
        var curItem = $(this);
        var curTab = curItem.parents().filter('.mix-schedule-tab');
        if (!curItem.hasClass('active')) {
            $('.mix').addClass('loading');
            $.ajax({
                type: 'POST',
                url: curItem.attr('href'),
                dataType: 'html',
                cache: false
            }).done(function(html) {
                curTab.find('.mix-detail-item').html(html);
                $('.mix').removeClass('loading');
                $(window).trigger('resize');
            });
        }
        $('html').removeClass('schedule-open');
        e.preventDefault();
    });

    $('.master-video-descr').mCustomScrollbar({
        axis: 'y'
    });

    $('.popup-cookies').each(function() {
        if ($.cookie('cookies_success') != '1') {
            $('.popup-cookies').addClass('visible');
        }
    });

    $('body').on('click', '.popup-cookies-btn a', function(e) {
        $.cookie('cookies_success', '1');
        $('.popup-cookies').removeClass('visible');
        e.preventDefault();
    });

    $('.mix-schedule-archive-link a').click(function(e) {
        $('.mix-video-player-content').html('');
        $('.mix-video-player.start').removeClass('start');
        $('html').addClass('mix-schedule-archive-open');
        $(window).trigger('resize');
        e.preventDefault();
    });

    $('.mix-schedule-current-link a').click(function(e) {
        $('.mix-video-player-content').html('');
        $('.mix-video-player.start').removeClass('start');
        $('html').removeClass('mix-schedule-archive-open');
        $(window).trigger('resize');
        e.preventDefault();
    });

    $('.mix-schedule-next').click(function(e) {
        var curBlock = $(this).parents().filter('.mix-schedule-tab');
        var curTop = Number(curBlock.find('.mix-schedule-inner').css('top').replace(/px/, ''));
        curTop -= curBlock.find('.mix-schedule-item').eq(0).outerHeight(true);

        curBlock.find('.mix-schedule-inner').animate({'top': curTop});

        curBlock.find('.mix-schedule-prev').addClass('visible');
        if (curBlock.find('.mix-schedule-inner').outerHeight() + curTop <= curBlock.find('.mix-schedule').outerHeight()) {
            curBlock.find('.mix-schedule-next').removeClass('visible');
        }
        e.preventDefault();
    });

    $('.mix-schedule-prev').click(function(e) {
        var curBlock = $(this).parents().filter('.mix-schedule-tab');
        var curTop = Number(curBlock.find('.mix-schedule-inner').css('top').replace(/px/, ''));
        curTop += curBlock.find('.mix-schedule-item').eq(0).outerHeight(true);
        if (curTop > 0) {
            curTop = 0;
        }

        curBlock.find('.mix-schedule-inner').animate({'top': curTop});

        curBlock.find('.mix-schedule-next').addClass('visible');
        if (curTop == 0) {
            curBlock.find('.mix-schedule-prev').removeClass('visible');
        }
        e.preventDefault();
    });

    $('body').on('change', '.form-file input', function() {
        var curInput = $(this);
        var curField = curInput.parents().filter('.form-file');
        var curName = curInput.val().replace(/.*(\/|\\)/, '');
        if (curName != '') {
            curField.find('.form-file-input span').html('<em>' + curName + '<a href="#"></a></em>');
        } else {
            curField.find('.form-file-input span').html(curField.find('.form-file-input span').attr('data-placeholder'));
        }
    });

    $('body').on('click', '.form-file-input span em a', function(e) {
        var curField = $(this).parents().filter('.form-file');
        curField.find('input').val('');
        curField.find('.form-file-input span').html(curField.find('.form-file-input span').attr('data-placeholder'));
        e.preventDefault();
    });

    $('body').on('click', '.text-with-hint-link', function(e) {
        var curBlock = $(this).parent();
        if (curBlock.hasClass('open')) {
            curBlock.removeClass('open');
        } else {
            $('.text-with-hint.open').removeClass('open');
            curBlock.removeClass('to-right');
            curBlock.addClass('open');
            var curPopup = curBlock.find('.text-with-hint-popup');
            if (curPopup.offset().left + curPopup.outerWidth() > $(window).width()) {
                curBlock.addClass('to-right');
            }
        }
        e.preventDefault();
    });

    $('body').on('click', '.text-with-hint-popup-close', function(e) {
        $('.text-with-hint.open').removeClass('open');
        e.preventDefault();
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.text-with-hint').length == 0) {
            $('.text-with-hint.open').removeClass('open');
        }
    });

    $('body').on('click', '.profile-field-edit', function(e) {
        $(this).parent().addClass('editable');
        $(this).parent().find('input').trigger('focus');
        e.preventDefault();
    });

    $('body').on('click', '.profile-field-save', function(e) {
        var curField = $(this).parent();
        var curForm = curField.parents().filter('form');
        if (curField.find('input').length == 1) {
            curField.find('.profile-field-value').html(curField.find('input').val());
        }
        if (curField.find('select').length == 1) {
            curField.find('.profile-field-value').html(curField.find('select').val());
        }
        curField.removeClass('editable');
        $.ajax({
            type: 'POST',
            url: curForm.attr('href'),
            dataType: 'html',
            data: curForm.serialize(),
            cache: false
        });
        e.preventDefault();
    });

    $('body').on('click', '.profile-password-link', function(e) {
        $('.profile-password-form').show();
        $('.profile-password-link').hide();
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

    $('.master-other-list-wrapper').each(function() {
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

    $('.school-other-list-wrapper').each(function() {
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

    if ($(window).width() < 1200) {
        $('.mix-schedule-inner').css({'top': 'auto'});
        $('.mix-schedule').mCustomScrollbar({
            axis: 'y'
        });
    } else {
        if ($('.mix-schedule').length > 0) {
            $('.mix-schedule').mCustomScrollbar('destroy');
        }
    }

    $('.mix-schedule').each(function() {
        var curBlock = $(this).parent();
        curBlock.find('.mix-schedule-inner').css({'top': 0});
        curBlock.find('.mix-schedule-prev, .mix-schedule-next').removeClass('visible');
        if (curBlock.find('.mix-schedule-inner').outerHeight() > curBlock.find('.mix-schedule').outerHeight()) {
            curBlock.find('.mix-schedule-next').addClass('visible');
        }
    });

    if ($(window).width() < 1200) {
        $('.table-scroll').mCustomScrollbar({
            axis: 'x',
            scrollButtons: {
                enable: true
            }
        });
    } else {
        if ($('.table-scroll').length > 0) {
            $('.table-scroll').mCustomScrollbar('destroy');
        }
    }

});

function initForm(curForm) {
    curForm.find('input.phoneRU').mask('+7 000 000-00-00');

    curForm.find('.form-input-date input').mask('00.00.0000');
    curForm.find('.form-input-date input').attr('autocomplete', 'off');
    curForm.find('.form-input-date input').addClass('inputDate');

    curForm.find('.form-input input').blur(function(e) {
        $(this).val($(this).val()).change();
    });

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