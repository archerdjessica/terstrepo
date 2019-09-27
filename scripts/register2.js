// form:
//     input: Text
//     id:userName

//     span: id=userNameMsg

//     input: password
//     id:password
//     id:password2

//     span: id=passwordMsg

//     input: select
//     id: securityQuestion

//     option:sq1
//     option:sq2
//     option:sq3

//     input:text 
//     id: sqAnswer
//     id:sqAnswer2

//     span: id=sqMsg

//     input: email
//     id: email

//     span: id=emailMsg

$(document).ready(function () {
    $('#password').keypress(function () {
        //put password regex here?
        $('#password2').removeAttr("disabled");
    })
    $('#sqAnswer').keypress(function () {
        $('#sqAnswer2').removeAttr("disabled");
    })
    $('#securityQuestion').click(function () {
        $('#sqAnswer').val("");
        $('#sqAnswer2').val("");
        $('#sqAnswer2').attr("disabled", "true");
    })
    $('#password2').keypress(function () {
        if ($("#password").val() != $("#password2").val()) {
            $("#passwordMsg").html("Passwords do not match");
        }
    })


    $('#validate').click(function () {
        $('.errMsg').html("");
        var goPost = true;

        $(".errMsg").html()



        // if (goPost) {
        //     $("#regValidation").html('client-side Validation successful<br>I still need to implement server-side validation')
        //     $("#register").removeAttr("disabled");
        //     $("#register").attr("onclick", "window.location.href='account_home.html';")
        // }
    })
})
