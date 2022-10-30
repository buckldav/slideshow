const FPS = 30;
const secondsToFrames = (seconds: number) => Math.round(seconds * FPS);
const width = 3840;
const height = 2160;
const CANVAS = {
  width,
  height,
  center: { x: width / 2, y: height / 2 },
};

export { FPS, CANVAS, secondsToFrames };
