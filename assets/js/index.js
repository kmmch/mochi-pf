(function($){


    // ハンバーガーボタンクリック時
    $('.hamburgerBtn').click(function () {//ボタンがクリックされたら
        $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $('.hamburgerMenu').toggleClass('active');//ナビゲーションにactiveクラスを付与
        $('body').toggleClass('noScroll');
        $('.footer').toggleClass('activeHamburger');
    });
    
    
    // ハンバーガーメニューのリンククリック時
    $('.hamburgerMenu a').click(function () {//ナビゲーションのリンクがクリックされたら
        $('.hamburgerBtn').removeClass('active');//ボタンの activeクラスを除去し
        $('.hamburgerMenu').removeClass('active');//ナビゲーションのactiveクラスを除去
        $('body').removeClass('noScroll');
        $('.footer').removeClass('activeHamburger');
    });


    // ページスクロール
    $('.arrowUpper').click(function() {
        $('body,html').animate({
            scrollTop: 0//ページトップまでスクロール
        }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
        return false;//リンク自体の無効化
    });


    // タイプライター風アニメーション
    // TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
    function TextTypingAnime(className) {
	    $(className).each(function () {
		    var elemPos = $(this).offset().top - 50;
		    var scroll = $(window).scrollTop();
		    var windowHeight = $(window).height();
		    var thisChild = "";
		    if (scroll >= elemPos - windowHeight) {
			    thisChild = $(this).children(); //spanタグを取得
			    //spanタグの要素の１つ１つ処理を追加
			    thisChild.each(function (i) {
				    var time = 100;
				    //時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
				    $(this).delay(time * i).fadeIn(time);
			    });
		    } else {
			    thisChild = $(this).children();
			    thisChild.each(function () {
				    $(this).stop(); //delay処理を止める
				    $(this).css("display", "none"); //spanタグ非表示
			    });
		    }
	    });
    }
    // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function () {
	    TextTypingAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述

    // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function () {
	    //spanタグを追加する
	    var element = $(".TextTyping");
	    element.each(function () {
		    var text = $(this).html();
		    var textbox = "";
		    text.split('').forEach(function (t) {
			    if (t !== " ") {
				    textbox += '<span>' + t + '</span>';
			    } else {
				    textbox += t;
			    }
		    });
		    $(this).html(textbox);
	    });

        TextTypingAnime('.TextTypeFirst');/* アニメーション用の関数を呼ぶ*/
        setTimeout(3000);
        TextTypingAnime('.TextTypeSecond');/* アニメーション用の関数を呼ぶ*/    
    });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述



    // モーダルウィンドウ
    //1. テキストを含む一般的なモーダル
    $(".work").modaal({
	    overlay_close:true,//モーダル背景クリック時に閉じるか
	    before_open:function(){// モーダルが開く前に行う動作
		    $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
	    },
	    after_close:function(){// モーダルが閉じた後に行う動作
		    $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
	    }
    });
    $(".info").modaal({
	    overlay_close:true,//モーダル背景クリック時に閉じるか
	    before_open:function(){// モーダルが開く前に行う動作
		    $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
	    },
	    after_close:function(){// モーダルが閉じた後に行う動作
		    $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
	    }
    });


}(jQuery));