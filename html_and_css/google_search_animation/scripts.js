$('#mic').on('click', function( event ) {
    var target = $(this);
    target.toggleClass('selected');

    target.find('.mic_select').toggleClass('selected');

    target.parents('.search').toggleClass('selected');
});
