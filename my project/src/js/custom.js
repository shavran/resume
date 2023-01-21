$(document).ready(function(){
    
    //Включаем WOW
     new WOW().init();
    
    //Добавляем Прелоадер
    $(".loaderArea").css("display", "none");
    
    //Калькулятор    
    function calculate(){
       let sum = parseInt($("#selectSite option:selected").val()) + parseInt($("#selectDesign option:selected").val()) + parseInt($("#selectAdaptive option:selected").val());
       let days = parseInt($("select option:selected").attr("days")) + parseInt($("select option:selected").attr("days")) + parseInt($("select option:selected").attr("days"));
        $(".price .digit").text(sum);
        $(".days .digit").text(days);
    }
    calculate();
    $("select").on("change", function(){
       calculate();
    });
    
    //Плавный скроллинг к якорным ссылкам
      $("a[href^='#']").click(function(){
                let _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
    
    //Анимация активных ссылок в меню 
           $(window).scroll(() => {
               let scrollDistance = $(window).scrollTop();


               $('.section').each((i, el) => {

                   if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
                       $('nav a').each((i, el) => {
                           if ($(el).hasClass('active')) {
                               $(el).removeClass('active');
                           }
                       });

                       $('nav li:eq(' + i + ')').find('a').addClass('active');
                   }

               });
           });
    
    //Отложенная Анимации при скролле
        let options = {
            threshold: [0.5]
        };
        let observer = new IntersectionObserver(onEntry, options);
        let elements = $('.element-animation');

        elements.each((i, el) => {
            observer.observe(el);
        });


        function onEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.classList.add('element-show');
                }
            });
        }
    
    //Загрузка картинок при скролле
         let optionsImg = {
            threshold: [0.5]
        };
        let observerImg = new IntersectionObserver(onEntryImg, optionsImg);
        let elementsImg = $('.lazy_image');

        elementsImg.each((i, el) => {
            observerImg.observe(el);
        });


        function onEntryImg(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.src = change.target.dataset.src;
                }
            });
        }
    
    //Бегающие цифры статистики
     let optionsStat = {
            threshold: [0.5]
        };
        let observerStat = new IntersectionObserver(onEntryStat, optionsStat);
        let elementsStat = $('.statAnimation');

        elementsStat.each((i, el) => {
            observerStat.observe(el);
        });


        function onEntryStat(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    if(!$('.statAnimation').hasClass("done")){
                        $('.statAnimation').addClass("done");
                        $('.statAnimation').spincrement({
                         thousandSeparator: "",
                         duration: 3000
                    });
                  }
                }
            });
        }
    
    //Модальные окна в кейсах
    $('.image-link').magnificPopup({
        type: 'image'
    });

    //Модальное окно акции по таймеру
        setTimeout(function () {
           const myModal = new bootstrap.Modal('#myModal', {
                keyboard: false
            });
            modalToggle = document.getElementById('toggleMyModal'); 
            myModal.show(modalToggle);

        }, 5000);
    });

    //Маска номера телефона
    $("#phoneUser").mask("+7 (999) 999-9999");

