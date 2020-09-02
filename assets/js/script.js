

$( document ).ready(function() {
    $("#toggle-itmes .dropdown-item").on('click', function(event) {

        $(this).children("div").toggleClass("hidden");

        // stop clouse
        event.stopPropagation();
    });

});