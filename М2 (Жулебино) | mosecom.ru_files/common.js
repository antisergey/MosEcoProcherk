// to get height of Banner content
// function reverseHeight() {
//     var heightB = window.innerHeight;
//     $(".full-height-content").css({
//         'height' : heightB
//     });
// }

// reverseHeight();
// $(window).resize(function(){
//     reverseHeight();
// });


$(".front").click(function(){
    $(this).parent().addClass("active");

});

$(".close-back").click(function(){
    $(this).parent().parent().removeClass("active");
});

$('.articles-content').slick({
    infinite: true,
    slidesToShow:2,
    slidesToScroll: 1,
    dots: false,
    arrows: true
    // autoplay: true,
    // autoplaySpeed: 3000
});


$('.top-slider').slick({
    slidesToShow:1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    fade: true
    // autoplay: true,
    // autoplaySpeed: 3000
});

function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(cityName).style.display = "block"; 
 function openCity22(cityName) {
    var i;
    var x = document.getElementsByClassName("city122");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(cityName).style.display = "block"; 
 
}
}

$(function(){
    $(".w3-bar-item").click( function(){
    $(".w3-bar-item.active").removeClass("active");

    $(this).addClass("active");
});


    $(".menu-item").click( function(){
    $(".active.menu-item").removeClass("active");

    $(this).addClass("active");
});
});


function openCity2(cityName2) {
    var i;
    var x = document.getElementsByClassName("city2");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(cityName2).style.display = "block"; 
 
}





$(function () {
    $(".lm").slice(0, 4).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".lm:hidden").slice(0, 2).slideDown();
        if ($(".lm:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
       
    });
});

$(function () {
    $(".video-teaser").slice(0, 4).show();
    $("#loadMoreVideo").on('click', function (e) {
        e.preventDefault();
        $(".video-teaser:hidden").slice(0, 2).slideDown();
        if ($(".video-teaser:hidden").length == 0) {
            $("#load").fadeOut('slow');
            $("#loadMoreVideo").addClass('button-hide');
        }

    });
});

/* $(function () {
    $(".lm2").slice(0, 4).show();
    $("#loadMore2").on('click', function (e) {
        e.preventDefault();
        $(".lm2:hidden").slice(0, 4).slideDown();
        if ($(".lm2:hidden").length == 0) {
            $("#load2").fadeOut('slow');
        }
       
    });
}); */

$(function () {
    $(".lm3").slice(0, 4).show();
    $("#loadMore3").on('click', function (e) {
        e.preventDefault();
        $(".lm3:hidden").slice(0, 4).slideDown();
        if ($(".lm3:hidden").length == 0) {
            $("#load3").fadeOut('slow');
        }
       
    });
});




$('.top-slider').slick({
    slidesToShow:1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
    // autoplay: true,
    // autoplaySpeed: 3000
});

$('.articles-content').slick({
    infinite: true,
    slidesToShow:2,
    slidesToScroll: 1,
    dots: false,
    arrows: true
    // autoplay: true,
    // autoplaySpeed: 3000
});


function openCity20(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


function openCity22(cityName) {
    var i;
    var x = document.getElementsByClassName("city122");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(cityName).style.display = "block"; 
 
}


function openCity112(cityName) {
    var i;
    var x = document.getElementsByClassName("city112");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(cityName).style.display = "block"; 
 
}


$(".tab-date span.w3-bar-item.w3-button, .chart-tabs span.w3-bar-item.w3-button").click(function(){
    $(this).siblings().removeClass("active");
    $(this).addClass("active")
});




   