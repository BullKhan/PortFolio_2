// slide_group
$(".section1 .slide_group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 5000, // 간격시간[단위:ms]
    dots: true, // 번호 버튼 나타낼 여부
    speed: 600, // 바뀌는시간(*생략가능)
    slidesToShow: 1, // 보여질슬라이드수(*생략가능)
    slidesToScroll: 1, // 이동슬라이드수(*생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(*생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(*생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear', // 속도함수(*생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(*생략가능)
    fade: false, // 페이드효과 여부, 안주면 우좌로 슬라이드 이동(*생략가능)
    arrows: true, // 좌우화살표 사용여부(*생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    responsive: [{
        breakpoint: 1025,
        settings: {
            arrows: false,
        }
    }]
})
// slide_group - 화살표 호버
$('.section1 .slide_group .slick-arrow').hover(
    function(){
        $(this).addClass('on')
    },
    function(){
        $(this).removeClass('on')
    }
)



// slide_group_b
$(".section4 .slide_group_b").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 5000, // 간격시간[단위:ms]
    dots: true, // 번호 버튼 나타낼 여부
    speed: 600, // 바뀌는시간(*생략가능)
    slidesToShow: 1, // 보여질슬라이드수(*생략가능)
    slidesToScroll: 1, // 이동슬라이드수(*생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(*생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(*생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear', // 속도함수(*생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(*생략가능)
    fade: false, // 페이드효과 여부, 안주면 우좌로 슬라이드 이동(*생략가능)
    arrows: true, // 좌우화살표 사용여부(*생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    responsive: [{
        breakpoint: 1025,
        settings: {
            arrows: false,
        }
    }]
})


// 게시판 무빙
var updown = setInterval(lifting, 3000)
function lifting() {
    $('.section6 .notice table').animate({
        marginTop:'-25px'
    }, 500, function(){
        $(this).find('tr').eq(0).appendTo(this)
        $(this).css({
            marginTop:'0'
        })
    })
}
$('.notice table').on('mouseover', 'tbody',function(){
    clearInterval(updown)
})
$('.notice table').on('mouseout', 'tbody',function(){
    updown = setInterval(lifting, 3000)
})

var wh;
$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    wh = $(window).height();
    var section5Near1 = $('.section5').offset().top - wh/2 - 400
    var section5Near2 = $('.section5').offset().top - wh/2

    // article 5
    if ( sct >= section5Near1 && !$('.section5 .banner1').hasClass('on') ) {
        $('.section5 .banner1').addClass('on')
        $('.section5 .banner2').addClass('on')
    } else if ( sct >= section5Near2 && !$('.section5 .banner3').hasClass('on') ) {
        $('.section5 .banner3').addClass('on')
        $('.section5 .banner4').addClass('on')
    } else if ( sct===0 ) {
        $('.section5 .banner1').removeClass('on')
        $('.section5 .banner2').removeClass('on')
        $('.section5 .banner3').removeClass('on')
        $('.section5 .banner4').removeClass('on')
    }
})

