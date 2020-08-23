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

// Closing mobile menu after click on element
$(function(){
    const navMain = $(".navbar-collapse");
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});
