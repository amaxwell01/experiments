var ajax = new XMLHttpRequest();

ajax.open('GET', window.location, true);
ajax.send();

var showData = function( data ) {
    clearInterval(ajaxCheck);
    console.log( data );
};

var ajaxCheck = setInterval(function() {
    if ( ajax.response ) {
        showData( ajax.response );
    }
}, 100);
