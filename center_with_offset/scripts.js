// A responsive way to center images 
var centerMiddleSlide = function() {
    
    // Get the width of the visible container
    var containerWidth = $('#container').width();

    // Get the currently selected side
    var selectedSlide = $('.selected');
    var selectedSlideWidth = selectedSlide.width();
    var selectedSlidePosition = selected.position();

    // Find the offset of the container
    var offset = selectedSlide.parent().css('left');

    // Get the new center location ( perfectly centers )
    var newCenter = containerWidth + selectedSlideWidth / 2;

    // Get the left position of the selected slide - offset
    var newOffset = selectedSlidePosition.left - offset;

    // Make sure that the first slide is never too far right 
    // before centering
    if ( offset >= 0 ) {
        selectedSlide.parent().css('left', newOffset );
        console.log( 'center the middle slide' );
    }
}

$(function() {
    centerMiddleSlide();
});
