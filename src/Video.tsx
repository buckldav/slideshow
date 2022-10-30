import { Composition } from "remotion";

import { Remotion } from "./Video/index";
import { getFont } from "./Video/helpers/load-font";
import { FPS, CANVAS } from "./data/config";

const { width, height } = CANVAS;

// the audio duration is 58seconds + 4 frames
const durationInFrames = FPS * 58 + 4;

getFont();

export const RemotionVideo = () => {
  return (
    <>
      <Composition
        id="Main"
        component={Remotion}
        durationInFrames={durationInFrames}
        fps={FPS}
        width={width}
        height={height}
      />
    </>
  );
};
