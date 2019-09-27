$(document).ready(function () {
    $("#hasMailingAddress").click(function () {
        if ($('#hasMailingAddress').val() == 0) {
            $('#hasMailingAddress').attr("value", 1);
            $('#address2').children().removeAttr("disabled");
        } else {
            $('#hasMailingAddress').attr("value", 0);
            $('#address2').children().attr("disabled", "true");
        }
    })
    $("#validate").click(function () {
        //reset all error messages
        $('.errMsg').html("");
        var goPost = true;

        //permanent address
        var address = $("#address").val();
        var city = $("#city").val();
        var zip = $("#zipCode").val();
        var state = $("#state").val();

        //other info
        var contact = $('#contact').val();
        var dob = $('#dob').val();
        var ssn = $('#ssn').val();

        //checking for blank fields
        //else if -- format type
        if (address == '') {
            $('#addressMsg').html("street address is required");
            goPost = false;
        } else if (!/^\d+[A-z A-z]+\s[A-z]+/.test(address)) {
            $('#addressMsg').html("your address should begin with a number and have a street name or number<br>for examle: 120 8th Ave, 1001 South Center St");
            goPost = false;
        }
        if (city == '') {
            $('#cityMsg').html("city is required");
            goPost = false;
        } else if (/[^A-z]+/.test(city)) {
            $('#cityMsg').html("not a valid city");
            goPost = false;
        }
        if (zip == '') {
            $('#zipCodeMsg').html("zip code is required");
            goPost = false;
        } else if (!/^[0-9]{5}$/.test(zip)) {
            $('#zipCodeMsg').html("zip code should by 5 digits");
            goPost = false;
        }
        if (state == '') {
            $('#stateMsg').html("Oops...you broke my code");
            goPost = false;
        }
        if ($('#hasMailingAddress').val() != 0) {
            var address2 = $("#address2").val();
            var city2 = $("#city2").val();
            var zip2 = $("#zipCode2").val();
            var state2 = $("#state2").val();
            if (address2 == '') {
                $('#addressMsg2').html("street address is required");
                goPost = false;
            } else if (!/^\d+[A-z A-z]+\s[A-z]+/.test(address2)) {
                $('#addressMsg2').html("your address should begin with a number and have a street name or number<br>for examle: 120 8th Ave, 1001 South Center St");
                goPost = false;
            }

            if (city2 == '') {
                $('#cityMsg2').html("city is required");
                goPost = false;
            } else if (/[^A-z]+/.test(city2)) {
                $('#cityMsg2').html("not a valid city");
                goPost = false;
            }

            if (zip2 == '') {
                $('#zipCodeMsg2').html("zip code is required");
                goPost = false;
            } else if (!/^[0-9]{5}$/.test(zip2)) {
                $('#zipCodeMsg2').html("zip code should by 5 digits");
                goPost = false;
            }

            if (state2 == '') {
                $('#stateMsg2').html("Oops...you broke my code");
                goPost = false;
            }
        }
        if (contact == '') {
            $('#contactMsg').html("contact number is required");
            goPost = false;
        }else if(!/^[0-9]{10}$/.test(contact)){
            $('#contactMsg').html("contact number should be 10 digits");
            goPost = false;
        }

        if (dob == '') {
            $('#dobMsg').html("Date of Birth is required");
            goPost = false;
        }
        //else if(date) idk yet

        if (ssn == '') {
            $('#ssnMsg').html("Social Security Number is required");
            goPost = false;
        }
        //else if(idk yet)

        if (goPost) {
            $("#regValidation").html('client-side Validation successful<br>I still need to implement server-side validation')
            $("#continue").removeAttr("disabled");
            $("#continue").attr("onclick","window.location.href='register2.html';")
        }

        //check valid values

    })
});