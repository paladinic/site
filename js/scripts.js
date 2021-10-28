
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    $(".header").css({
      "font-size": "0.6em"
});}
  else {
    $(".header").css({
      "font-size": "1em"
    });
  }
}
