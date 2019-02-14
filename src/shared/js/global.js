 // Scrolling Effect

 $(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav .background-opacity').addClass('black')
    }

    else {
          $('nav .background-opacity').removeClass('black');
    }
});
       $(".news-section .new").hover(function(e){
        $(this).find("a").addClass("new-hover")
        $(this).find(".line a").addClass("square-hover");
    },function(){
        $(".news-section .new a").removeClass("new-hover");
        $(".news-section .new .line a").removeClass("square-hover");
    });