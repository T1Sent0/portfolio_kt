import "./jquery.inputmask";

$(document).ready(function () {

    /*
    *
    * Функция загрузки новых картинок в слайдер в зависимости от выбранного года
    *
    */

    $('.container-year').on('click', 'span', function() {
        $('.active').toggleClass('active');
        $(this).toggleClass('active')
    });

    /*==========================================*/


    const bodySelector = $('body');

    const onClass = "on";
    const showClass = "show";

    $("input, textarea").on("checkval", function () {
        let label = $(this).prev("label");
        if (this.value !== "") {
            label.addClass(showClass);
        } else {
            label.removeClass(showClass);
        }
    }).on("keyup", function () {
        $(this).trigger("checkval");
    }).on("focus", function () {
        $(this).prev("label").addClass(onClass);
    }).on("blur", function () {
        $(this).prev("label").removeClass(onClass);
    }).trigger("checkval");


    bodySelector.on('click', '.close', desktopCloseContact);

    bodySelector.on('focus', 'input, textarea', focusFunc);
    bodySelector.on('focusout', 'input[type=tel]', focusOutTelFunc);

    const messageIcon = $('.message-icon');
    const mobileMenuBNlock = $('.mobile-menu');


    $(window).resize(function () {
        if (document.documentElement.clientWidth > 630) {
            messageBlock.css('display', 'none');
            mobileMenuBNlock.css({display: 'none'});
            $('.burger').css('background', 'url(../img/mobile/all_services.svg) no-repeat').removeClass('close-burger');
        }
    });

    const messageBlock = $('.mes');

    function desktopCloseContact() {
        $('.container-form, .opacity').hide();
    }

    function focusFunc() {
        $(this).removeClass('error');
    }

    $('#send-form').submit(function () {
        let th = $(this);
        let data = $(this).serialize();
        let err = false;

        th.find('input[name=name], input[name=phone]').each(function () {
            if ($(this).val() === ''){
                $(this).addClass('error');
                err = true;
            }
        });

        if (!err) {
            $.ajax({
                type: "POST",
                url: "../php/send_message.php",
                data: data
            }).done(function() {
                $('#send-form').find('label').removeClass(showClass);
                $('#send-form, .hiden').hide();
                $('.success-two').show();
                setTimeout(showMenuAfterSendMessageTwo, 5000);
                $("#send-form").trigger("reset");
            })
        }
        return false;
    });

    $('#send-form-pensil-action').submit(function () {
        let th = $(this);
        let data = $(this).serialize();
        let err = false;

        th.find('input[type=tel], input[type=text]').each(function () {
            if ($(this).val() === '') {
                $(this).addClass('error');
                err = true;
            }
        });

        if (!err) {
            $.ajax({
                type: "POST",
                url: "../php/send_message.php",
                data: data
            }).done(function () {
                $('#send-form-pensil-action').find('label').removeClass(showClass);
                $('#send-form-pensil-action, .hiden').hide();
                $('.success-three').show();
                setTimeout(showMenuAfterSendMessageThree, 5000);
                $("#send-form-pensil-action").trigger("reset");
            })
        }
        return false;
    });

    function showMenuAfterSendMessageTwo() {
        $(".success-two").hide();
        $('#send-form, .hiden').show();
        $('#send-form').css({display: 'table'});
    }

    function showMenuAfterSendMessageThree() {
        $(".success-three").hide();
        $('#send-form-pensil-action, .hiden').show();
        $('#send-form-pensil-action').css({display: 'table'});
    }

    bodySelector.on('focus', 'input[name=phone]', mask);
    bodySelector.on('keydown', 'input[name=name]', blockEditSymbolLite);

    function mask() {
        $('input[name=phone]').inputmask({mask: "+7 (999) 999-99-99"});
    }


    function blockEditSymbolLite() {

        let valueRgx = $(this).val();

        let rgxp = /[\\!\\@\\#\\$\\%\\^\\&\\*\\(\\)\\_\\;\\:\\?\\*\\=\\+\\~\\``]/g;

        if (rgxp.test(valueRgx)) {

            $(this).val("");

        }

    }

    function focusOutTelFunc() {
        if ($(this).val()) {

            let valueRgx = $(this).val();

            let rgxp = /[\\_\\]/g;

            if (rgxp.test(valueRgx)) {

                $(this).val("");
                $(this).addClass('error');
                err = true;
                return err;
            }
        }
    }
});