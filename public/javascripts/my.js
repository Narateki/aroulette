
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}


$(document).ready(function() {
    $("#button").click(function() {
        rand = randomInteger(1440, 2520);
        $("#roul2").rotate(0);
        $("#roul2").rotate({
            animateTo:rand,
            duration: rand*7,
            easing: $.easing.easeOutCubic
            })
    });
});