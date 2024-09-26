$(document).ready(function(){
    // Smooth scroll effect
    $('a.nav-link').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });
});
