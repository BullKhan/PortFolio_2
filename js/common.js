//  적응형 device
var deviceSize = 1024;
function scrollOX(status) {
    $('html').css({ overflowY:status })
    var htmlWidth = $('html').width();
    return htmlWidth
}
var swh = scrollOX('hidden');
var sws = scrollOX('scroll');
var swd = swh - sws;
if ( swd > 0 ) {
    deviceSize = deviceSize - swd;
}
var ww;
var wh;
function calc_width(){
    ww = $(window).width();
    wh = $(window).height();
    if ( ww > deviceSize && !$('html').hasClass('pc') ) {
        $('html').addClass('pc').removeClass('mobile')
        // $('#header #nav').addClass('on')
        $('#header #nav').css({'display':'block'})
        $('#header .opcl').removeClass('on open')
        // $('.depth1 > li').removeClass('on')
        $('html').scrollTop(0)
        // $('#nav').find('.depth2').slideUp(1)
        $('#nav').find('.depth2').css({display:'none'})
        $('#header > div').addClass('row')
    } else if ( ww <= deviceSize && !$('html').hasClass('mobile') ){
        $('html').addClass('mobile').removeClass('pc')
        $('#nav').slideUp(1)
        // $('#header #nav').removeClass('on')
        $('#header #nav').css({'display':'none'})
        $('#header .opcl').addClass('on')
        $('html').scrollTop(0)
        $('#header > div').removeClass('row')
        $('#nav').find('.depth2').css({display:'none'})
        $('#nav').find('.depth2').css({ paddingBottom:0 })
    }
}
calc_width();
$(window).on('resize', function(){ calc_width(); })

// opcl
$('#header .opcl').on('click', function(){
    if ($('html').hasClass('mobile')) {
        if ( !$('#header .opcl').hasClass('open') ) {
            $('#header .opcl').addClass('open')
            $('#nav').stop().slideDown(300)
        } else if ( $('#header .opcl').hasClass('open') ) {
            $('#header .opcl').removeClass('open')
            $('#nav').stop().slideUp(300)
            $('#nav').find('.depth2').stop().slideUp(300)
            $('.depth1 > li').find('a > span:first-child').addClass('on')
            $('.depth1 > li').find('a > span:last-child').removeClass('on')
        }
    }
})


// nav 클릭시 메뉴명 한영변환
$('.depth1 > li').on('click', function(e){
    if ( $('html').hasClass('mobile') ) {
        e.preventDefault()
        if ( $(this).find('.depth2').css('display')==='none' ) {
            $(this).find('.depth2').stop().slideDown(300)
            $(this).siblings().find('.depth2').stop().slideUp(300)
            $(this).find('a > span:first-child').removeClass('on')
            $(this).find('a > span:last-child').addClass('on')
            $(this).siblings().find('a > span:first-child').addClass('on')
            $(this).siblings().find('a > span:last-child').removeClass('on')
        }
        else if (  $(this).find('.depth2').css('display')==='block' ){
            $(this).find('.depth2').stop().slideUp(300) 
            $(this).find('a > span:first-child').addClass('on')
            $(this).find('a > span:last-child').removeClass('on')
        }
    } 
})
$('.depth2 > li').on('click', function(e){
    e.stopPropagation()
})

// nav 호버시 메뉴명 한영변환

$('#header .depth1 > li').hover(
    function(){
        if ( $('html').hasClass('pc') ) {
            $(this).find('.depth2').stop().slideDown(300)
            $(this).find('a > span:first-child').removeClass('on')
            $(this).find('a > span:last-child').addClass('on')
        }
    },
    function(){ 
        if ( $('html').hasClass('pc') ) {
            $(this).find('.depth2').stop().slideUp(300) 
            $(this).find('a > span:first-child').addClass('on')
            $(this).find('a > span:last-child').removeClass('on')
        }
    }
)

// header.on hover
$('#header .hd_body').hover(
    function(){
        if ( $('#header').hasClass('on') && $('html').hasClass('pc') ) {
            $(this).css({ 'background': 'rgba(255,255,255,1)' })
            $('#nav .depth1 > li .depth2').css({ 'background': 'rgba(255,255,255,1)' })
        }
    },
    function(){ 
        if ( $('#header').hasClass('on') && $('html').hasClass('pc') ) {
            $(this).css({ 'background': 'rgba(255,255,255,0.7)' })
            $('#nav .depth1 > li .depth2').css({ 'background': 'rgba(255,255,255,0.7)' })
        }
    }
)

$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if ( sct>=1 && !$('#header').hasClass('on') ) {
        $('#header').addClass('on')
        $('#nav').removeClass('on')
        $('.gotop').addClass('on')
    } else if ( sct<1 && $('#header').hasClass('on') ) {
        $('#header').removeClass('on')
        $('.gotop').removeClass('on')
    }
})

// $('#nav .depth2lt .qna a').on('click',function(){
//     $('#contentBox #boxContent').remove()
//     $('#contentBox').load('qna.html #boxContent')
//     $('.jlnav_wrap .nav li').eq(1).addClass('active').siblings().removeClass('active')
// })


$('.gotop').on('click', function(e){
    e.preventDefault();
    var sct = $(window).scrollTop();
    if ( sct===0 ) {
        return false
    } else {
        $('html').animate({
            scrollTop:0
        }, 500)
    }
})