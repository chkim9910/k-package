$(function () {
  let circle = document.querySelector(".circle");
  let circle2 = document.querySelector(".circle2");
  let circle3 = document.querySelector(".circle3");
  let rect = document.querySelector(".rect");
  let rect2 = document.querySelector(".rect2");
  let rect3 = document.querySelector(".rect3");
  let title = document.querySelector(".title");
  let preloader = document.querySelector(".preloader");
  let wrap = document.querySelector(".wrap");
  let body = document.querySelector("body");

  let tl = gsap.timeline();

  gsap.set(circle3, {
    // autoAlpha: 0,
    scale: 0,
  });
  gsap.set(circle2, {
    autoAlpha: 0,
  });
  gsap.set(circle, {
    autoAlpha: 0,
    // x: -1000,
  });
  gsap.set(rect2, {
    y: 1500,
  });
  gsap.set(rect, {
    x: -2000,
  });
  gsap.set(rect3, {
    y: -2000,
  });
  gsap.set(title, { autoAlpha: 0, x: -180 });

  // timeline
  tl.to(
    circle2,
    {
      autoAlpha: 1,
    },
    "+=1"
  )
    .to(circle2, { scale: 0.7, duration: 0.3, delay: 0.5, ease: "bounce.out" })
    .to(circle2, {
      scale: 6,
      duration: 1,
      delay: 0.1,
    })
    .to(circle3, { opacity: 1, scale: 7, duration: 1.5, ease: "bounce.out" })

    .to(rect2, { y: 0, duration: 0.8 })
    .to(rect, { x: 0, duration: 0.8, delay: 0.2 })
    .to(rect3, { y: 0, duration: 0.8, delay: 0.2 })
    .to(rect3, {
      scale: 0.1,
      duration: 1,
      delay: 0.6,
      /* ease: "elastic.out(1,0.5)" */
    })
    .to(circle2, { opacity: 0, duration: 0.1 }, "+=1")
    .to(circle3, { opacity: 0, duration: 0.1 }, "<")
    .to(rect3, { x: -220, duration: 0.8 })
    .to(title, { autoAlpha: 1, duration: 1 }, "+=0.3")
    .to(preloader, {
      autoAlpha: 0,
      duration: 1,
      delay: 1,
      onComplete: () => {
        body.style.overflow = "visible";
        preloader.style.transform = "translateY(-100%)";
        wrap.style.display = "block";
      }, // 애니메이션 완료 후 body의 overflow를 visible로, lineWrap의 display를 block으로 설정
    });
});
