// Typing Effect
const text = ["Web Developer", "UI Designer", "Frontend Developer"];
let i = 0, j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = text[i];
  
  if (!isDeleting) {
    document.getElementById("typing").innerHTML =
      currentText.substring(0, j++);
  } else {
    document.getElementById("typing").innerHTML =
      currentText.substring(0, j--);
  }

  if (j == currentText.length) isDeleting = true;
  if (j == 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Scroll Animation
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});