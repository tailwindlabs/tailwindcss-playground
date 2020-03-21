
$(function () {
  $('.load-in').css('display', 'none');
  $('.load-in').fadeIn(1000);

  $('.load-out').fadeIn('fast').delay(1000).fadeOut('slow');

  $.get("__nav.html", function (data) {
    $("#nav").append(data);
  });
  $.get("__footer.html", function (data) {
    $("#footer").append(data);
  });
  $.get("__footer-2.html", function (data) {
    $("#footer-2").append(data);
  });

  AOS.init(
    {
      disable: 'mobile',
    }
  );



  //nav
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
      $("nav").addClass("active");
    } else {
      $("nav").removeClass("active");
    }
  });


  //Small only
  if ($(window).width() < 990) {

    $("#nav").click(function () {
      $(".toggle-hidden").slideToggle();
      $('.hamburger-menu').toggleClass('animate');
    });

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      $(".toggle-hidden").slideUp();
      $('.hamburger-menu').removeClass('animate');
    });

  }

  // Background data image
  $(".bg-img").each(function () {
    var attr = $(this).attr('data-image-src');

    if (typeof attr !== typeof undefined && attr !== false) {
      $(this).css('background', 'url(' + attr + ') center bottom  / cover no-repeat');

    }

  });


  //Add animate class
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
      $(".animate-add").addClass("active");
    } else {
      $(".animate-add").removeClass("active");
    }
  });



  // refresh on resize
  $(function ($) {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    $(window).resize(function () {
      if (windowWidth != $(window).width() || windowHeight != $(window).height()) {
        location.reload();
        return;
      }
    });
  });


  //Video Poster image
  $('.play').click(function () {
    video = '<iframe src="' + $(this).attr('data-video') + '"></iframe>';
    $(this).replaceWith(video);
  });

});


(function ($) {
  "use strict"; // Start of use strict
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });


})(jQuery); // End of use strict




// Smooth Scroll

if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
  var delta = 0;
  if (event.wheelDelta) delta = event.wheelDelta / 120;
  else if (event.detail) delta = -event.detail / 3;

  handle(delta);
  if (event.preventDefault) event.preventDefault();
  event.returnValue = false;
}

var goUp = true;
var end = null;
var interval = null;

function handle(delta) {
  var animationInterval = 20; //lower is faster
  var scrollSpeed = 20; //lower is faster

  if (end == null) {
    end = $(window).scrollTop();
  }
  end -= 30 * delta;
  goUp = delta > 0;

  if (interval == null) {
    interval = setInterval(function () {
      var scrollTop = $(window).scrollTop();
      var step = Math.round((end - scrollTop) / scrollSpeed);
      if (scrollTop <= 0 ||
        scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
        goUp && step > -1 ||
        !goUp && step < 1) {
        clearInterval(interval);
        interval = null;
        end = null;
      }
      $(window).scrollTop(scrollTop + step);
    }, animationInterval);
  }
}

// line laod
var Nanobar = function () {
  var c, d, e, f, g, h, k = {
    width: "100%",
    height: "4px",
    zIndex: 9999,
    top: "0"
  },
    l = {
      width: 0,
      height: "100%",
      clear: "both",
      transition: "height .3s"
    };
  c = function (a, b) {
    for (var c in b) a.style[c] = b[c];
    a.style["float"] = "left"
  };
  f = function () {
    var a = this,
      b = this.width - this.here;
    0.1 > b && -0.1 < b ? (g.call(this, this.here), this.moving = !1, 100 == this.width && (this.el.style.height = 0, setTimeout(function () {
      a.cont.el.removeChild(a.el)
    }, 100))) : (g.call(this, this.width - b / 4), setTimeout(function () {
      a.go()
    }, 16))
  };
  g = function (a) {
    this.width = a;
    this.el.style.width = this.width + "%"
  };
  h = function () {
    var a = new d(this);
    this.bars.unshift(a)
  };
  d = function (a) {
    this.el = document.createElement("div");
    this.el.style.backgroundColor = a.opts.bg;
    this.here = this.width = 0;
    this.moving = !1;
    this.cont = a;
    c(this.el, l);
    a.el.appendChild(this.el)
  };
  d.prototype.go = function (a) {
    a ? (this.here = a, this.moving || (this.moving = !0, f.call(this))) : this.moving && f.call(this)
  };
  e = function (a) {
    a = this.opts = a || {};
    var b;
    a.bg = a.bg || "#f39c12";
    this.bars = [];
    b = this.el = document.createElement("div");
    c(this.el, k);
    a.id && (b.id = a.id);
    b.style.position = a.target ? "relative" : "fixed";
    a.target ? a.target.insertBefore(b, a.target.firstChild) : document.getElementsByTagName("body")[0].appendChild(b);
    h.call(this)
  };
  e.prototype.go = function (a) {
    this.bars[0].go(a);
    100 == a && h.call(this)
  };
  return e
}();
var nanobar = new Nanobar();
nanobar.go(30);
nanobar.go(60);
nanobar.go(100);


  // About Us Background Image Animation

