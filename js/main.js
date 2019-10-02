$(".empty_link").on("click", function(){
    $(this).next().slideToggle(300);
    if($(this).hasClass('accordion-active')){
      $(this).removeClass('accordion-active');
    }else{
      $(this).addClass('accordion-active');
    }
  });
/*------------------
    Hero Slider
  --------------------*/
  var hero_s = $(".hero-slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
      animateIn: 'fadeIn',
        navText: [
          '<svg version="1.1" id="Capa_1" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"><g><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"></path></g></svg>', 
          '<svg version="1.1" id="Capa_1" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"><g><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"></path></g></svg>'
        ],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        onInitialized: function() {
          var a = this.items().length;
            $("#snh-1").html("<span>1</span><span>" + a + "</span>");
        }
    }).on("changed.owl.carousel", function(a) {
        var b = --a.item.index, a = a.item.count;
      $("#snh-1").html("<span> "+ (1 > b ? b + a : b > a ? b - a : b) + "</span><span>" + a + "</span>");

    });

  hero_s.append('<div class="slider-nav-warp"><div class="slider-nav"></div></div>');
  $(".hero-slider .owl-nav, .hero-slider .owl-dots").appendTo('.slider-nav');

$('.set-bg').each(function() {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
  });



// $('.cover_sub_list').click(function(){
//   $('.sub_list_item').toggle(); 
// });






$('.burger').click(function(){
  $('body').addClass('nav-sidebar-open'); 
});


$('.burger_close').click(function(){
  $('body').removeClass('nav-sidebar-open');
});



























$('.burger').click(function(){
	$('.menu').slideToggle('slow');	
  	$(this).toggleClass("on");
    $('.search-main').slideUp('fast'); 
});

$('.search').click(function(){
  $('.search-main').slideToggle('slow');
    if ($(window).width() > 1024) {
      $('.menu').css({'display':'block'});
    }else {
      $('.menu').slideUp('fast');
      $('.burger').removeClass('on');
    }
});
$('.lang').click(function(){
  $('.lang-inner').slideToggle('slow');

});
$(window).resize(function() {
  if ($(window).width() > 1024) {
      $('.menu').css({'display':'block'});
      $('.burger').removeClass('on');
  }else {
    $('.menu').css({'display':'none'});
    $('.burger').removeClass('on');
    }
}); 


$(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        var block = $('.burger,.search,.menu,.search-main,.lang'); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
            && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            // block.slideUp(); // если условия выполняются - скрываем наш элемент
            $('.burger').removeClass('on');
            $('.search-main').slideUp('fast');
            $('.lang-inner').slideUp('slow');
            if ($(window).width() > 1024) {
                $('.menu').css({'display':'block'});
            }else {
                $('.menu').slideUp('fast');
              }
        }
});

 $(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > 500) {
        $('#top').fadeIn();
      } else {
        $('#top').fadeOut();
      }
    });
      $('#top').click(function() {
        $('body,html').animate({scrollTop:0},700);
      });
  });

 
  $('.slide-block-left').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.slide-block-right'
    
  });
  $('.slide-block-right').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: '.slide-block-left',
    arrows: true,
    dots: false,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
  });
  $('.next').on('click', function() {
    $('.slide-block-right').slick('slickNext');
  });
  $('.prev').on('click', function() {
    $('.slide-block-right').slick('slickPrev');
  });

