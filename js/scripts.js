
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

// tech stack

const code_langs = [
  "R",
  "Python",
  "JavaScript"
];

const other_code_langs = [
  "SQL",
  "HTML",
  "CSS",
  "HTTP"
];

const code_fws = [
  "tensorflow",
  "sklearn",
  "flask",
  "dash",
  "streamlit",
  "pandas",
  "numpy",
  "react",
  "node",
  "shiny",
  "plotly",
  "leaflet",
  "tidyverse"
];

const tools = [
  "Git",
  "VS Code",
  "Jupyter",
  "Google Cloud",
  "FireBase",
  "Stripe (API)",
  "PowerBI"
];

function randRGB(max=200){
  return `rgb(${Math.floor(Math.random()*max)},${Math.floor(Math.random()*max)},${Math.floor(Math.random()*max)})`
}

function generateSpans(array) {

  let texts = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    texts.push(
      `<span style = "color:${randRGB()}">`+ element + `</span>`
    );
  }

  return texts.join('');
}

document.querySelector("div.code_langs").innerHTML = generateSpans(code_langs);
document.querySelector("div.other_code_langs").innerHTML = generateSpans(other_code_langs);
document.querySelector("div.code_fws").innerHTML = generateSpans(code_fws);
document.querySelector("div.tools").innerHTML = generateSpans(tools);