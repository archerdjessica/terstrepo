$(document).ready(function(){
    $("#loginBtn").click(function(){
        $(".errMsg").html("");
        if($("#username").val()==""||$("#password").val()==""){
            $("#loginMsg").html("both fields must be entered");
        }else{
            $("#loginMsg").html("<a href=\"admin_work.html\">continue</a>");
        }
    })
})