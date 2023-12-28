let fresult = document.getElementById("result");
fresult.textContent = "Result";
//functions for all the buttons
function Add() {
  let input1 = parseFloat(document.getElementById("firstNumber").value);
  let input2 = parseFloat(document.getElementById("secondNumber").value);
  let result = input1 + input2;
  document.getElementById("result").textContent = "Result: " + result;
}
// 2) Sub
function Sub() {
  let input1 = parseFloat(document.getElementById("firstNumber").value);
  let input2 = parseFloat(document.getElementById("secondNumber").value);
  let result = input1 - input2;
  document.getElementById("result").textContent = "Result: " + result;
}
// 3) Mul
function Mul() {
  let input1 = parseFloat(document.getElementById("firstNumber").value);
  let input2 = parseFloat(document.getElementById("secondNumber").value);
  let result = input1 * input2;
  document.getElementById("result").textContent = "Result: " + result;
}
// 4) Div
function Div() {
  let input1 = parseFloat(document.getElementById("firstNumber").value);
  let input2 = parseFloat(document.getElementById("secondNumber").value);
  let result = input1 / input2;
  document.getElementById("result").textContent = "Result: " + result;
}
document.getElementById("add").addEventListener("click", Add);
document.getElementById("sub").addEventListener("click", Sub);
document.getElementById("mul").addEventListener("click", Mul);
document.getElementById("div").addEventListener("click", Div);
