/*
18. Change Text on Button click.
Create a simple HTML page with a heading and a button. The initial text must be “The most affordable learning
platform”, use JavaScript to change the heading text to “PW Skills” when the button is clicked. The button must
toggle the text of a heading between "The most affordable learning platform" and "PW Skills" on each click.
*/
let button = document.getElementById("btn");
let head = document.getElementById("main");

let isChanged = false;

function toggleText() {
  if (isChanged) {
    head.innerText = "The most affordable learning platform";
  } else {
    head.innerText = "PW Skills";
  }
  isChanged = !isChanged;
}

button.addEventListener("click", toggleText);
