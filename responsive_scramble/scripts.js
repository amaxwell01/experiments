var test = {
    moveLeftColumn: function() {
        var leftOne = $('.left_one');
        var leftTwo = $('.left_two');
        var windowWidth = $(window).width();
        
        if ( windowWidth <= 770 ) {
            $('article').after( leftOne );
            $('.right').after( leftTwo );
        } else {
            $('section').append( leftOne );
            $('section').append( leftTwo );
        }
        
        leftOne.show();
        leftTwo.show();
    }
}

// Run code on resize, but give it a slight delay so that we aren't always calculating it
 
$(window).resize( function() {
    if( timer ) {
        clearTimeout(timer);
    }
 
    var timer = setTimeout( function() {
        test.moveLeftColumn();
    }, 100 );    
});