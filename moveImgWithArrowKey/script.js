document.addEventListener("DOMContentLoaded", function () {
  const movingImage = document.getElementById("movingImage");

  // Initial position
  let positionX = 0;
  let positionY = 0;

  const moveStep = 10; // Set your desired movement step

  document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "ArrowUp":
        moveImage(0, -moveStep);
        break;
      case "ArrowDown":
        moveImage(0, moveStep);
        break;
      case "ArrowLeft":
        moveImage(-moveStep, 0);
        break;
      case "ArrowRight":
        moveImage(moveStep, 0);
        break;
    }
  });

  function moveImage(deltaX, deltaY) {
    positionX += deltaX;
    positionY += deltaY;

    // Set new position
    movingImage.style.top = positionY + "px";
    movingImage.style.left = positionX + "px";
  }
});
