$(document).ready(function(){
    $( "#menu_1" ).click(function() {
        $("#p1").load("xh4n3.html");
        $('html, body').animate({
            scrollTop: $("#page_1").offset().top
        }, 700);
    });
    $( "#menu_2" ).click(function() {
        $("#p1").load("portfolio.html");
        $('html, body').animate({
            scrollTop: $("#page_1").offset().top
        }, 700);
    });
    
    $('#poplemon').popup();
    $('#poplemon').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });
    
});
