$(function () {

    $( ".open-sub-menu" ).click(function() {
        if ( $(this).siblings('ul').is(':hidden') ) {
            $(this).siblings('ul').show('200');
            $(this).children('i').remove();
            $(this).append('<i class="material-icons">keyboard_arrow_up</i>')
        }
        else {
            $(this).siblings('ul').hide();
            $(this).children('i').remove();
            $(this).append('<i class="material-icons">keyboard_arrow_down</i>')

        }
    });
});