$(document).ready(function(){
    $("#getSecQ").click(function(){
        $("#secQMsq").html("this would locate the account and retrieve the associated security question");
        $("#sq").removeAttr("hidden");
    })
    $("#verifySecQ").click(function(){
        $("#verifSecQMsg").html("if answer is verified, password may be reset");
        $("#pwReset").removeAttr("hidden");
    })

    $('#password').keypress(function () {
        //put password regex here?
        $('#password2').removeAttr("disabled");
    })
    $('#password2').keypress(function () {
        $("#passwordMsg").html("**");
        if ($("#password").val() == $("#password2").val()) {
            $("#passwordMsg").html("Looks good!");
            $("#resetPW").removeAttr("disabled");
            $("#allGood").removeAttr("hidden");
            
        }
        else {
            $("#passwordMsg").html("Passwords do not match");
        }
    })

})