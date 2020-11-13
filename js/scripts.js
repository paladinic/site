
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    $(".header").css({
      "background-color": "rgba(0,0,0,0.8)",
      "font-size": "0.6em"
});}
  else {
    $(".header").css({
      "background-color": "black",
      "font-size": "1em"
    });
  }
}
