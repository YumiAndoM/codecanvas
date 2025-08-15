// $(".openbtn").click(function () {//ボタンがクリックされたら
// 	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
// 	$("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
// 	$('#js-overlay').toggleClass('active');
// });

// $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
//     $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
//     $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
// });

// ボタンとオーバーレイをカンマで区切って、両方に同じクリックイベントを設定
$(".openbtn, #js-overlay").click(function () {
  $(".openbtn").toggleClass('active');
  $("#g-nav").toggleClass('panelactive');
  $('#js-overlay').toggleClass('active');
});