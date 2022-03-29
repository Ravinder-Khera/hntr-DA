$(document).ready(function() {
    $("#product_slider").owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });
    $("#product_slider2").owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:2
            },
            991:{
                items:3
            }, 
            1200:{
                items:4
            }
        }
    });
    $(".owl_custom-prev").click( function(){
        $("#product_slider .owl-nav .owl-prev").trigger("click");
        $("#product_slider2 .owl-nav .owl-prev").trigger("click");
    });
    $(".owl_custom-next").click( function(){
        $("#product_slider .owl-nav .owl-next").trigger("click");
        $("#product_slider2 .owl-nav .owl-next").trigger("click");
    });

    $('.brands-carousel').owlCarousel({
        loop: false,
        margin: 30,
        dots: false,
        nav: false,
        items: 3,
        center: true,
        responsive: {
            0: {
            items: 1
            },

            480: {
            items: 2
            },
            767: {
            items: 3
            },
        }    
    });
});