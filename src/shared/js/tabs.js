$(document).ready(function(){
    $(".tab-content").hide();
    $(".tab-content:first").show();
    $(".menu-tabs li:first-child").addClass('active');

    $(".menu-tabs li").click(function(event){
        $(".menu-tabs li").removeClass('active');
        $(this).addClass('active');

        $(".tab-content").hide();

        var selectTab=$(this).find('a').attr("href");
        $(selectTab).show(250);
    });
});