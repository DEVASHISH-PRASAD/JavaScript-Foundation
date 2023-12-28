/*
22. Progress Bar
Create a progress bar that fills up as the user scrolls down the page.
*/

document.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  const scrollPercentage =
    (scrollPosition / (documentHeight - windowHeight)) * 100;
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = scrollPercentage + "%";
});
