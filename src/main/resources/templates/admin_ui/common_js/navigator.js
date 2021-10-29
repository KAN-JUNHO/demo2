


$(document).ready(function() {
    $( "nav" ).load( "../common_html/navigator.html .gnb"  ,function (){
        $(".gnb>li>a").click(function (){
            $(this).next().slideToggle();
            $(this).html(function (i,oldText){
                if(oldText[oldText.length-1]==="▼") {
                    return oldText.substring(0, oldText.length - 1) + "▶"
                }else {
                    return oldText.substring(0, oldText.length - 1) + "▼"

                }
            });
        })
    });



});
