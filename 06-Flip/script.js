gsap.registerPlugin(Flip);

const container = document.querySelector(".container");
const box = document.querySelector(".box");

let inside = false;

document.addEventListener("click", () => {
  const state = Flip.getState(box);

  if (!inside) {
    container.appendChild(box);
  } else {
    document.body.appendChild(box);
  }

  Flip.from(state, {
    duration: 1,
    ease: "power1.out",
  });

  inside = !inside;
});
