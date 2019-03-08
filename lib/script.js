// $('.me').on('click', function () {
//  $('body, html').animate({
//   scrollTop: $('.s1').offset().top
//  }, 500)
// })

// $('.portfolio').on('click', function () {
//  $('body, html').animate({
//   scrollTop: $('.s2').offset().top
//  }, 500)
// })

$('nav a').on('click', function() {
    const goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 1000)
})

$('aside a').on('click', function () {
    const goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 1000)
})
// $('.menu-toggle').click(function () {
//     $('li.right').toggleClass('opening');
    
//     $(this).toggleClass('open');
    

    
// })

$(".burger").on("click", function () {
    $(".fa-angle-up,.fa-bars, aside").toggleClass("off");
})
