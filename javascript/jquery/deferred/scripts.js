$(function() {
    // Test my jQuery deferred

    $.get(window.location).always(
        function() {
            console.log('always message');
        }
    ).then(
        function() {
            console.log('boom, it worked');
        }
    ), function() {
        alert( "$.get failed!" );
    };
});
