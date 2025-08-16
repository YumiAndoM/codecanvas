// ページが読み込まれたら実行
window.addEventListener('load', function() {

  // 画面幅が750px以下かどうかを判断する
  if (window.matchMedia('(max-width: 750px)').matches) {
    
    // スクロールさせたい親コンテナを取得
    const scrollContainer = document.querySelector('.pricing-block');
    // 中央に表示したいターゲット要素を取得
    const recommendPlan = document.querySelector('.is-recommend');

    // 両方の要素が存在する場合のみ処理を実行
    if (scrollContainer && recommendPlan) {

      // --- スクロール位置を計算 ---
      // 1. コンテナの表示されている部分の幅を取得
      const containerWidth = scrollContainer.offsetWidth;
      // 2. ターゲット要素の幅を取得
      const targetWidth = recommendPlan.offsetWidth;
      // 3. ターゲット要素の左端が、コンテナの左端からどれだけ離れているかを取得
      const targetLeft = recommendPlan.offsetLeft;

      // 4. ターゲットを中央に配置するためのスクロール量を計算
      const scrollTo = targetLeft - (containerWidth / 2) + (targetWidth / 2);

      // 5. 計算した位置に、コンテナの水平スクロールを直接設定する
      scrollContainer.scrollLeft = scrollTo;
    }
  }
});