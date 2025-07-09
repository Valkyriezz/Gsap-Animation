// // gsap.registerPlugin(ScrollTrigger);

// // gsap.registerPlugin(ScrollTrigger);
// gsap.timeline({
//     scrollTrigger:{
//     trigger:".container_img",
//     scrub:true,
//     markers: true,
//     start:"top top",
//     end:"+=2000",
//     pin: true,
//     // toggleActions: "restart none none restart",
//     // pinSpacing: false
//     }
// })
// .to(".img2" , 2, {
//     y:10,
//     ease: lineBreak.easeNone,
// }, "start")
// .to(".img3", 2, {
//     y:10,
//     ease: lineBreak.easeNone,
// }, "start")
// .to(".img4", 2, {
//     y:20,
//     ease: lineBreak.easeNone,
// }, "start")
// .to(".img5", 2, {
//     y:-40,
//     ease: lineBreak.easeNone,
// }, "start")
// .to(".img6",2, {
//     y:-70,
//     ease: lineBreak.easeNone,
// }, "start")
// .to(".img7",2, {
//     y:-120,
//     ease: lineBreak.easeNone,
// }, "start")
// .to(".img8", 2, {
//     y:-130,
//     ease: lineBreak.easeNone,
// }, "start")
// .to(".img9", 2, {
//     y:-170,
//     ease: lineBreak.easeNone,
//     scaleY:1.2,
// }, "start")
// .to(".box",2,{
//    height:"20vh",
//     ease: lineBreak.easeNone,
// }, "start")

// // .to(".img2", { y: 10, ease: "none" }, "start")
// // .to(".img3", { y: 10, ease: "none" }, "start")
// // .to(".img4", { y: 20, ease: "none" }, "start")
// // .to(".img5", { y: -40, ease: "none" }, "start")
// // .to(".img6", { y: -70, ease: "none" }, "start")
// // .to(".img7", { y: -120, ease: "none" }, "start")
// // .to(".img8", { y: -10, ease: "none" }, "start")
// // .to(".img9", { y: -170, scaleY: 1.2, ease: "none" }, "start")
// // .to(".box", { height: "20vh", ease: "none" }, "start");

// gsap.timeline({
//     scrollTrigger:{
//     trigger:".boxes",
//     scrub:true,
//     start:"top top",
//     end:"+=2000",
//     pin: true,
//     // pinSpacing: false,
//     markers: true,
//    toggleActions: "restart none none reset"
// }
// })
// .from("h2",{
//     x:500,
//     opacity:0,
//     ease: Power3.easeInOut
// })
// .from("h1",{
//     x:-500,
//     opacity:0,
//     ease: Power3.easeInOut
// })
// .from("h3",{
//     x:500,
//     opacity:0,
//     ease: Power3.easeInOut
// })
// // from("h2", { x: 500, opacity: 0, ease: "power3.out" })
// // .from("h1", { x: -500, opacity: 0, ease: "power3.out" })
// // .from("h3", { x: 500, opacity: 0, ease: "power3.out" });

// gsap.registerPlugin(ScrollTrigger);

// gsap.timeline({
//     scrollTrigger: {
//         trigger: ".container_img",
//         scrub: 1, // Smooth scrolling effect
//         start: "top top",
//         end: "+=2000",
//         pin: true,
//         pinSpacing: false, // Prevents layout shifts
//         markers: true
//     }
// })
// .to(".img2", { y: 10, ease: "power1.out" })
// .to(".img3", { y: 10, ease: "power1.out" }, "<")
// .to(".img4", { y: 20, ease: "power1.out" }, "<")
// .to(".img5", { y: -40, ease: "power1.out" }, "<")
// .to(".img6", { y: -70, ease: "power1.out" }, "<")
// .to(".img7", { y: -100, ease: "power1.out" }, "<")
// .to(".img8", { y: -10, ease: "power1.out" }, "<")
// .to(".img9", { y: -270, scaleY: 1.2, ease: "power1.out" }, "<")
// .to(".box", { height: "20vh", ease: "power1.out" }, "<");

// gsap.timeline({
//     scrollTrigger: {
//         trigger: ".boxes",
//         scrub: 1, // Smooth scroll effect
//         start: "top top",
//         end: "+=100",
//         pin: true,
//         pinSpacing: false, // Prevents layout shifts
//         markers: true
//     }
// })
// .from("h2", { x: 500, opacity: 0, ease: "power3.out" })
// .from("h1", { x: -500, opacity: 0, ease: "power3.out" })
// .from("h3", { x: 500, opacity: 0, ease: "power3.out" });

// setTimeout(() => {
//     ScrollTrigger.refresh();
// }, 100);

gsap.registerPlugin(ScrollTrigger);

// Parallax Timeline
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".container_img",
      scrub: 1,
      start: "top top",
      end: "+=3000", // Increased scroll distance
      pin: true,
      pinSpacing: true, // Set to TRUE (important)
      // markers: true
    },
  })
  .to(".img2", { y: 50, ease: "power1.out" })
  .to(".img3", { y: 100, ease: "power1.out" }, "<")
  .to(".img4", { y: 150, ease: "power1.out" }, "<")
  .to(".img5", { y: -100, ease: "power1.out" }, "<")
  .to(".img6", { y: -150, ease: "power1.out" }, "<")
  .to(".img7", { y: -200, ease: "power1.out" }, "<")
  .to(".img8", { y: -50, ease: "power1.out" }, "<")
  .to(".img9", { y: -400, scaleY: 1.2, ease: "power1.out" }, "<")
  // .to(".box", { height: "40vh", ease: "power1.out" }, "<");
  .to(
    ".box",
    {
      height: "40vh",
      scaleY: 1.2,
      transformOrigin: "bottom",
      ease: "power1.out",
    },
    "<"
  );

// Text Animation Timeline
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".boxes",
      scrub: 1,
      start: "top center", // Changed from "top top" to "top center" for better effect
      end: "+=500",
      pin: true,
      pinSpacing: true, // TRUE is better
      // markers: true
    },
  })
  .from("h2", { x: 500, opacity: 0, ease: "power3.out" })
  .from("h1", { x: -500, opacity: 0, ease: "power3.out" })
  .from("h3", { x: 500, opacity: 0, ease: "power3.out" });

// Optional: Refresh ScrollTrigger once all is loaded
ScrollTrigger.refresh();
