const image1 = document.getElementById("image1");
const button1 = document.getElementById("button1");

function imageToggle() {
  if (image1.style.visibility == "hidden") {
    image1.style.visibility = "visible";
  } else {
    image1.style.visibility = "hidden";
  }
}

button1.addEventListener("click", imageToggle);

const div1 = document.getElementById("div1");
// const button2 = document.getElementById("button2");
let counter = 0;

function increase() {
  counter = counter + 1;
  div1.innerHTML = "You have toggled the image " + counter + " times!";
}
button1.addEventListener("click", increase);
// button2.addEventListener("click", increase);l
let input1 = document.getElementById("number1");
let numberOne = 0;
let input2 = document.getElementById("number2");
let numberTwo = 0;
let addition = 0;

const buttonAdd = document.getElementById("buttonAdd");
const buttonSub = document.getElementById("buttonSub");
const buttonMult = document.getElementById("buttonMult");
const buttonDiv = document.getElementById("buttonDiv");
const answer = document.getElementById("answer");

function addNumbers() {
  numberOne = Number(input1.value);
  numberTwo = Number(input2.value);
  addition = numberOne + numberTwo;
  answer.innerHTML = "They come too " + addition;
}
function subNumbers() {
  numberOne = Number(input1.value);
  numberTwo = Number(input2.value);
  addition = numberOne - numberTwo;
  answer.innerHTML = "They come too " + addition;
}
function multNumbers() {
  numberOne = Number(input1.value);
  numberTwo = Number(input2.value);
  addition = numberOne * numberTwo;
  answer.innerHTML = "They come too " + addition;
}
function divNumbers() {
  numberOne = Number(input1.value);
  numberTwo = Number(input2.value);
  addition = numberOne / numberTwo;
  answer.innerHTML = "They come too " + addition;
}
buttonAdd.addEventListener("click", addNumbers);
buttonSub.addEventListener("click", subNumbers);
buttonMult.addEventListener("click", multNumbers);
buttonDiv.addEventListener("click", divNumbers);
