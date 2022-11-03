import { Composition } from "remotion";

import { Remotion } from "./Video/index";
import { getFont } from "./Video/helpers/load-font";
import { FPS, CANVAS } from "./data/config";
import SlideSeries from "./Video/components/SlideSeries";
import { secondsToFrames as s } from "./data/config";

const campImages = require("/public/camp.json");
const raceImages = require("/public/races.json");

const { width, height } = CANVAS;

// the audio duration is 58seconds + 4 frames
const durationInFrames = FPS * 58 + 4;

getFont();

export const RemotionVideo = () => {
  const campArr = Array.from(campImages) as string[];
  const raceArr = Array.from(raceImages) as string[];
  return (
    <>
      <Composition
        id="Camp"
        component={SlideSeries}
        durationInFrames={s(campArr.length + 1)}
        fps={FPS}
        width={width}
        height={height}
        defaultProps={{ arr: campArr, path: "/images/camp/" }}
      />
      <Composition
        id="Race"
        component={SlideSeries}
        durationInFrames={s(raceArr.length + 1)}
        fps={FPS}
        width={width}
        height={height}
        defaultProps={{ arr: raceArr, path: "/images/races/" }}
      />
    </>
  );
};
