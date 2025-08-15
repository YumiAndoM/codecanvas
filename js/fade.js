// フェードインについて関数でまとめる
function fadeIn() {
  // 1つ目の要素（fadeUpTrigger）の処理
  $('.fadeUpTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeUp'); // 通常のfadeUpクラスを追加
    } else {
      $(this).removeClass('fadeUp');
    }
  });

  // 2つ目の要素（fadeUpTrigger--2）の処理
  $('.fadeUpTrigger--2').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      // ★基本のfadeUpと、遅延用のfadeUp--2の両方を追加
      $(this).addClass('fadeUp fadeUp--2'); 
    } else {
      $(this).removeClass('fadeUp fadeUp--2');
    }
  });

  // 3つ目の要素（fadeUpTrigger--3）の処理
  $('.fadeUpTrigger--3').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      // ★基本のfadeUpと、遅延用のfadeUp--3の両方を追加
      $(this).addClass('fadeUp fadeUp--3');
    } else {
      $(this).removeClass('fadeUp fadeUp--3');
    }
  });
  // フェードレフトについて
  $('.fadeLeftTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeLeft');
    } else {
      $(this).removeClass('fadeLeft');
    }
  });
  // フェードライトについて
  $('.fadeRightTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeRight');
    } else {
      $(this).removeClass('fadeRight');
    }
  });
}

$(window).scroll(function () { // スクロールしたら
  fadeIn(); // 関数を実行
});