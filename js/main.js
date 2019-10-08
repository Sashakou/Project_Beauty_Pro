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
//   var hero_s = $(".hero-slider");
//     hero_s.owlCarousel({
//         loop: true,
//         margin: 0,
//         nav: true,
//         items: 1,
//         dots: true,
//         animateOut: 'fadeOut',
//       animateIn: 'fadeIn',
//         navText: [
//           '<svg version="1.1" id="Capa_1" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"><g><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"></path></g></svg>', 
//           '<svg version="1.1" id="Capa_1" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"><g><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"></path></g></svg>'
//         ],
//         smartSpeed: 1200,
//         autoHeight: false,
//         autoplay: true,
//         onInitialized: function() {
//           var a = this.items().length;
//             $("#snh-1").html("<span>1</span><span>" + a + "</span>");
//         }
//     }).on("changed.owl.carousel", function(a) {
//         var b = --a.item.index, a = a.item.count;
//       $("#snh-1").html("<span> "+ (1 > b ? b + a : b > a ? b - a : b) + "</span><span>" + a + "</span>");

//     });

//   hero_s.append('<div class="slider-nav-warp"><div class="slider-nav"></div></div>');
//   $(".hero-slider .owl-nav, .hero-slider .owl-dots").appendTo('.slider-nav');

// $('.set-bg').each(function() {
//     var bg = $(this).data('setbg');
//     $(this).css('background-image', 'url(' + bg + ')');
//   });



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

 
  $('.slider_left').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.slider_right'
    
  });
  $('.slider_right').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    asNavFor: '.slider_left',
    arrows: true,
    dots: false,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
  });
  $('.next').on('click', function() {
    $('.slider_right').slick('slickNext');
  });
  $('.prev').on('click', function() {
    $('.slider_right').slick('slickPrev');
  });


// $(".slider .slider-wrap").slick({
//   slidesToShow: 1,
//   infinite: true,
//   swipeToSlide: true,
//   fade: true,
//   speed: 900
// });

// $(".slider .nav-btns .left").click(function(e) {
//   e.preventDefault();
//   $(this)
//     .parent()
//     .parent()
//     .parent()
//     .find(".slider-wrap")
//     .slick("slickPrev");
// });

// $(".slider .nav-btns .right").click(function(e) {
//   e.preventDefault();
//   $(this)
//     .parent()
//     .parent()
//     .parent()
//     .find(".slider-wrap")
//     .slick("slickNext");
// });

// function slider_count() {
//   $(".slider .slider-wrap").each(function() {
//     var amount = $(this).find(".slick-slide:not(.slick-cloned)").length;
//     var counter_amount = $(this)
//       .parent()
//       .find(".counter .amount");
//     counter_amount.text(amount);
//   });
// }

// $(".slider .slider-wrap").on("afterChange", function() {
//   var now = Number(
//     $(this)
//       .find(".slick-active")
//       .data("slick-index") + 1
//   );
//   var amount = $(this).find(".slick-slide:not(.slick-cloned)").length;
//   var counter_now = $(this)
//     .parent()
//     .find(".counter .now");
//   var counter_amount = $(this)
//     .parent()
//     .find(".counter .amount");

//   counter_now.text(now);
//   counter_amount.text(amount);
// });

// //end slider

// function sale() {
//   var d = new Date();
//   var monthNames = new Array(
//     "Января",
//     "Февраля",
//     "Марта",
//     "Апреля",
//     "Мая",
//     "Июня",
//     "Июля",
//     "Августа",
//     "Сентября",
//     "Октября",
//     "Ноября",
//     "Декабря"
//   );
//   d.setDate(d.getDate() + ((7 - d.getDay()) % 7));
//   var sale_end = d.getDate() + " " + monthNames[d.getMonth()];
//   $(".sale .date small span").text(sale_end);
// }

// //main slider text
// $(".main .main-wrap").slick({
//   slidesToShow: 1,
//   speed: 900,
//   fade: true,
//   cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
//   touchThreshold: 100,
//   infinite: true,
//   draggable: false,
//   swipe: false,
//   swipeToSlide: false,
//   touchMove: false,
//   draggable: false,
//   accessibility: false
// });

// //__percents index slider
// function mainslider_percents() {
//   var valid = $("#index").length;

//   if (valid > 0) {
//     var now_slide = $("#index .slider .slick-active .item").data("slide-num");
//     var new_price = Number(
//       $(
//         '#index .main-wrap .item[data-slide-num="' +
//           now_slide +
//           '"] .newprice span'
//       ).text()
//     );
//     var old_price = Number(
//       $(
//         '#index .main-wrap .item[data-slide-num="' + now_slide + '"] .oldprice'
//       ).text()
//     );
//     var percents = Math.round((new_price / old_price) * 100);

//     $("#index .slider .sale .discount small span").html(percents);
//   } else {
//     return false;
//   }
// }
// ////__percents index slider

// //__autoplay
// var autoplay = setInterval(function() {
//   $(".slider .nav-btns a.right").trigger("click");
// }, 6000);

// $("#index .main .slider .slider-wrap").on("afterChange", function() {
//   mainslider_percents();
// });

// $(" .slider .slider-wrap").on("afterChange", function() {
//   clearInterval(autoplay);
//   autoplay = setInterval(function() {
//     $(".main .nav-btns a.right").trigger("click");
//   }, 4000);
// });

// //__synchro text slider
// $(".main .slider .slider-wrap").on("swipe", function(event, slick, direction) {
//   if (direction == "left") {
//     $(".main .main-wrap").slick("slickNext");
//   }
//   if (direction == "right") {
//     $(".main .main-wrap").slick("slickPrev");
//   }
// });

// $("#index .main .slider .nav-btns .left").click(function(e) {
//   e.preventDefault();
//   $(this)
//     .parent()
//     .parent()
//     .parent()
//     .find(".slider-wrap")
//     .slick("slickPrev");
//   $(".main .main-wrap").slick("slickPrev");
// });

// $("#index .main .slider .nav-btns .right").click(function(e) {
//   e.preventDefault();
//   $(this)
//     .parent()
//     .parent()
//     .parent()
//     .find(".slider-wrap")
//     .slick("slickNext");
//   $(".main .main-wrap").slick("slickNext");
// });
// ////__synchro text slider