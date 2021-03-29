$(".pop .slide_group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간[단위:ms]
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
})