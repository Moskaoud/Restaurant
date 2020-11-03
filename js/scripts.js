 // show a login modal when click on login button
 $(document).ready(function () {
    $("#login").click(function () {
        $("#loginModal").modal('show');
    })
    $("#reserveBtn").click(function () {
        $("#reserveModal").modal('toggle');
    })
    
});
// Tooltip for button reserve
$(document).ready(function () {
$('[data-toggle="tooltip"]').tooltip();
});

// carousel play and pause two buttons 
$(document).ready(function () {
$("#mycarousel").carousel({ interval: 2000 });
$("#carousel-pause").click(function () {
    $("#mycarousel").carousel('pause');
});
$("#carousel-play").click(function () {
    $("#mycarousel").carousel('cycle');
});
});

// carousel play and pause single button
$(document).ready(function () {

    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
});