// Background Movement 
var lFollowX = 0,
lFollowY = 0,
a = 0,
y = 0,
friction = 1 / 10;

function moveBackground() {
a += (lFollowX - a) * friction;
y += (lFollowY - y) * friction;

translate = 'translate(' + a + 'px, ' + y + 'px) scale(1.1)';

$('.bg-move').css({
'-webit-transform': translate,
'-moz-transform': translate,
'transform': translate
});

window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
// lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
lFollowY = (10 * lMouseY) / 100;

});

moveBackground();