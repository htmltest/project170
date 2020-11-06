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

    $('.master-video-list').mCustomScrollbar({
        axis: 'y',
        scrollButtons: {
            enable: true
        },
        callbacks: {
            onInit: function() {
                $('.master-video-list .mCSB_buttonUp').addClass('hidden');
                $('.master-video-list .mCSB_buttonDown').removeClass('hidden');
            },

            whileScrolling: function() {
                if (this.mcs.topPct == 100) {
                    $('.master-video-list .mCSB_buttonDown').addClass('hidden');
                } else {
                    $('.master-video-list .mCSB_buttonDown').removeClass('hidden');
                }

                if (this.mcs.topPct == 0) {
                    $('.master-video-list .mCSB_buttonUp').addClass('hidden');
                } else {
                    $('.master-video-list .mCSB_buttonUp').removeClass('hidden');
                }
            }
        }
    });

    $('body').on('click', 'a.master-video-big-player-preview', function(e) {
        $('.master-video-big-player-content').html('<video src="' + $(this).attr('href') + '" controls autoplay></video>');
        $('.master-video-big-player').addClass('start');
        e.preventDefault();
    });

    $('body').on('click', 'a.master-video-list-item', function(e) {
        $('.master-video-big-player-content').html('<video src="' + $(this).attr('href') + '" controls autoplay></video>');
        $('.master-video-big-player').addClass('start');
        $('html, body').animate({'scrollTop': $('.master-video-big-player').offset().top});
        e.preventDefault();
    });

    $('.school-video-list').mCustomScrollbar({
        axis: 'y',
        scrollButtons: {
            enable: true
        },
        callbacks: {
            onInit: function() {
                $('.school-video-list .mCSB_buttonUp').addClass('hidden');
                $('.school-video-list .mCSB_buttonDown').removeClass('hidden');
            },

            whileScrolling: function() {
                if (this.mcs.topPct == 100) {
                    $('.school-video-list .mCSB_buttonDown').addClass('hidden');
                } else {
                    $('.school-video-list .mCSB_buttonDown').removeClass('hidden');
                }

                if (this.mcs.topPct == 0) {
                    $('.school-video-list .mCSB_buttonUp').addClass('hidden');
                } else {
                    $('.school-video-list .mCSB_buttonUp').removeClass('hidden');
                }
            }
        }
    });

    $('body').on('click', 'a.school-video-big-player-preview', function(e) {
        $('.school-video-big-player-content').html('<video src="' + $(this).attr('href') + '" controls autoplay></video>');
        $('.school-video-big-player').addClass('start');
        e.preventDefault();
    });

    $('body').on('click', 'a.school-video-list-item', function(e) {
        $('.school-video-big-player-content').html('<video src="' + $(this).attr('href') + '" controls autoplay></video>');
        $('.school-video-big-player').addClass('start');
        $('html, body').animate({'scrollTop': $('.school-video-big-player').offset().top});
        e.preventDefault();
    });

    $('.up-link a').click(function(e) {
        $('html, body').animate({'scrollTop': 0});
        e.preventDefault();
    });

    $('body').on('click', 'a.mix-video-player-preview', function(e) {
        $('.mix-video-player-content').html('<video src="' + $(this).attr('href') + '" controls autoplay></video>');
        $('.mix-video-player').addClass('start');
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

});

$(window).on('load resize', function() {

    $('.school-video-list, .master-video-list').each(function() {
        $(this).css({'max-height': $(this).parent().outerHeight()});
    });

    $('.school-other-list').each(function() {
        $('.school-other-list').mCustomScrollbar('destroy');
        if ($(window).width() > 1199) {
            $('.school-other-list').mCustomScrollbar({
                axis: 'x',
                scrollButtons: {
                    enable: true
                },
                callbacks: {
                    onInit: function() {
                        $('.school-other-list .mCSB_buttonLeft').addClass('hidden');
                        $('.school-other-list .mCSB_buttonRight').removeClass('hidden');
                    },

                    whileScrolling: function() {
                        if (this.mcs.leftPct == 100) {
                            $('.school-other-list .mCSB_buttonRight').addClass('hidden');
                        } else {
                            $('.school-other-list .mCSB_buttonRight').removeClass('hidden');
                        }

                        if (this.mcs.leftPct == 0) {
                            $('.school-other-list .mCSB_buttonLeft').addClass('hidden');
                        } else {
                            $('.school-other-list .mCSB_buttonLeft').removeClass('hidden');
                        }
                    }
                }
            });
        } else {
            $('.school-other-list').mCustomScrollbar({
                axis: 'y',
                scrollButtons: {
                    enable: true
                },
                callbacks: {
                    onInit: function() {
                        $('.school-other-list .mCSB_buttonUp').addClass('hidden');
                        $('.school-other-list .mCSB_buttonDown').removeClass('hidden');
                    },

                    whileScrolling: function() {
                        if (this.mcs.topPct == 100) {
                            $('.school-other-list .mCSB_buttonDown').addClass('hidden');
                        } else {
                            $('.school-other-list .mCSB_buttonDown').removeClass('hidden');
                        }

                        if (this.mcs.topPct == 0) {
                            $('.school-other-list .mCSB_buttonUp').addClass('hidden');
                        } else {
                            $('.school-other-list .mCSB_buttonUp').removeClass('hidden');
                        }
                    }
                }
            });
        }
    });

    $('.master-other-list').each(function() {
        $('.master-other-list').mCustomScrollbar('destroy');
        if ($(window).width() > 1199) {
            $('.master-other-list').mCustomScrollbar({
                axis: 'x',
                scrollButtons: {
                    enable: true
                },
                callbacks: {
                    onInit: function() {
                        $('.master-other-list .mCSB_buttonLeft').addClass('hidden');
                        $('.master-other-list .mCSB_buttonRight').removeClass('hidden');
                    },

                    whileScrolling: function() {
                        if (this.mcs.leftPct == 100) {
                            $('.master-other-list .mCSB_buttonRight').addClass('hidden');
                        } else {
                            $('.master-other-list .mCSB_buttonRight').removeClass('hidden');
                        }

                        if (this.mcs.leftPct == 0) {
                            $('.master-other-list .mCSB_buttonLeft').addClass('hidden');
                        } else {
                            $('.master-other-list .mCSB_buttonLeft').removeClass('hidden');
                        }
                    }
                }
            });
        } else {
            $('.master-other-list').mCustomScrollbar({
                axis: 'y',
                scrollButtons: {
                    enable: true
                },
                callbacks: {
                    onInit: function() {
                        $('.master-other-list .mCSB_buttonUp').addClass('hidden');
                        $('.master-other-list .mCSB_buttonDown').removeClass('hidden');
                    },

                    whileScrolling: function() {
                        if (this.mcs.topPct == 100) {
                            $('.master-other-list .mCSB_buttonDown').addClass('hidden');
                        } else {
                            $('.master-other-list .mCSB_buttonDown').removeClass('hidden');
                        }

                        if (this.mcs.topPct == 0) {
                            $('.master-other-list .mCSB_buttonUp').addClass('hidden');
                        } else {
                            $('.master-other-list .mCSB_buttonUp').removeClass('hidden');
                        }
                    }
                }
            });
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