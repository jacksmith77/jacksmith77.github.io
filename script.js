// Function to change the intro text in the h4
function changeH4Text() {
  const h4 = document.querySelector(".thinker span");
  const texts = [
    "Hacker",
    "Creator",
    "Thinker",
    "Frontend Developer",
    "Coder",
    "Innovator",
    "Collaborator",
    "Problem Solver"
  ];
  let index = 0;

  setTimeout(function () {
    setInterval(() => {
      h4.innerText = texts[index];
      h4.style.color = "var(--color-accent)";
      index = (index + 1) % texts.length;
    }, 2000);
  }, 3500);
}
window.addEventListener("load", changeH4Text);

// Function to control the gallery pics
function setupCarousel() {
  const carousel = document.getElementById("projects-gallery-con");
  const images = carousel.getElementsByClassName("carousel-image");
  const arrowLeft = carousel.querySelector(".carousel-arrow.left");
  const arrowRight = carousel.querySelector(".carousel-arrow.right");
  let currentImage = 0;

  for (let i = 0; i < images.length; i++) {
    if (i !== currentImage) {
      images[i].style.display = "none";
    }
  }

  arrowLeft.addEventListener("click", showPreviousImage);
  arrowRight.addEventListener("click", showNextImage);

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("touchstart", handleTouchStart);
  }

  function showPreviousImage() {
    images[currentImage].style.display = "none";
    currentImage = (currentImage - 1 + images.length) % images.length;
    images[currentImage].style.display = "block";
  }

  function showNextImage() {
    images[currentImage].style.display = "none";
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].style.display = "block";
  }

  function handleTouchStart() {
    const image = this;
    image.classList.add("scaling");
    setTimeout(function () {
      image.classList.remove("scaling");
    }, 100);
  }
}
setupCarousel();

// Function to cause the typewriter effect when scrolling
function typewriterEffect() {
  const targetElements = document.querySelectorAll(
    "#about-text-con h2, #about-skills-con h2, #projects-gallery-con h2, #contact-con h2, .projects-title"
  );
  const texts = Array.from(targetElements).map((element) => element.innerText);
  const charIndexes = Array.from({ length: texts.length }, () => 0);

  function type(index) {
    const targetElement = targetElements[index];
    const text = texts[index];
    let charIndex = charIndexes[index];

    const currentText = text.slice(0, ++charIndex);
    targetElement.innerText = currentText;

    if (currentText === text) {
      if (index === targetElements.length - 1) {
        return;
      }
    }

    setTimeout(() => type(index), 100);
    charIndexes[index] = charIndex;
  }

  function isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    const isVisible = elemTop < window.innerHeight && elemTop >= 0;
    return isVisible;
  }

  function handleScroll() {
    targetElements.forEach((element, index) => {
      if (isScrolledIntoView(element) && charIndexes[index] === 0) {
        type(index);
      }
    });

    const allTextsTyped = charIndexes.every(
      (index) => index === texts[index].length
    );
    if (allTextsTyped) {
      window.removeEventListener("scroll", handleScroll);
    }
  }

  window.addEventListener("scroll", handleScroll);
}
window.addEventListener("load", typewriterEffect);

// Function to give links smooth scrolling
document.querySelectorAll(".go").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
