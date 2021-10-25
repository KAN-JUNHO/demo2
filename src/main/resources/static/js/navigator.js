

$(document).ready(function(){
    $(".gnb>li>a").click(function (){
        $(this).next().slideToggle();
        $(this).html(function (i,oldText){
            if(oldText[oldText.length-1]=="▼") {
                return oldText.substring(0, oldText.length - 1) + "▶"
            }else {
                return oldText.substring(0, oldText.length - 1) + "▼"

            }
        });
    })
    // $(".gnb >li").mouseenter(function(){
    //     $(this).children(".submenu").stop().slideDown();

    // });
    // $(".gnb >li").mouseleave(function(){
    //     $(this).children('.submenu').stop().slideUp();
    //     $(this).children('a').text(function (i,oldText){
    //         return  oldText.substring(0,oldText.length-1) + "▶"
    //
    //     });
    // });

    // $(".gnb>li>a").click(function (){
    //     $(this).css("color","green")
    // });
});



