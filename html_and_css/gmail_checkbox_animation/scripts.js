$('ul').on('click', 'li', function( event ) {
    var target = $(event.target);

    if ( event.target.nodeName !== 'LI') {
        target = target.parents('li');
    }

    target.find('input').prop('checked', function( i, value ) {
        return !value;
    });

    target.toggleClass('selected');
});

$('ul').on('click', 'label', function( event ) {
    var target = $(event.target);

    target.parents('li').toggleClass('selected');
});
