$(document).ready(function() {
    console.log('JavaScript is working!');

    $('a.link').on('click', function(event) {
        event.preventDefault();
        var newLocation = this.href;
        $('body').fadeOut(500, function() {
            window.location = newLocation;
        });
    });

    $('body').css('background-color', '#f0f0f0').fadeIn(500);
});
