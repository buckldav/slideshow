import { Composition } from "remotion";

import { Remotion } from "./Video/index";
import { getFont } from "./Video/helpers/load-font";
import { FPS, CANVAS } from "./data/config";
import SlideSeries from "./Video/components/SlideSeries";
import { secondsToFrames as s } from "./data/config";

const campImages = require("/public/camp.json");
const raceImages = require("/public/races.json");
const stateImages = require("/public/state.json");

const { width, height } = CANVAS;

// the audio duration is 58seconds + 4 frames
const durationInFrames = FPS * 58 + 4;

getFont();

export const RemotionVideo = () => {
  const campArr = Array.from(campImages) as string[];
  const raceArr = Array.from(raceImages) as string[];
  const stateArr = Array.from(stateImages) as string[];
  return (
    <>
      <Composition
        id="Camp"
        component={SlideSeries}
        durationInFrames={s((campArr.length + 1) * 2)}
        fps={FPS}
        width={width}
        height={height}
        defaultProps={{ arr: campArr, path: "/images/camp/", seconds: 2 }}
      />
      <Composition
        id="Race"
        component={SlideSeries}
        durationInFrames={s((raceArr.length + 1) * 2)}
        fps={FPS}
        width={width}
        height={height}
        defaultProps={{ arr: raceArr, path: "/images/races/", seconds: 2 }}
      />
      <Composition
        id="State"
        component={SlideSeries}
        durationInFrames={s((stateArr.length + 1) * 2)}
        fps={FPS}
        width={width}
        height={height}
        defaultProps={{ arr: stateArr, path: "/images/state/", seconds: 2 }}
      />
    </>
  );
};
