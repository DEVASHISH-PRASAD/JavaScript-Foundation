/*
23. Change the color on click
Create a button that utilizes an array of colors and the Math.random method to change the
 background color of the page upon clicking.
*/
const btn = document.getElementById("button");
const randomColor = () => {
  let cons = "#";
  const color = "0123456789ABCDEF";
  for (i = 0; i < 6; i++) {
    cons = cons + color[Math.floor(Math.random() * 16)];
  }
  return cons;
};
function changeRandomColor() {
  document.body.style.backgroundColor = randomColor();
}
btn.addEventListener("click", changeRandomColor);
