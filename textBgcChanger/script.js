// Add this JavaScript to script.js
document.addEventListener("DOMContentLoaded", function () {
  const paragraph = document.querySelector("#content p");

  if (paragraph) {
    highlightWords(paragraph);
  }
});

function highlightWords(paragraph) {
  const words = paragraph.textContent.split(/\s+/);

  for (const word of words) {
    if (word.length > 8) {
      paragraph.innerHTML = paragraph.innerHTML.replace(
        new RegExp(`\\b${word}\\b`, "g"),
        `<span class="highlighted">${word}</span>`
      );
    }
  }
}
