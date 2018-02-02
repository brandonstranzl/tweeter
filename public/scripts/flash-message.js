
$(document).ready(function() {
    console.log("ready to go - FLASH MESSAGE!!");
});

$(document).on('ready', function () {

    $('#load-more-tweets').on('submit', function (evt) {
    event.preventDefault();
    let count = $(this).find('textarea').val().length;
    if (count > 140) {
        alert( "Tweets must be less than 140 characters!" );
    }
    if (!count) {
        alert( "There is no text in yor tweet!" );
        event.preventDefault();
    }
});


});