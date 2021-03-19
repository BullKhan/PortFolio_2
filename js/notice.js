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
$('.jlnav_wrap .nav a').on('click',function(e){
    e.preventDefault()
    var url = this.href
    $(this).parent().addClass('active').siblings().removeClass('active on')
    $('#boxContent').remove()
    $('#contentBox').load(url+' #boxContent')
})

