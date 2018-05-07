$(function () {
    var timer = null;
    timer = setTimeout(function () {
        $('#reload').addClass('hidden');
    }, 500, function () {
        clearTimeout(timer);
        timer = null;
    });

    $('#main').show();
    timer = setTimeout(function () {
        $('#main').addClass('loaded');
    }, 30, function () {
        clearTimeout(timer);
        timer = null;
    });

    //剧情
    $('#second-page .aside-circle-tab').on('click', 'a', function () {
        $(this).addClass('on').siblings().removeClass('on');
        var tab = $(this).data('tab');
        $('#second-page .second-page-container.'+tab).addClass('show').siblings().removeClass('show');
    });

    //剧情 主角
    $('.second-page-container.zhujiao').slide({
        mainCell: '.zj-wrap',
        titCell: '.com-tab a',
        titOnClassName: 'active',
        trigger: 'click'
    });
});