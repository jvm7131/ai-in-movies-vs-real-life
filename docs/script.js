window.addEventListener("DOMContentLoaded", init, false);

function init() {
  alert("Hi there! Looks like the page loaded! Yay!");

  var buttons = document.getElementsByTagName("button");

  buttons[0].addEventListener("click", changeColor, false);
  buttons[1].addEventListener("click", newFunction, false);
}

function changeColor() {
  var colorMe1 = document.getElementById("colorToggle");
  colorMe1.style.backgroundColor = "skyblue";
}

function newFunction() {}

function init() {
  var inputs = document.getElementsByTagName("input");

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("click", toggle, false);
  }
}

function toggle() {
  var id = this.id;

  switch (id) {
    case "TITLEtoggle":
      var titles = document.getElementsByClassName("title");

      for (var i = 0; i < titles.length; i++) {
        titles[i].classList.toggle("on");
      }
      break;
  }
}

window.addEventListener("DOMContentLoaded", init, false);
