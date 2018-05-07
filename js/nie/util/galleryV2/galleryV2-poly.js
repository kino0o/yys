var Gallery = function () {
    function e() {
        var e = $.browser;
        return 1 == e.msie ? e.version : 11
    }

    function l(e) {
        var l = e.options, i = l.galleryContainer.find(".gallery_item"), t = i.length, n = i.width(), r = i.height();
        if (t == l.slidesPerView) {
            var o = l.galleryContainer.html();
            l.galleryContainer.append(o), i = l.galleryContainer.find(".gallery_item")
        }
        i.each(function () {
            $(this).css("margin-left", -n / 2), $(this)[0].style[f + "ransitionDuration"] = l.speed + "ms"
        }), e.options.galleryContainer.css({width: n * l.slidesPerView, height: r}), a(e, l.initialSlide)
    }

    function t(e) {
        {
            var l = e.options.galleryContainer;
            e.options.galleryContainer.find(".gallery_item").length
        }
        e.fs = l.find(".gallery_active"), e.rm = l.find(".gallery_right_middle"), e.rb = l.find(".gallery_right_back"), e.lm = l.find(".gallery_left_middle"), e.lb = l.find(".gallery_left_back")
    }

    function n(e) {
        var l = e.options, i = l.galleryContainer.find(".gallery_item"), t = (i.length, $(l.gallery_prev)),
            n = $(l.gallery_next);
        t.length > 0 && t.click(function () {
            e.lm.click()
        }), n.length > 0 && n.click(function () {
            e.rm.click()
        }), l.galleryContainer.on("click", ".gallery_item", function () {
            var l = $(this), i = l.index();
            e.toSlide(i), r(e)
        }), r(e)
    }

    function r(e) {
        var l = e.options, i = l.galleryContainer.find(".gallery_item"), t = i.length;
        l.autoPlay && (null != y && clearInterval(y), y = setInterval(function () {
            var l = $(".gallery_active").index();
            l = (l + 1) % t, e.toSlide(l)
        }, l.autoPlay))
    }

    function a(l, i, n) {
        var r = l.options, a = r.galleryContainer.find(".gallery_item"), s = a.length;
        a.eq(i).addClass("gallery_active");
        var g = (i + 1) % s;
        a.eq(g).addClass("gallery_right_middle");
        var f = (i - 1 + s) % s;
        if (a.eq(f).addClass("gallery_left_middle"), 5 == r.slidesPerView) {
            var y = (i + 2) % s;
            a.eq(y).addClass("gallery_right_back");
            var c = (i - 2 + s) % s;
            a.eq(c).addClass("gallery_left_back")
        }
        t(l), e() < 10 && "number" == typeof n && ((i > n && 0 != i || 0 == i && n == s - 1) && (a.removeClass("z-index3 z-index2"), l.rm.addClass("z-index2"), l.lm.addClass("z-index3")), (n > i && i != s - 1 || i == s - 1 && 0 == n) && (a.removeClass("z-index3 z-index2"), l.lm.addClass("z-index2"), l.rm.addClass("z-index3"))), d(l), 5 == r.slidesPerView ? o([i, g, y, f, c], l) : o([i, g, f], l)
    }

    function o(e, l) {
        for (var i = l.options, t = i.galleryContainer.find(".gallery_item"), n = t.length, r = 0; n > r; r++) $.inArray(r, e) > -1 || s(l, t.eq(r), 0, 0, 8 * i.depth)
    }

    function s(e, l, i, t, n) {
        if (l[0].style[f + "ransform"] = "translate3d(" + -t + "px,0," + -n + "px) rotateX(0deg) rotateY(" + i + "deg)", !f) {
            var r = -e.options.galleryContainer.find(".gallery_item").width();
            l.animate({"margin-left": r / 2 - t}, e.options.speed, "linear")
        }
    }

    function d(e) {
        {
            var l = e.options, i = l.galleryContainer, t = i.find(".gallery_item"), n = t.width();
            t.height()
        }
        s(e, i.find(".gallery_left_middle"), l.rotate, n + l.stretch, l.depth), s(e, i.find(".gallery_active"), 0, 0, 0), s(e, i.find(".gallery_right_middle"), -l.rotate, -n - l.stretch, l.depth), 5 == l.slidesPerView && (s(e, i.find(".gallery_left_back"), 1.4 * l.rotate, 2 * (n + l.stretch), 2 * l.depth), s(e, i.find(".gallery_right_back"), 1.4 * -l.rotate, 2 * (-n - l.stretch), 2 * l.depth))
    }

    function g(e, l) {
        var i = {index: l};
        if ("function" == typeof e.options.onGalleryStart && e.options.onGalleryStart(i), "function" == typeof e.options.onGalleryEnd) {
            var t = e.options;
            setTimeout(function () {
                t.onGalleryEnd(i)
            }, t.speed)
        }
        var n = e.fs.index();
        n != l && (e.fs.removeClass("gallery_active"), e.rm.removeClass("gallery_right_middle"), e.lm.removeClass("gallery_left_middle"), e.rb.removeClass("gallery_right_back"), e.lb.removeClass("gallery_left_back"), a(e, l, n))
    }

    var f = function () {
        if (e() < 10) return !1;
        var l, t = document.createElement("div").style, n = "t,WebkitT,MozT,msT,OT".split(",");
        for (i = 0; i < n.length; i++) if (l = n[i] + "ransform", l in t) return n[i]
    }(), y = null, c = function (e) {
        this.options = $.extend({
            rotate: 50,
            stretch: 0,
            depth: 150,
            slidesPerView: 5,
            speed: 500,
            initialSlide: 0
        }, e), this.options.galleryContainer = $(e.galleryContainer), this.fs = null, this.rm = null, this.rb = null, this.lm = null, this.lb = null, l(this), n(this)
    };
    return c.prototype = {
        toSlide: function (e) {
            g(this, e)
        }
    }, {
        create: function (e) {
            return new c(e)
        }
    }
}();