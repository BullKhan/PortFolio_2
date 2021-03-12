$(".slide_notice .slide_group").slick({
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
$('.slide_notice .slide_group .slick-arrow').hover(
    function(){
        $(this).addClass('on')
    },
    function(){
        $(this).removeClass('on')
    }
)

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






// 회원가입 폼 데이터 유효성 체크
$('.joinBox form').on('submit', function(){

    $('input').css({
        border:'1px solid #ddd'
    })

    // ID 유효성체크 : 3~5글자 범위, 특수문자 제외
    var idbox = $('#idbox').val()
    if ( idbox.length>=3 && idbox.length<6 ) {
        for ( var i=0; i<idbox.length; i++ ) {
            var ch = idbox.charAt(i)
            if ( !(ch>='0' && ch<='9') && !(ch>='A' && ch<='Z') && !(ch>='a' && ch<='z') ) {
                alert('특수문자는 포함하지 않습니다.')
                $('#idbox').css({
                    border:'1px solid #f00'
                }).focus().select()
                return false
            }
        }
    } else {
        alert('아이디는 3~5글자 범위입니다.')
        $('#idbox').css({
            border:'1px solid #f00'
        }).focus().select()
        return false
    }

    // PW 유효성체크 : 숫자,특수문자 중 2가지 이상 조합, 첫글자는 영문만
    // 정규표현식
    // ^ : 첫문자일치여부확인, $ : 끝문자일치여부확인
    // [^] : 대갈호 안에 ^는 !(not)으로 동작함.
    // ?= : 조건확인 후 처음으로 돌아감
    // . : 임의의 모든문자(숫자,문자,특수문자 포함한 모든 문자)
    // * : 앞에 글자가 0번 이상 나올 수 있음
    var check = /^(?=[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).*$/
    var pwbox = $('#pwbox').val()
    if ( !check.test(pwbox) ) {
        alert('비밀번호 조건에 맞지 않습니다.')
        $('#pwbox').css({
            border:'1px solid #f00'
        }).focus().select()
        return false
    }

    var irum = $('#irum').val()
    var check2 = /^[가-힣]+$/
    if ( irum.length>=2 ) {
        if ( !check2.test(irum) ) {
            alert('이름은 한글로만 두글자 이상이여야 합니다.')
            $('#irum').css({
            border:'1px solid #f00'
            }).focus().select()
            return false
        }
    } else {
        alert('이름은 한글로만 두글자 이상이여야 합니다.')
        $('#irum').css({
            border:'1px solid #f00'
        }).focus().select()
        return false
    }

    // 휴대전화 유효성체크 : 중간번호(3~4자리), 끝번호(4자리)
    var hp1 = $('#hp1').val()
    var hp2 = $('#hp2').val()
    var check3 = /^[0-9]{3,4}$/   // \d{3,4}
    var check4 = /^[0-9]{4}$/
    if ( !check3.test(hp1) ) {
        alert('번호형식이 맞지 않습니다.')
        $('#hp1').css({
            border:'1px solid #f00'
        }).focus().select()
        return false
    } else if ( !check4.test(hp2) ) {
        alert('번호형식이 맞지 않습니다.')
        $('#hp2').css({
            border:'1px solid #f00'
        }).focus().select()
        return false
    }

    // 이메일 아이디 유효성체크
    // 1차도메인.2차도메인 or 1차도메인.2차도메인.3차도메인
    //            xxx.com or xxx.co.kr
    var emailid = $('#emailid').val()
    var check5 = /^[a-zA-Z0-9]+$/
    if ( !check5.test(emailid) ) {
        alert('이메일 형식이 맞지 않습니다.')
        $('#emailid').css({
            border:'1px solid #f00'
        }).focus().select()
        return false
    }

    var emaildo = $('#emaildomain').val()
    var check6 = /^[a-zA-Z0-9]+[\.][a-z]+([\.][a-z]+)*$/
    if ( emaildo !== '' ) {
        if ( !check6.test(emaildo) ) {
            alert('이메일 형식이 틀립니다.')
            $('#emaildomain').css({
                border:'1px solid #f00'
            }).focus().select()
            return false
        }
    } else {
        alert('이메일 도메인을 선택해주세요.')
        $('#emaildomain').css({
            border:'1px solid #f00'
        }).focus().select()
        return false
    }

    // 성별 선택 : 반드시 선택하도록 함
    var gender = $('input[name=gender]:checked').length
    if ( gender===0 ) {
        alert('성별을 선택해 주세요.')
        $('input[name=gender]').focus()
        return false
    }


    return false    // test 완료 후 삭제요망
})


$('#pwbox').on('focus', function(){
    $(this).after('<span>비밀번호 첫 글자는 영문자이며 숫자, 특수문자는 각각 1개 이상 포함되어야 합니다.</span>')
    $(this).next().css({
        color:'#f00', paddingLeft:'10px'
    })
})
$('#pwbox').on('blur', function(){
    $(this).next().remove()
})

// 이메일 select box
$('#domainlist').on('change', function(){
    var doval = $('#domainlist option:selected').val()
    if ( doval!='noselect' && doval!='self' ) {
        $('#emaildomain').val(doval)
    } else if ( doval === 'noselect' ) {
        $('#emaildomain').attr({
            disabled:true
        }).val('').focus()
    } else {
        $('#emaildomain').attr({
            disabled:false
        }).val('').focus()
    }
})

// 관심분야 all 선택시, 체크박스 전체선택
// ^=? : ?로 시작하는 것
$('#all').on('click',function(){
    var bool = $(this).prop('checked')
    $('input[name^=co]').prop('checked', bool)
})

// textarea 남은글자 표시하기
$('#memo').on('keydown', function(){
    var txtcnt = $(this).val().length
    var txtmax = 10
    var remain = txtmax - txtcnt
    $('.remain').text(remain)
})

// 생년월일 칸에 datepicker 연결
$('#birth').datepicker({
    dataFormat:'yy-mm-dd',
    changeMonth:true,
    changeYear:true,
    yearRange:'1900:2021'
})
