document.addEventListener("DOMContentLoaded", () => {
  const ease = "power4.inOut";

  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const href = link.getAttribute("href");

      if (!href || href.startsWith("#") || href === window.location.pathname)
        return;

      animateTransition().then(() => {
        window.location.href = href;
      });
    });
  });

  revealTransitions().then(() => {
    gsap.set(".block", { visibility: "hidden" });
  });

  function revealTransitions() {
    return new Promise((resolve) => {
      gsap.set(".row-1 .block", {
        scaleY: 1,
        transformOrigin: "top",
      });
      gsap.set(".row-2 .block", {
        scaleY: 1,
        transformOrigin: "bottom",
      });

      gsap.to(".block", {
        scaleY: 0,
        duration: 1,
        stagger: {
          each: 0.1,
          from: "start",
          grid: "auto",
          axis: "x",
        },
        ease: ease,
        onComplete: resolve,
      });
    });
  }

  function animateTransition() {
    return new Promise((resolve) => {
      gsap.set(".block", {
        visibility: "visible",
        scaleY: 0,
      });

      gsap.set(".row-1 .block", {
        transformOrigin: "top",
      });
      gsap.set(".row-2 .block", {
        transformOrigin: "bottom",
      });

      gsap.to(".block", {
        scaleY: 1,
        duration: 1,
        stagger: {
          each: 0.1,
          from: "start",
          grid: [2, 5],
          axis: "x",
        },
        ease: ease,
        onComplete: resolve,
      });
    });
  }
});
