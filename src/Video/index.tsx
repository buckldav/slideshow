// not currently in use

import {
  Audio,
  Sequence,
  Composition,
  Series,
  staticFile,
  AbsoluteFill,
} from "remotion";
import Slide from "./components/Slide";
import { secondsToFrames as s } from "../data/config";
const audio = staticFile("/audio.wav");
const campImages = require("/public/camp.json");
const raceImages = require("/public/races.json");
const stateImages = require("/public/state.json");

export const Remotion = () => {
  return (
    <AbsoluteFill style={{ background: "black" }}>
      <Series>
        {Array.from(campImages).map((img, i) => (
          <Series.Sequence durationInFrames={s(2)}>
            <Slide src={("/images/camp/" + img) as string} />
          </Series.Sequence>
        ))}
        {Array.from(raceImages).map((img, i) => (
          <Series.Sequence durationInFrames={s(2)}>
            <Slide src={("/images/races/" + img) as string} />
          </Series.Sequence>
        ))}
        {Array.from(raceImages).map((img, i) => (
          <Series.Sequence durationInFrames={s(2)}>
            <Slide src={("/images/state/" + img) as string} />
          </Series.Sequence>
        ))}
      </Series>
      {/* <Audio src={audio} /> */}
    </AbsoluteFill>
  );
};
