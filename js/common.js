// スムーススクロール
// 以下のように記述[data-scroll]は無くても動きます。
// offsetはスムーススクロール後の上の余白です。
// ※50なら上に50pxの余白
var scroll = new SmoothScroll('a[href*="#"], [data-scroll]',{
  offset: 50
});
// windowサイズでモバイル判定
// スマホとPCでスムーススクロール後の上部の余白を変えたい場合
// 例：ブレイクポイント768px スマホで50px PCで30pxのoffset
var isMobile = function(size){
  return $(window).width() <= size ? true : false
}

var scroll = new SmoothScroll('a[href*="#"], [data-scroll]',{
  offset: isMobile(768) ? 50 : 30
});