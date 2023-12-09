gsap.registerPlugin(ScrollTrigger);

gsap.to(".x", {
  scrollTrigger: {
    trigger: ".ad-img",
    start: "top center",
    toggleActions: "restart reset restart reset",
  },
  duration: 1.5,
  visibility: "visible",
  x: -525,
  ease: "power4.out",
});
