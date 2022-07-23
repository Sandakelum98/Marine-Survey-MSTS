(function ($) {
    "use strict";
    $(document).ready(function () {
        $('.mobile-menu-toggle').on('click', function () {
            $('.student-sidebar').addClass('show-sidebar');
            $('body').toggleClass('menu-has-opened');
        });
        $('.schedule-tabs .schedule-tab').on('click', function () {
            $('.time-table').hide();
            var dataId = $(this).data('id');
            $('#' + dataId).slideDown();
            $('.schedule-tabs .schedule-tab').removeClass('active');
            $(this).addClass('active');
        });
        $('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplay: true,
            autoplayHoverPause: true,
            navText: '',
            controls: true,
            responsive: {
                0: {
                    items: 1
                }
            }
        });

        //JS function for FAQ
        $(".faq").on("click", function () {
            if (!$(this).closest('li').hasClass("active")) {
                $('.faq-list .faq-answer').slideUp(1000);
                $(this).closest('li').find('.faq-answer').slideDown(1000);
                $('.faq-list li').removeClass('active');
                $(this).closest('li').addClass('active');
            }
        });

        //faq slider
        $('.faq-slider').bxSlider({
            auto: true,
            autoControls: false,
            stopAutoOnClick: true,
            pager: false,
            nextText: '<i class="fa fa-angle-right"></i>',
            prevText: '<i class="fa fa-angle-left"></i>'
        });

    });
})(jQuery);