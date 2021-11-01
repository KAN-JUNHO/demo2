$(document).ready(function() {
    // $("#member_info").load("member_info.html")
    // $("#character_info").load("character_info.html")
    $(".tab_title li").click(function() {
        var idx = $(this).index();

        $(".tab_title li").removeClass("on");
        $(".tab_title > li").eq(idx).addClass("on");
        $(".tab_cont div").hide();
        $(".tab_cont > div").eq(idx).show();

        if (idx==0){
            $("#member_info").load("member_info.html")
        }else if(idx==1){
            $("#character_info").load("character_info.html")
        }else if(idx==2){
            $("#skill").load("skill.html")
        }else if(idx==3){
            $("#equipment").load("equipment.html")
        }else if(idx==4){
            $("#stat").load("stat.html")
        } else if(idx==5){
            $("#constellation").load("constellation.html")
        }else if(idx==6){
            $("#equipment").load("equipment.html")
        }else if(idx==7){
            $("#seal").load("seal.html")
        }else if(idx==8){
            $("#housing").load("housing.html")
        }else if(idx==9){
            $("#mission").load("mission.html")
        }else if(idx==10){
            $("#quest").load("quest.html")
        }else if(idx==11){
            $("#mailbox").load("mailbox.html")
        }
    })

});