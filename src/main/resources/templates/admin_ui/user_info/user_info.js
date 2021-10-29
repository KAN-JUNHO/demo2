$(document).ready(function() {
    // $("#member_info").load("member_info.html")
    // $("#character_info").load("character_info.html")
    $(".tab_title li").click(function() {
        var idx = $(this).index();


        $(".tab_title li").removeClass("on");
        $(".tab_title li").eq(idx).addClass("on");
        $(".tab_cont > div").hide();
        $(".tab_cont > div").eq(idx).show();

    })
});