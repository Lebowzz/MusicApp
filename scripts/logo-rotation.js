gsap.registerPlugin(ScrollTrigger);

gsap.to(".big-logo", {
  scrollTrigger: {
    trigger: ".big-logo",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 1.5,
  ease: "slow(0.7,0.7,false)",
  rotation: 180,
  x: 1200,
});

gsap.from("#about-us section p", {
  scrollTrigger: {
    trigger: ".big-logo",
    start: "top center",
    toggleActions: "play none none none",
  },
  delay: 0.2,
  duration: 0.7,
  opacity: 0,
  ease: "power1.inOut",
});
