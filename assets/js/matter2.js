// 윈도우(브라우저)의 크기를 변수에 담습니다.
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
console.log(windowHeight);

const Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint,
  Composite = Matter.Composite,
  Params = {
    isStatic: true,
    render: {
      fillStyle: "transparent",
    },
  };

const iEngine = Engine.create();
const world = iEngine.world;
iEngine.world.gravity.y = 0.8;
const iRunner = Runner.create();

const iRender = Render.create({
  element: document.querySelector(".sect1"),
  engine: iEngine,
  options: {
    width: windowWidth,
    height: windowHeight,
    wireframes: false,
    background: "black",
    // background: "white",
  },
});

const boxA = Bodies.rectangle(windowWidth / 5, 10, 200, 200, {
  friction: 0.5,
  // 단어 그대로 마찰력 값입니다. (0~1)
  restitution: 0.8,
  // 단어 그대로 복원력 입니다. (0~1)
  render: {
    sprite: {
      texture: "http://127.0.0.1:5502/assets/img/Union.svg",
      //   texture: "//cdn.rawgit.com/liabru/matter-js/2560a681/demo/img/ball.png",
    },
  },
});
const ballA = Bodies.circle(380, 100, 40, {
  friction: 0.5,
  // 단어 그대로 마찰력 값입니다. (0~1)
  restitution: 0.8,
  // 단어 그대로 복원력 입니다. (0~1)
  render: {
    fillStyle: "#001eff",
    strokeStyle: "#000",
    lineWidth: 8,
  },
  // fillStyle 은 채워질 색, strokeStyle은 선색, lineWidth 선 굵기
});
const ballB = Bodies.circle(460, 10, 40, {
  friction: 0.2,
  // 단어 그대로 마찰력 값입니다. (0~1)
  restitution: 0.8,
  // 단어 그대로 복원력 입니다. (0~1)
});
const ballC = Bodies.circle(860, 100, 40, {
  friction: 0.2,
  // 단어 그대로 마찰력 값입니다. (0~1)
  restitution: 0.8,
  // 단어 그대로 복원력 입니다. (0~1)
});
const ballD = Bodies.circle(550, 20, 80, {
  friction: 0.2,
  // 단어 그대로 마찰력 값입니다. (0~1)
  restitution: 0.8,
  // 단어 그대로 복원력 입니다. (0~1)
});
const ballE = Bodies.circle(700, 80, 100, {
  friction: 0.2,
  // 단어 그대로 마찰력 값입니다. (0~1)
  restitution: 0.8,
  // 단어 그대로 복원력 입니다. (0~1)
});
const boxB = Bodies.rectangle(1000, 50, 500, 140, {
  friction: 0.2,
  // 단어 그대로 마찰력 값입니다. (0~1)
  restitution: 0.8,
  // 단어 그대로 복원력 입니다. (0~1)
});
const boxC = Bodies.rectangle(1000, 100, 100, 200, {
  friction: 0.2,
  // 단어 그대로 마찰력 값입니다. (0~1)
  restitution: 0.8,
  // 단어 그대로 복원력 입니다. (0~1)
});
const boxD = Bodies.rectangle(1200, 80, 400, 200, {
  friction: 0.2,
  // 단어 그대로 마찰력 값입니다. (0~1)
  restitution: 0.8,
  // 단어 그대로 복원력 입니다. (0~1)
  render: {
    fillStyle: "#001eff",
  },
});
const ground = Bodies.rectangle(
  windowWidth / 2,
  windowHeight / 1,
  windowWidth,
  60,
  {
    isStatic: true,
    render: {
      fillStyle: "transparent",
    },
  }
);
const leftWall = Bodies.rectangle(
  windowWidth / 1,
  windowHeight / 1,
  60,
  windowHeight * 2,
  {
    isStatic: true,
    render: {
      fillStyle: "transparent",
    },
  }
);
const rightWall = Bodies.rectangle(0, windowHeight / 1, 60, windowHeight * 2, {
  isStatic: true,
});
const topWall = Bodies.rectangle(
  windowWidth / 2,
  windowHeight / windowHeight,
  windowWidth,
  60,
  {
    isStatic: true,
    render: {
      fillStyle: "transparent",
    },
  }
);

Composite.add(iEngine.world, [
  boxA,
  boxB,
  boxC,
  boxD,
  ballA,
  ballB,
  ballC,
  ballD,
  ballE,
  ground,
  leftWall,
  rightWall,
  topWall,
]);

Render.run(iRender);

Runner.run(iRunner, iEngine);

// add mouse control
let mouse = Mouse.create(iRender.canvas),
  mouseConstraint = MouseConstraint.create(iEngine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

Composite.add(world, mouseConstraint);

// keep the mouse in sync with rendering
iRender.mouse = mouse;

// fit the render viewport to the scene
Render.lookAt(render, {
  min: { x: 0, y: 0 },
  max: { x: 0.05, y: -0.05 },
});
