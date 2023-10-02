(function($){

    // ハンバーガーボタンクリック時
    $('.hamburgerBtn').click(function () {//ボタンがクリックされたら
        $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $('.hamburgerMenu').toggleClass('active');//ナビゲーションにactiveクラスを付与
        $('body').toggleClass('noScroll');
    });
    
    // ハンバーガーメニューのリンククリック時
    $('.hamburgerMenu a').click(function () {//ナビゲーションのリンクがクリックされたら
        $('.hamburgerBtn').removeClass('active');//ボタンの activeクラスを除去し
        $('.hamburgerMenu').removeClass('active');//ナビゲーションのactiveクラスを除去
        $('body').removeClass('noScroll');
    });

    $('.arrowUpper').click(function() {
        $('body,html').animate({
            scrollTop: 0//ページトップまでスクロール
        }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
        return false;//リンク自体の無効化
    });
}(jQuery));