var pfList = ''
$.ajax({
    type:'GET',
    url:'../js/pf.json',
    dataType:'json',
    beforeSend: function(xhr){
        if(xhr.overrideMimeType) {
            xhr.overrideMimeType('application/json')
        }
    },
    success:function(data){
        pfList = data
        dataPrint()
    },
    error:function(xhr){
        alert(xhr.status + ' / ' + xhr.errorText)
    }
})


// pf - grid
function masonry(){
    $('.section8 .pf_contents').masonry({
        // options...
        columnWidth: '.pfbox',
        percentPosition: true,
    });
}

function dataPrint(){
    list = '';
    for( var i in pfList ) {
        list += `<div class="pfbox"><div class="imgbox"><a href="#none"><div><img src="${pfList[i].Image}" onerror="this.src='img/noimg.gif'" alt=""></div></a></div><div class="abox"><a href="#none">${pfList[i].Title}</a></div></div>`
    }
    $('.section8 .pf_contents').append(list)
    // setTimeout(masonry, 500)
    $('.section8 .pf_contents').imagesLoaded(function(){
        masonry();
    })

    $('.pfbox .imgbox').hover(
        function(){
            $(this).addClass('on')
            $(this).next().addClass('on')
        },
        function(){
            $(this).removeClass('on')
            $(this).next().removeClass('on')
        }
    )
    $('.pfbox .abox').hover(
        function(){
            $(this).addClass('on')
        },
        function(){
            $(this).removeClass('on')
        }
    )
}


$('.section8 .pushbtn button').on('click', function(e){
    e.preventDefault()
    $('.section8 .formBox').css({ display:'block' })
})

$('.formBox button[type=submit]').on('click', function(e){
    e.preventDefault()
    if( $('#title').val()==='' ) {
        alert('포트폴리오 등록시 이름은 필수입니다.')
        return false
    }
    var last = {
        Title : $('#title').val(),
        Image : $('#imgsrc').val()
    }
    
    pfList.push(last)
    $('#title').val('')
    $('#imgsrc').val('')
    $('.pfbox').remove()
    dataPrint()
})

$('.formBox button[type=reset]').on('click', function(){
    $('.section8 .formBox').css({ display:'none' })
})