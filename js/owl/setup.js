$('.owl-carousel').owlCarousel({
    loop:true, /*navegar margem infinita*/ 
    margin:10,
    nav:true,
    responsive:{ /*se adapta ao tamanho da tela */
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})