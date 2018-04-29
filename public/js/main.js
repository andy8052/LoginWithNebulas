function checkNebpay() {
    console.log("check nebpay")
    try {
        var NebPay = require("nebpay");

        $("#search_value").attr("disabled", false)
        $("#search").attr("disabled", false)

    } catch (e) {
        //alert ("Extension wallet is not installed, please install it first.")
        $("#noExtension").removeClass("hide")
    }
}

var dappAddress = "n1jCSsXYiRKWTurEF9pHZyPBd7X8bikVpcq";

$("#submit_challenge").click(function () {
    console.log("********* call smart contract by \"call\" *****************")
    var func = "authenticate"
    var args = "[" + $("#challenge").val() + ",\"" + $("#address").val() + "\"]"

    window.postMessage({
        "target": "contentscript",
        "data": {
            "to": dappAddress,
            "value": "0",
            "contract": {
                "function": func,
                "args": args
            }
        },
        "method": "neb_sendTransaction"
    }, "*");

})

$(document).ready(function () {
    "use strict";

    var window_width = $(window).width(),
        window_height = window.innerHeight,
        header_height = $(".default-header").height(),
        header_height_static = $(".site-header.static").outerHeight(),
        fitscreen = window_height - header_height;


    $(".fullscreen").css("height", window_height)
    $(".fitscreen").css("height", fitscreen);


//    console.log("check nebpay")
//    try {
//        var NebPay = require("nebpay");
//
//        $("#search_value").attr("disabled", false)
//        $("#search").attr("disabled", false)
//
//    } catch (e) {
//        alert("Extension wallet is not installed, please install it first.")
//        $("#noExtension").removeClass("hide")
//    }

    // -------   Active Mobile Menu-----//

    $(".menu-bar").on('click', function (e) {
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });

});
