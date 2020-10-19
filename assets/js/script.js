

$( document ).ready(function() {
    let $elements = $("#toggle-itmes .dropdown-item");
    $elements.on('click', function(event) {

        // clouse all;
        $elements.each(function( index ) {
            $(this).children("div").addClass("hidden");
        });

        // toogle  this
        $(this).children("div").toggleClass("hidden");
        // stop clouse
        event.stopPropagation();
    });


    $("#toggle-itmes .toogle-block").on('click', function(event) {
        console.log(event.target);
        var target = $( event.target );
        if(!target.is("botton")){
            event.stopPropagation();
        }
        // stop clouse
    });




});


!function (t) {
    "use strict";
    var e = function () {
    };
    e.prototype.init = function () {
        t("#sa-basic").on("click", function () {
            Swal.fire("Any fool can use a computer")
        }), t("#sa-title").click(function () {
            Swal.fire("The Internet?", "That thing is still around?", "question")
        }), t("#sa-success").click(function () {
            Swal.fire("", "Ձեր պատվերն ընդունված է", "success")
        })
    }, t.SweetAlert = new e, t.SweetAlert.Constructor = e
}(window.jQuery), function (t) {
    "use strict";
    window.jQuery.SweetAlert.init()
}();

var timer;

var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 3); //just for this demo today + 3 days

timer = setInterval(function() {
    timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {

        // Timer done
        clearInterval(timer);

    } else {

        var seconds = Math.floor(difference / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);
    }
}
