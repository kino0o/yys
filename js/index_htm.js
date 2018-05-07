$(function () {

    // 游戏手账
    var e = new Date;
    var n = e.getDay() - 1;
    0 > n && (n = 6);
    $('.index-slide-bar .link-list a.icon5 span').html($(".index-slide-bar .link-list a .icon-h .yuhun-con p").eq(n).html());
    //新闻banner
    $('#news-banner').slide({
        mainCell: '.banner-wrap ul',
        titCell: '.banner-nav ul',
        titOnClassName: 'on',
        autoPage: '<li></li>',
        autoPlay: true,
        effect: "left",
        interTime: 5e3
    });

    //新闻tab切换
    $('#news-wrap').slide({
        mainCell: '.news-list',
        titCell: '.news-tabs ul li',
        titOnClassName: 'active',
        autoPlay: false,
        effect: 'left'
    });

    //式神列表滚动
    /*$('.shishien-wrap .shishen-list').each(function (i, e) {
        $(e).children('li').each(function (i) {
            $(e).slice(i * 6, i * 6 + 6)
                .wrapAll("<ul></ul>");
        })
    });*/

    $('.shishen-section .shishen-container .shishien-wrap').slide({
        mainCell: '.shishen-list',
        effect: "left",
        autoPage: true,
        prevCell: ".shishen-prev",
        nextCell: ".shishen-next",
        pnLoop: false,
        scroll: 6,
        vis: 6
    });

    //式神类型切换
    $('.shishen-section .shishen-container').slide({
        mainCell: '.shishenlist-container',
        titCell: '.shishen-topbar .shishen-tabs a',
        trigger: 'click'
    });

    //主角切换
    $('.shishen-section .lead-container').slide({
        mainCell: '.leadlist-container',
        titCell: '.lead-tab div',
        trigger: 'click'
    });

    //式神主角切换
    $('.shishen-section').slide({
        mainCell: '.pingan-container',
        titCell: '.com-tabs a',
        trigger: 'click'
    });

    //攻略banner
    $('.strategy-banner').slide({
        mainCell: '.strategy-banner-wrap',
        titCell: '.strategy-banner-nav',
        autoPage: '<a>'
    });

    //攻略文章
    $('.strategy-right-part').slide({
        mainCell: '.strategy-list',
        titCell: '.com-tabs a',
        effect: "left"
    });

    //同人专区
    $('.tongren-section').slide({
        mainCell: '.tongren-pics-wrap',
        titCell: '.tongren-topbar ul li',
        effect: "left"
    });

    $(window).scroll(function () {
        /* $(document).height() <= $(window).height() + $(window).scrollTop() + 200 && $(".footer-page").addClass("animate");*/

        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        var offsetTop = null;
        offsetTop = $('.footer-page').offset().top;
        if (offsetTop < scrollTop + innerHeight / 2)
            $(".footer-page").addClass("animate");
    });
});