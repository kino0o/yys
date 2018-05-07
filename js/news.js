$(function () {
    // 分页
    $(".pager-dropdown").click(function () {
        $('.pager .pager-inner .pager-list').toggleClass('on');
    });

    // 侧栏
    $('#Jdownloadbtn').click(function () {
        $('#Jsider').show();
        setTimeout(function() {
            $('#Jsider').addClass('show');
        },100);
    });

    $('#Jsider .btn-close').click(function () {
        $('#Jsider').removeClass('show');
        setTimeout(function() {
            $('#Jsider').hide();
        },300);
    });

    // 近期热点
    $('.hot-banner').slide({
        mainCell: '.hot-banner-box',
        titCell: '.hot-nav',
        autoPage: '<a></a>',
        autoPlay: true,
        effect: 'left',
        interTime: 5e3
    });

    // 精选同人
    $('.tongren-banner').slide({
        mainCell: '.tongren-banner-box',
        titCell: '.tongren-nav',
        autoPage: '<a></a>',
        autoPlay: true,
        effect: 'left',
        interTime: 5e3
    });

    // 官方媒体
    $('.media-box').slide({
        mainCell: '.media-hb',
        titCell: '.media-hd span',
        delayTime: 0
    });
});