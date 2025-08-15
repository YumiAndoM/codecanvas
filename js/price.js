// ページが読み込まれたら実行
window.addEventListener('load', function() {
  // 中央に表示したい要素（.is-recommend）を取得
  const recommendPlan = document.querySelector('.is-recommend');

  // 要素が存在すれば実行
  if (recommendPlan) {
    // その要素が中央に来るようにスクロールさせる
    recommendPlan.scrollIntoView({
      behavior: 'auto', // アニメーションなしで即座に移動
      block: 'nearest',
      inline: 'center'
    });
  }
});