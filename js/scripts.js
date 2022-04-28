
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    $(".header").css({
      "font-size": "0.6em",
       'box-shadow':' 0px 0px 15px 3px rgba(255,255,255,1)'
});}
  else {
    $(".header").css({
      "font-size": "1em",
       'box-shadow':' 0px 0px 8px 3px rgba(0,0,0,0)'
    });
  }
}
