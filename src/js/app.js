function addCharacter(ch) {
  const valueDisplay = document.querySelector(".display").value;

  document.querySelector(".display").value = valueDisplay + ch;
}

function cleanDisplay() {
  document.querySelector(".display").value = "";
}

function calculate() {
  const valueDisplay = document.querySelector(".display").value;

  document.querySelector(".display").value = eval(valueDisplay);
}

function invertNumber() {
  const valueDisplay = document.querySelector(".display").value;

  document.querySelector(".display").value = valueDisplay * -1;
}
