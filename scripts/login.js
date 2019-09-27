$(document).ready(function() {
    $("#login").click(function () {
        var username = $("#username").val();
        var password = $("#password").val();
        var goPost = true;
        // Checking for blank fields.
        if (username == '') {
            $('#username').css("border", "2px solid red");
            console.log("Username is required");
            $("#unReq").html("Please enter username");
            goPost = false;
        }
        if (password == '') {
            $('#password').css("border", "2px solid red");
            console.log("password is required");
            $("#pwReq").html("Please enter password");
            goPost = false;
        }
        if (goPost) {
            $(".validation").html('client-side Validation successful<br>I still need to implement server-side validation<br><a href="account_home.html">continue to landing page</a>');
            // $.post("login.php", { email1: email, password1: password },
            //     function (data) {
            //         if (data == 'Invalid Email.......') {
            //             $('input[type="text"]').css({ "border": "2px solid red", "box-shadow": "0 0 3px red" });
            //             $('input[type="password"]').css({ "border": "2px solid #00F5FF", "box-shadow": "0 0 5px #00F5FF" });
            //             alert(data);
            //         } else if (data == 'Email or Password is wrong...!!!!') {
            //             $('input[type="text"],input[type="password"]').css({ "border": "2px solid red", "box-shadow": "0 0 3px red" });
            //             alert(data);
            //         } else if (data == 'Successfully Logged in...') {
            //             $("form")[0].reset();
            //             $('input[type="text"],input[type="password"]').css({ "border": "2px solid #00F5FF", "box-shadow": "0 0 5px #00F5FF" });
            //             alert(data);
            //         } else {
            //             alert(data);
            //         }
            //     });
        }
    });

    // $scope.loginSuccess = "";
    // $scope.user = {};
    // $scope.user.authLvl = "";
    // $scope.user.authTkn = "";

    // $scope.validateLogin = function(userName, passPhrase) {
    //     var validateString = "";
    //     validateString += "userName=" + userName + "&password=" + passPhrase;

    //     var regemail = /([a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+)@([a-zA-Z]+)\.([a-z]{2,})$/;
	// 	    if(regemail.test(userName)){
    //         $http({
    //             method: 'POST',
    //             url: 'RULServlet/login',
    //             data: validateString,
    //             headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    //         }).success(function(userInfo) {
    //             if(userInfo.valid === "true") {
    //                 $scope.user.authLvl = userInfo.authLvl;
    //                 $scope.user.authTkn = userInfo.authTkn;
    //                 $scope.loginSuccess = "Successfully logged in!";

    //                 var b =document.getElementById("click").click();

    //                 //TODO cookie implementation instead of in scope
    //             } else
    //                 $scope.loginSuccess = "Wrong email/password!";

    //         })
    //     } else {
    //     	$scope.loginSuccess = "Invalid email!";
    //     }
    
});