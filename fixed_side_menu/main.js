$(document).ready(function() {
    
    var starters = 600,
        specialties = 1600,
        sandwiches = 2600,
        burgers = 3600,
        greens = 4600,
        $window = $(window);
    
    $("#side-menu").hide();
    
    $window.scroll(function() {        
        if($window.scrollTop() > 150) {
            $("#side-menu").fadeIn('slow');
        } else {
            $("#side-menu").fadeOut('slow');
        }          
    }); 
    
    $("a#starters-btn").click(function() {
        $("html, body").animate({scrollTop: $("#starters").offset().top}, 700);
        $("#specialties-btn").animate({fontSize: 16.2}, 700);
        $("#sandwiches-btn").animate({fontSize: 16.2}, 700);
        $("#burgers-btn").animate({fontSize: 16.2}, 700);
        $("#greens-btn").animate({fontSize: 16.2}, 700);
        $("#starters-btn").animate({fontSize: 24}, 700);
        return false;
    });
    
    $("a#specialties-btn").click(function(event) {
        event.preventDefault(); 
        $("html, body").animate({scrollTop: $("#specialties").offset().top}, 700);
        $("#starters-btn").animate({fontSize: 16.2}, 700);
        $("#sandwiches-btn").animate({fontSize: 16.2}, 700);
        $("#burgers-btn").animate({fontSize: 16.2}, 700);
        $("#greens-btn").animate({fontSize: 16.2}, 700);
        $("#specialties-btn").animate({fontSize: 24}, 700);
        return false;
    });
    
    $("a#sandwiches-btn").click(function() {
        $("html, body").animate({scrollTop: $("#sandwiches").offset().top}, 700);
        $("#starters-btn").animate({fontSize: 16.2}, 700);
        $("#specialties-btn").animate({fontSize: 16.2}, 700);
        $("#burgers-btn").animate({fontSize: 16.2}, 700);
        $("#greens-btn").animate({fontSize: 16.2}, 700);
        $("#sandwiches-btn").animate({fontSize: 24}, 700);
        return false;
    });
    
    $("a#burgers-btn").click(function() {
        $("html, body").animate({scrollTop: $("#burgers").offset().top}, 700);
        $("#starters-btn").animate({fontSize: 16.2}, 700);
        $("#specialties-btn").animate({fontSize: 16.2}, 700);
        $("#sandwiches-btn").animate({fontSize: 16.2}, 700);
        $("#greens-btn").animate({fontSize: 16.2}, 700);
        $("#burgers-btn").animate({fontSize: 24}, 700);
        return false;
    });
    $("a#greens-btn").click(function() {
        $("html, body").animate({scrollTop: $("#greens").offset().top}, 700);
        $("#starters-btn").animate({fontSize: 16.2}, 700);
        $("#specialties-btn").animate({fontSize: 16.2}, 700);
        $("#sandwiches-btn").animate({fontSize: 16.2}, 700);
        $("#burgers-btn").animate({fontSize: 16.2}, 700);
        $("#greens-btn").animate({fontSize: 24}, 700);
        return false;
    });
    
}); // end of jquery