$(document).ready(function() {
    var $window = $(window),
        navLinks = $('nav ul li a'),
        navHeight = $('nav').height(),
        section = $('section'),
        documentElement = $(document);

    $('nav').hide();

    $window.scroll(function() {        
        if($window.scrollTop() > 150) {
            $("nav").fadeIn('slow');
        } else {
            $("nav").fadeOut('slow');
        }          
    });

    documentElement.on('scroll', function() {
        var currentScrollPosition = documentElement.scrollTop();

        section.each(function() {
            var self = $(this);
            if(self.offset().top < (currentScrollPosition) && (currentScrollPosition) < (self.offset().top + self.outerHeight())) {
                var targetLink = "." + self.attr('class') + "-btn";
                navLinks.removeClass('active');
                $(targetLink).addClass('active');
            }
        });
    });

    navLinks.click(function() {
        var self = $(this),
            targetLink = "." + self.attr('class'),
            targetSection = "#" + self.attr('class').slice(0, self.attr('class').length - 4);

        $("html, body").animate({scrollTop: $(targetSection).offset().top + 10}, 1500);
    });

}); // end of jquery