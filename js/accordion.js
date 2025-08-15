// アコーディオンをクリックした時の動作（変更なし）
$('.title').on('click', function() {
  var findElm = $(this).next(".box");
  $(findElm).slideToggle();
  
  if($(this).hasClass('close')){
    $(this).removeClass('close');
  }else{
    $(this).addClass('close');
  }
});


// ページが読み込まれた時に最初のliだけを開く（シンプル版）
$(window).on('load', function(){
  // 最初のli要素の中にある.title要素を取得
  var firstTitle = $('.accordion-area li:first-of-type .title');
  
  // 1. 最初の.titleに.closeクラスを追加してアイコンを▲にする
  firstTitle.addClass('close');
  
  // 2. 最初の.titleの直後にある.boxをスライドダウンで開く
  firstTitle.next('.box').slideDown(500);
});