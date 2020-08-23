// Page loader
$(window).on('load', function(){
    this.setTimeout(() => {
        $('.main-loader').fadeOut();
    }, 500);
 });

// Smooth scrolling to anhor
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
