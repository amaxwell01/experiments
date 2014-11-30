var test = {
    responsifyMenu: function() {
        // Get the width of the container
        var containerWidth = $('.menu').width();
        var menuItems = $('.menu').find('li');
        var homeLinkWidth = $('.homeLink').outerWidth();
        var itemWidth = Math.floor( (containerWidth - homeLinkWidth) / (menuItems.length - 1) );

        $.each(menuItems, function(key, value) {
            var item = $(value);
            if ( !item.hasClass('homeLink') ) {
                item.css('width', itemWidth);
            }
        });
    }
}

$(function() {
    test.responsifyMenu();
});

// Run code on resize, but give it a slight delay so that we aren't always calculating it
$(window).resize( function() {
    if( timer ) {
        clearTimeout(timer);
    }
 
    var timer = setTimeout( function() {
        test.responsifyMenu();
    }, 100 );    
});