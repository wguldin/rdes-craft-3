(function() {
    $('.c-image-grid__image').simpleLightbox();

    $('.c-nav__mobile-link').on('click', function(e) {
        $('.c-nav__list').toggleClass('c-nav__list--active');
    });
})();
