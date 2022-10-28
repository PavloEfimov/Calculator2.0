let display = document.querySelector("#display");
let digits = document.querySelector("#digits");
let operations = document.querySelector("#operations");
let dig0 = document.querySelector("#d0");
let dig1 = document.querySelector("#d1");
let dig2 = document.querySelector("#d2");
let dig3 = document.querySelector("#d3");
let dig4 = document.querySelector("#d4");
let dig5 = document.querySelector("#d5");
let dig6 = document.querySelector("#d6");
let dig7 = document.querySelector("#d7");
let dig8 = document.querySelector("#d8");
let dig9 = document.querySelector("#d9");
let operPlus = document.querySelector("#pls");
let operMinus = document.querySelector("#mns");
let operDivide = document.querySelector("#dvd");
let operEqual = document.querySelector("#eql");
let btnC = document.querySelector("#C");
let btnAC = document.querySelector("#AC");
let btnPLS_MNS = document.querySelector("#pls_mns");
let btnDecimal = document.querySelector("#decimal");
let value = 0;
let prevValue = 0;
let operator;

let toDisplay = function (e) {
  let regexp = /\.\d\d\d/;
  if (regexp.test(display.innerText)) return;

  if (
    display.innerText.length < 8 ||
    (display.innerText[0] == "-" && display.innerText.length < 9)
  ) {
    display.innerText = display.innerText + e.target.innerText;
  }

  value = Math.round(+display.innerText * 1000) / 1000;
};

let toDisplayDot = function (e) {
  if (
    (display.innerText.length < 8 ||
      (display.innerText[0] == "-" && display.innerText.length < 9)) &&
    !display.innerText.includes(".")
  ) {
    display.innerText = display.innerText + e.target.innerText;
  }
  value = Math.round(+display.innerText * 1000) / 1000;
};

let toOperate = function (e) {
  if (display.innerText !== "") {
    prevValue = value;
  }

  operator = e.target.innerText;
  if (operator !== "=") {
    display.innerText = "";
  }
};
let equalOperation = function (e) {
  switch (operator) {
    case "+":
      value = value + prevValue;
      value = Math.round(value * 1000) / 1000;
      break;
    case "-":
      value = prevValue - value;
      value = Math.round(value * 1000) / 1000;
      break;
    case "/":
      value = prevValue / value;
      value = Math.round(value * 1000) / 1000;
      break;
  }
  console.log("value", value);
  if (
    ("" + value).length < 9 ||
    (("" + value)[0] == "-" && ("" + value).length < 10)
  ) {
    display.innerText = value;
    console.log("display.innerText.length", display.innerText.length);
  } else {
    console.log("display.innerText.length", display.innerText.length);
    display.innerText = "ERR";
  }
};

let cOperation = function (e) {
  if (display.innerText) {
    display.innerText = "";
    value = 0;
  } else {
    display.innerText = prevValue;
    operator = null;
    value = prevValue;
    prevValue = 0;
  }
};

let acOperation = function (e) {
  display.innerText = "";
  value = 0;
  prevValue = 0;
  operator = null;
};

let plsmnsOperation = function (e) {
  if (display.innerText[0] == "-") {
    display.innerText = display.innerText.slice(1);
  } else {
    display.innerText = "-" + display.innerText;
  }
  value = -value;
};

digits.addEventListener("click", toDisplay);
operEqual.addEventListener("click", equalOperation);
operations.addEventListener("click", toOperate);
btnC.addEventListener("click", cOperation);
btnAC.addEventListener("click", acOperation);
btnPLS_MNS.addEventListener("click", plsmnsOperation);
btnDecimal.addEventListener("click", toDisplayDot);
