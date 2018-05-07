$(function () {
    $('#NIE-topBar-news').mouseover(function () {
        $('#NIE-topBar-abc-s').css('visibility', 'hidden');
        $('#NIE-topBar-abc-b').show();
        $('#NIE-topBar-news-close').show();
    });
    $('#NIE-topBar-news').mouseout(function () {
        $('#NIE-topBar-abc-s').css('visibility', 'visible');
        $('#NIE-topBar-abc-b').hide();
        $('#NIE-topBar-news-close').hide();
    });
    $('#NIE-topBar-news-close').click(function () {
        $('#NIE-topBar-abc-s').show();
        $('#NIE-topBar-abc-b').hide();
        $(this).hide();
    });
    //导航
    $(".top-nav-list li").width($(window).width() < 1440 ? "110px" : "118px");
    $(window).resize(function () {
        $(".top-nav-list li").width($(window).width() < 1440 ? "110px" : "118px");
    });
    $('.top-nav-list .gfqd a').mouseenter(function () {
        $(this).addClass('hover');
        $('#top-bar').addClass('hover');
        $('.top-bar-more').addClass('hover');
    });
    $('.top-nav-list .gfqd a').mouseleave(function () {
        $(this).removeClass('hover');
        $('#top-bar').removeClass('hover');
        $('.top-bar-more').removeClass('hover');
    });
    $('.top-bar-more').mouseenter(function () {
        $(this).addClass('hover');
        $('#top-bar').addClass('hover');
        $('.top-nav-list .gfqd a').addClass('hover');
    });
    $('.top-bar-more').mouseleave(function () {
        $(this).removeClass('hover');
        $('#top-bar').removeClass('hover');
        $('.top-nav-list .gfqd a').removeClass('hover');
    });

    $(window).scroll(function () {
        /* $(document).height() <= $(window).height() + $(window).scrollTop() + 200 && $(".footer-page").addClass("animate");*/

        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop > 55) {
            $("#top-bar").addClass("fixed");
            $(".logo").addClass("animate");
        } else {
            $("#top-bar").removeClass("fixed");
            $(".logo").removeClass("animate");
        }
    });
    //下载开关门
    $(".close-donwloadbar").click(function () {
        $('.nie-download-wrap').addClass('fold');
    });
    $(".fold-wrap").click(function () {
        $('.nie-download-wrap').removeClass('fold');
    });
});