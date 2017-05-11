(function($) {

     $('#toggle').on('click', function(event){
        event.preventDefault();
        // create menu variables
        var slideoutMenu = $('#popout');
        var slideoutMenuWidth = $('#popout').width();
        
        // toggle open class
        slideoutMenu.toggleClass("open");
        
        // slide menu
        if (slideoutMenu.hasClass("open")) {
            slideoutMenu.animate({
                left: "0px"
            }); 
        } else {
            slideoutMenu.animate({
                left: -slideoutMenuWidth - 12 /* -12 is the dropshadow I added to #popout */
            }, 250);    
        }
    });


})(jQuery);



