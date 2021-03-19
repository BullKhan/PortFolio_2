var ulh, lih;
function calc_height(){
    lih = $('.infotxt li').eq(1).innerHeight()
    $('.processInfo .infotxt li').css({
        height: lih + 'px'
    })
}
calc_height();

$(window).on('resize', function(){
    $('.infotxt li').eq(1).css({height:'auto'})
    calc_height(); 
})

$('.processInfo .infotxt li').hover(
    function(){
        $(this).addClass('on')
    },
    function(){
        $(this).removeClass('on')
    }
)