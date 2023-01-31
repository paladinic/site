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
  "Command Line",
  "PowerBI"
];

const skills = [
  "Machine Learning",
  "Deep Learning",
  "Web Development",
  ""
];

const hobbies = [
  "Electronics",
  "3D Printing",
  "Music",
  "Travelling"
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
document.querySelector("div.hobbies").innerHTML = generateSpans(hobbies);