const panels = document.querySelectorAll(".panel");
let currentImageIndex = 0;

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses () {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

function updateImage () {
  removeActiveClasses();
  panels[currentImageIndex].classList.add("active");
}

function autoChange () {
  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % panels.length;
    updateImage();
  }, 4000)
}

autoChange();