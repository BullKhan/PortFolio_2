// jlnav 호버
$('.jlnav .jlnav_wrap .nav li').hover(
    function(){
        if ( !$(this).hasClass('active') ) {
            $(this).addClass('on')
        }
    },
    function(){
        if ( !$(this).hasClass('active') ) {
            $(this).removeClass('on')
        }
    }
)





