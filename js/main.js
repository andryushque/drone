$(document).ready(function () {
  /*=== 01. Slick Nav ===*/
  // mobile_menu
    const menu = $('ul#header-navigation');
    if(menu.length){
      menu.slicknav({
        prependTo: ".mmenu",
        closedSymbol: '+',
        openedSymbol: '-'
      });
    };
});
