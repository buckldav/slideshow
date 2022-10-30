import { Audio, Sequence, Composition, Series, staticFile } from "remotion";
import Slide from "./components/Slide";
import { secondsToFrames as s } from "../data/config";
const audio = staticFile("/audio.wav");

export const Remotion = () => {
  return (
    <>
      <Series>
        <Series.Sequence durationInFrames={s(2)}>
          <Slide src={"/images/team2021.jpg"} />
        </Series.Sequence>
      </Series>
      {/* <Audio src={audio} /> */}
    </>
  );
};
