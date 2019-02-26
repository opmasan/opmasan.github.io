console.log('brand of goods 3');

console.log('footer');

function classToggle() {
  const navs = document.querySelectorAll('.navbar__items')
  
  navs.forEach(nav => nav.classList.toggle('navbar__toggleShow'));
}

document.querySelector('.navbar__link-toggle').addEventListener('click', classToggle);
console.log('headline');
// .members scripts goes here
// .partners scripts goes here
console.log('partners');
// .key-to-success scripts goes here
// .reach_us scripts goes here
(function() {
    var calculateHeight;

    calculateHeight = function() {
        var $content, contentHeight, finalHeight, windowHeight;
        $content = $('#overlay-content');
        contentHeight = parseInt($content.height()) + parseInt($content.css('margin-top')) + parseInt($content.css('margin-bottom'));
        windowHeight = $(window).height();
        finalHeight = windowHeight > contentHeight ? windowHeight : contentHeight;
        return finalHeight;
    };

    $(document).ready(function() {
        $(window).resize(function() {
            if ($(window).height() < 560 && $(window).width() > 600) {
                $('#overlay').addClass('short');
            } else {
                $('#overlay').removeClass('short');
            }
            return $('#overlay-background').height(calculateHeight());
        });
        $(window).trigger('resize');
        $('a[data-open="popup-trigger"]').click(function() {
            return $('#overlay').addClass('open');
            // return $('#overlay').addClass('open').find('.signup-form input:first').select();
        });
        return $('#overlay-background, #overlay-close').click(function() {
            return $('#overlay').removeClass('open');
        });
    });
    $(document).on('keyup',function(evt) {
        if (evt.keyCode == 27) {
            return $('#overlay').removeClass('open');
        }
    });

}).call(this);
// .reach_us_form scripts goes here
// .slider scripts goes here
// .tech scripts goes here
// .main-video scripts goes here
// .main-block scripts goes here
// .what-we-do scripts goes here