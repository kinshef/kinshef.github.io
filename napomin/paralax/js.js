$(document).ready(function() {
    $('.paraWrapper').mousemove(function(e) {
        parallax(e, document.getElementById('c1'), 1);
        parallax(e, document.getElementById('c2'), 2);
        parallax(e, document.getElementById('c3'), 3);
        parallax(e, document.getElementById('c4'), 4);
        parallax(e, document.getElementById('c5'), 5);
        parallax(e, document.getElementById('c6'), 6);
        parallax(e, document.getElementById('c7'), 7);
        parallax(e, document.getElementById('c8'), 8);
    });
});

function parallax(e, target, layer) {
    var strength = 20;
    var layer_coeff = strength / layer;
    var x = ($(window).width() - target.offsetWidth) / 2 - (e.pageX - ($(window).width() / 2)) / layer_coeff;
    var y = ($(window).height() - target.offsetHeight) / 2 - (e.pageY - ($(window).height() / 2)) / layer_coeff;
    $(target).offset({
        top: y,
        left: x
    });
};