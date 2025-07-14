window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(MotionPathPlugin);

  for (let i = 0; i < 20; i++) {
    const rect = document.createElement("div");
    rect.classList.add("rect");
    document.querySelector(".container").appendChild(rect);
  }

  const list = gsap.utils.toArray(".rect");
  list.forEach((rect) => {
    gsap.fromTo(
      rect,
      {
        x: "-40vw",
        scale: 0.0,
      },
      {
        duration: 2 + Math.random() * 3,
        repeat: -1,
        ease: "power1.inOut",
        x: "40vw",
        motionPath: [
          { y: (Math.random() - 0.5) * 20 + "vh", scale: 1 },
          { y: (Math.random() - 0.5) * 50 + "vh", scale: 0 },
        ],
        delay: Math.random(),
      }
    );
  });
});
