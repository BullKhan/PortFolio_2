function getCookie(name) {
    var cookie = document.cookie
    if (cookie != "" ) {
        var cname = cookie.split(';')
        for ( var i in cname ) {
            var ncname = cname[i].split('=')
            if ( ncname[0] == name ) {
                return ncname[1]
            }
        }
    }
    return
}

function wopen(){
    var cookieCheck =  getCookie('popupYN')
    if ( cookieCheck != 'N' ) {				
        window.open('popup.html','','left=300, top=300, width=500, height=595,scrollbars=no')
    }
}

function wclose(){
    if ( document.getElementById('chk').checked ) {
        var date = new Date()
        date.setDate(date.getDate() + 1)
        document.cookie = escape('popupYN')+'='+escape('N')+"; expires="+date.toUTCString()
    }
    window.close()
}