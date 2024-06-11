$(function () {
  let circle = document.querySelector(".circle");
  let circle2 = document.querySelector(".circle2");
  let circle3 = document.querySelector(".circle3");
  let rect = document.querySelector(".rect");
  let rect2 = document.querySelector(".rect2");

  let tl = gsap.timeline();

  gsap.set(circle3, {
    autoAlpha: 0,
    scale: 0,
  });
  gsap.set(circle2, {
    autoAlpha: 0,
  });
  gsap.set(circle, {
    x: -1000,
  });
  gsap.set(rect2, {
    y: 1500,
  });
  gsap.set(rect, {
    x: 2000,
  });

  tl.to(circle, {
    x: 0,
    duration: 2,
  })
    .to(circle2, {
      autoAlpha: 1,
    })
    .to(circle, { opacity: 0, duration: 1.5 })
    .to(circle2, {
      scale: 6,
      duration: 1,
      delay: 0.1,
    })
    // .to(circle3, { opacity: 1, scale: 6, duration: 1.5 })
    .to(rect2, { y: 0, duration: 1.2 })
    .to(rect, { x: 0, duration: 1.2, delay: 0.2 });
});
