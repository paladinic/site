// Scrolling

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("back_to_top_btn").style.bottom = "0px";
  } else {
    document.getElementById("back_to_top_btn").style.bottom = "-200px";
  }
}

window.onscroll = function() {scrollFunction()};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
