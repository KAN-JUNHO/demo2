$(document).ready(function() {
    $("#name").click(function() {
        var a =$("#character option:selected").val();
        document.getElementById("selected_name").innerText=a;
    })

    $("#reset").click(function() {
        document.getElementById('result').innerText="aased";
    })


});
function nickname() {
    window.open("character_info_popup_nickname.html","popup","width=400,height=200")
}

function level() {
    window.open("character_info_popup_level.html","popup","width=400,height=200")
}

function change(){
    window
}