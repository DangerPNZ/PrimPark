$(document).ready(function(){
  // маски для номеров телефонов
    $("#client-tel").mask("+7(999) 999-9999");
    $("#modal-tel").mask("+7(999) 999-99-99");

  // вызов модального окна в десктопе по клику на номер телефона
    if (document.body.clientWidth>800) {
      $('body').on('click','.main-nav__call-us,.contacts__info-item--tel,.call-us,.modal-call,.prices__service-item', function(event) {
        event.preventDefault();
        $(".modal-feedback").addClass("modal-feedback--open")
        $(".modal-feedback").removeClass('modal-feedback--send-ok');
      });
    };

    $('body').on('click','.page-content__promo-preview', function(event) {
      $(".modal-promo").addClass('modal-promo--open');
    });

    $('body').on('click','.submit-add__btn', function(event) {
      event.preventDefault();
      $(".modal-feedback").addClass("modal-feedback--open")
      $(".modal-feedback").removeClass('modal-feedback--send-ok');
    });

    $('body').on('click','.modal-overlay,.modal-feedback__modal-window>.close-btn,.modal-promo__modal-window>.close-btn', function(event) {
        $(".modal-feedback").removeClass('modal-feedback--open');
        $(".modal-feedback").removeClass('modal-feedback--send-ok');
        $(".modal-promo").removeClass('modal-promo--open');
    });


    $('body').on('click','.modal-feedback__submit-btn', function(event) {
        $(".modal-feedback").addClass('modal-feedback--send-ok');
    });

    // при отправке формы из header страниц услуг появляется форма с текстом успешной отправки заявки
    $('body').on('click','.page-form__send-btn', function(event) {
        $(".modal-feedback").addClass('modal-feedback--open');
        $(".modal-feedback").addClass('modal-feedback--send-ok');
    });

    // основное меню страниц услуг
    $('body').on('click','.page-content__item-menu > a', function(event) {
        event.preventDefault();
        $(".page-content__submenu").removeClass('page-content__submenu--open');
        $(this).next().addClass('page-content__submenu--open');
    });

    // переключение меню подуслуг и открытие соответствующей вкладки с ценами услуги
    // $('body').on('click','.prices__slide-nav a', function(event) {
    //     event.preventDefault();
    //     var tab = $(this).attr('href');
    //     $(".item-active").removeClass('item-active');
    //     $(this).addClass('item-active');
    //     $('.prices__single-partition,.prices__service-sections').removeClass('prices__service-show');
    //     $('.prices__single-partition,.prices__service-sections.'+tab).addClass('prices__service-show');
    // });

    $('body').on('click','.prices__slide-nav a', function(event) {
       event.preventDefault();
       $(".item-active").removeClass('item-active');
       $('.prices__service-tab').removeClass('prices__service-show');
       $(this).addClass('item-active');
       var index = $('.prices__slide-nav a').index($('.item-active'));
       $('.prices__service-tab:eq('+index+')').addClass('prices__service-show');
    });


    // развернуть-свернуть содержание цены в подуслуге
    $('body').on('click','.prices__service-section', function(event) {
        event.preventDefault();
        $(this).toggleClass('prices__service-section--active');
    });

    // owl carousel

    $('.promo-slider__slides').owlCarousel({
        items: 1,
        nav: true,
        navText: ['','']
    });

    $('.reviews__slide-container').owlCarousel({
        items: 2,
        nav: false,
        navText: ['','']
    });
    var teamElements = document.querySelectorAll('.team__worker');

    if (teamElements.length > 4) {
        $(".team__inner-container").addClass('owl-carousel');
        $('.team__inner-container').owlCarousel({
            items: 4,
            nav: true,
            margin: 31,
            navText: ['','']
        });
    };

    // яндекс карта
    ymaps.ready(init);

    function init(){

        var myMap;

        myMap = new ymaps.Map("map", {
            center: [59.976833, 30.340160],
            zoom: 17,
            controls: []
        });
        var myPlacemark = new ymaps.Placemark([59.976833, 30.340160] ,{
            hintContent: 'Литовская улица, 1к2'
        });

        myMap.geoObjects.add(myPlacemark);

        $('body').on('click','.contacts__info-item--address', function(event) {
            event.preventDefault();
            myMap.setCenter([59.976833, 30.340160], 17);
        });

    }

});
