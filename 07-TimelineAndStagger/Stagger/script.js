gsap.to("#freds img", {
  y: -100,
  stagger: {
    each: 0.1,
    from: "start",
  },
  repeat: -1,
  yoyo: true,
  repeatDelay: 0,
  duration: 0.5,
  ease: "power2.inOut",
});
