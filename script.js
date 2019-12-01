var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function inputLenght() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLenght() > 0) {
    createListElement();
  }
}

function addListAfterKeyPress() {
  if (inputLenght() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);
