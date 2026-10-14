$(function() {
  
  // 1. スマホ用ハンバーガーメニューの開閉
  $('#js-hamburger').on('click', function() {
    $(this).toggleClass('is-active');
    $('#js-nav').toggleClass('is-active');
  });

  // メニュー内のリンクをクリックしたらメニューを閉じる
  $('#js-nav a').on('click', function() {
    $('#js-hamburger').removeClass('is-active');
    $('#js-nav').removeClass('is-active');
  });

  // 2. スムーズスクロール（ページ内リンクをクリックした時）
  $('a[href^="#"]').on('click', function() {
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? 'html' : href);
    const headerHeight = $('.header').outerHeight(); // ヘッダーの高さを考慮
    const position = target.offset().top - headerHeight;

    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });

  // 3. ページトップへ戻るボタンの表示・非表示制御
  const $totop = $('#js-totop');
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 200) {
      $totop.addClass('is-active');
    } else {
      $totop.removeClass('is-active');
    }
  });

});
