gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".forget h2").forEach((element, index) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "top center",
      toggleActions: "restart reset restart reset",
    },
    duration: 0.6,
    fontSize: index === 1 ? "6rem" : "5rem",
    ease: "slow(0.7,0.7,false)",
    delay: index === 1 ? 0 : 0.6,
    visibility: "visible",
    y: index === 0 ? -100 : index === 2 ? 100 : 0,
  });
});
gsap.to(".down-arrow", {
  scrollTrigger: {
    trigger: ".forget h2",
    start: "top center",
    toggleActions: "restart reset restart reset",
  },
  delay: 0.6,
  visibility: "visible",
  duration: 1.5,
  ease: "slow(0.7,0.7,false)",
  y: 200,
});
