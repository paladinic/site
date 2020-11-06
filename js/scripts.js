
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $(".header").css({
      "background-color": "rgba(0,0,0,0.8)",
      "font-size": "10px"
});}
  else {
    $(".header").css({
      "background-color": "black",
      "font-size": "15px"
    });
  }
}
