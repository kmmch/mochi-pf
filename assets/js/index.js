(function($){
    $('.hamburgerBtn').click(function () {//ボタンがクリックされたら
        $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $('.hamburgerMenu').toggleClass('active');//ナビゲーションにactiveクラスを付与
        $('body').toggleClass('noScroll');
    });
    
    $('.hamburgerMenu a').click(function () {//ナビゲーションのリンクがクリックされたら
        $('.hamburgerBtn').removeClass('active');//ボタンの activeクラスを除去し
        $('.hamburgerMenu').removeClass('active');//ナビゲーションのactiveクラスを除去
        $('body').removeClass('noScroll');
    });
}(jQuery));