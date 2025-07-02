var initialPath = `M 10 100 Q 250 100 490 100`;
var finalPath = `M 10 100 Q 250 100 490 100`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
  initialPath = `M 10 100 Q ${dets.x} ${dets.y} 490 100`;
  gsap.to("svg path", {
    attr: { d: initialPath },
    duration: 0.3,
    ease: "power3.Out",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1, 0.2),",
  });
});
