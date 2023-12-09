let counter = 0;

function Next() {
  if (counter < 2) {
    switch (counter) {
      case 0:
        gsap.to(".tab h1", {
          duration: 1.5,
          ease: "power1.out",
          x: 650,
        });
        gsap.to(".tab button", {
          duration: 1.5,
          ease: "slow(0.7,0.7,false)",
          x: 650,
        });
        gsap.to(".tab-1-images", {
          duration: 1.5,
          ease: "slow(0.7,0.7,false)",
          y: 650,
        });
        gsap.to(".tab-1-images", {
          delay: 1,
          visibility: "hidden",
        });
        gsap.to(".tab-2-images", {
          visibility: "visible",
          duration: 1.5,
          ease: "slow(0.7,0.7,false)",
          y: -200,
        });
        gsap.to(".tab-nav button:nth-child(1)", {
          opacity: "0.6",
          ease: "slow(0.7,0.7,false)",
        });
        gsap.to(".tab-nav button:nth-child(2)", {
          opacity: "1",
          ease: "slow(0.7,0.7,false)",
        });
        break;

      case 1:
        gsap.to(".tab h1", {
          duration: 1.5,
          ease: "power1.out",
          x: 350,
        });
        gsap.to(".tab button", {
          duration: 1.5,
          ease: "slow(0.7,0.7,false)",
          x: 350,
        });
        gsap.to(".tab-2-images", {
          duration: 1.5,
          ease: "slow(0.7,0.7,false)",
          y: 650,
        });
        gsap.to(".tab-2-images", {
          delay: 1,
          visibility: "hidden",
        });
        gsap.to(".tab-3-image", {
          visibility: "visible",
          duration: 1.5,
          ease: "slow(0.7,0.7,false)",
          y: 0,
        });
        gsap.to(".tab-3-image", {
          visibility: "visible",
          duration: 1.5,
          ease: "slow(0.7,0.7,false)",
          y: 0,
        });
        gsap.to(".tab-nav button:nth-child(2)", {
          opacity: "0.6",
          ease: "slow(0.7,0.7,false)",
        });
        gsap.to(".tab-nav button:nth-child(3)", {
          opacity: "1",
          ease: "slow(0.7,0.7,false)",
        });
        break;
    }
    counter++;
  } else {
    GoToTab(0);
  }
}

function Previous() {
  if (counter > 0) {
    switch (counter) {
      case 2:
        gsap.to(".tab h1", {
          duration: 1.5,
          ease: "power1.out",
          x: 650,
        });
        gsap.to(".tab button", {
          duration: 1.5,
          ease: "slow(0.7,0.7,false)",
          x: 650,
        });
        gsap.to(".tab-3-image", {
          duration: 1.5,
          ease: "slow(0.7,0.7,false)",
          y: 650,
        });
        gsap.to(".tab-3-image", {
          delay: 1,
          visibility: "hidden",
        });
        gsap.to(".tab-2-images", {
          visibility: "visible",
          duration: 1.5,
          ease: "slow(0.7,0.7,false)",
          y: -200,
        });
        gsap.to(".tab-nav button:nth-child(3)", {
          opacity: "0.6",
          ease: "slow(0.7,0.7,false)",
        });
        gsap.to(".tab-nav button:nth-child(2)", {
          opacity: "1",
          ease: "slow(0.7,0.7,false)",
        });
        break;

      case 1:
        gsap.to(".tab h1", {
          duration: 1.5,
          ease: "power1.out",
          x: 0,
        });
        gsap.to(".tab button", {
          duration: 1.5,
          ease: "slow(0.7,0.7,false)",
          x: 0,
        });
        gsap.to(".tab-2-images", {
          duration: 1.5,
          ease: "slow(0.7,0.7,false)",
          y: 650,
        });
        gsap.to(".tab-2-images", {
          delay: 1,
          visibility: "hidden",
        });
        gsap.to(".tab-1-images", {
          visibility: "visible",
          duration: 1.5,
          ease: "slow(0.7,0.7,false)",
          y: -200,
        });
        gsap.to(".tab-nav button:nth-child(2)", {
          opacity: "0.6",
          ease: "slow(0.7,0.7,false)",
        });
        gsap.to(".tab-nav button:nth-child(1)", {
          opacity: "1",
          ease: "slow(0.7,0.7,false)",
        });
        break;
    }
    counter--;
  } else {
    GoToTab(2);
  }
}

setInterval(function () {
  Next();
}, 5000);

function GoToTab(input) {
  switch (input) {
    case 0:
      if (counter == 0) {
        break;
      } else if (counter == 1) {
        Previous();
      } else {
        Previous();
        Previous();
      }
      break;
    case 1:
      if (counter == 0) {
        Next();
      } else if (counter == 1) {
        break;
      } else {
        Previous();
      }
      break;
    case 2:
      if (counter == 0) {
        Next();
        Next();
      } else if (counter == 1) {
        Next();
      } else {
        break;
      }
      break;
  }
}
