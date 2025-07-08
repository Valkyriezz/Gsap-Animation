// Fade in each word
const fadeText = document.getElementById("fade-text");
const words = fadeText.textContent.split(" ");

fadeText.innerHTML = words
  .map((word) => `<span class="word">${word}</span>`)
  .join(" ");

gsap.set(".word", { opacity: 0, y: 20 });

gsap.to(".word", {
  opacity: 1,
  y: 0,
  duration: 0.6,
  stagger: 0.2,
  ease: "power2.out",
});

// Typing effect with cursor
const typedSpan = document.getElementById("typed");
const originalText = "Typing animation incoming...";

gsap.to(
  {},
  {
    duration: originalText.length * 0.05,
    onUpdate: function () {
      const progress = Math.floor(this.progress() * originalText.length);
      typedSpan.textContent = originalText.substring(0, progress);
    },
    ease: "none",
  }
);
