import { Bodies, Engine, Render, Runner, World } from "matter-js";

const engine = Engine.create();
const render = Render.create({
  engine,
  element: document.body,
  options: {
    width: 620,
    height: 850,
  }
});

const world = engine.world;

const leftWall = Bodies.rectangle(15, 395, 30, 790, {
  isStatic: true,
});

const rightWall = Bodies.rectangle(605, 395, 30, 790, {
  isStatic: true,
});

const ground = Bodies.rectangle(310, 820, 620, 60, {
  isStatic: true,
});

const topLine = Bodies.rectangle(310, 150, 620, 2, {
  isStatic: true,
});

World.add(world, [leftWall, rightWall, ground, topLine]);

Render.run(render);
Runner.run(engine);