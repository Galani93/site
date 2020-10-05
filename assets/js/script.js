

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

$( "#v-pills-profile-tab" ).click(function() {
    $( "#v-pills-02" ).show( "slow" );
});