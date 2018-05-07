$(function () {

    var lineTop = 0;
    var lineDirecton = 1;
    var line = $('.wrap1 .cont .NIE-download .NIE-qrcode .line');
    setInterval(function () {
        if (lineTop > 93) {
            lineDirecton = -1;
        } else if (lineTop < 0) {
            lineDirecton = 1;
        }
        lineTop += 2 * lineDirecton;
        line.css('top', lineTop);
    }, 50);

    $('#version-info-list').on('click', 'li', function (e) {
        e.preventDefault();
        $('#dialog-new').toggle();
        new Swiper('#dialog-swiper', {
            speed: 0,
            simulateTouch: !1,
            initialSlide: $(this).index(),
            prevButton: "#dialog-new .prev",
            nextButton: "#dialog-new .next"
        });

        $('#dialog-new .dialog-close').click(function () {
            $('#dialog-new').hide();
        });

        $('#dialog-new .text').niceScroll({
            background: "#e7dfdd",
            cursorcolor: "#be9f5c",
            cursorwidth: "5px",
            cursorborder: 0,
            autohidemode: !1
        });

        $('.dialog-new .img-cont .text').getNiceScroll().resize();
    });

    Gallery.create({
        galleryContainer: "#Jwrap3",
        slidesPerView: 3,
        gallery_prev: '.special-prev',
        gallery_next: '.special-next',
        stretch: isIE() < 10 ? -408 : -418,
        initialSlide: 0,
        depth: 300,
        rotate: 45,
        autoPlay: false
    });


});

function isIE() {
    var e = $.browser;
    return 1 == e.msie ? e.version : 11
}