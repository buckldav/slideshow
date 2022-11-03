import {
  Audio,
  Sequence,
  Composition,
  Series,
  staticFile,
  AbsoluteFill,
} from "remotion";

import { secondsToFrames as s } from "../../data/config";
import Slide from "./Slide";

export default function SlideSeries({
  arr,
  path,
  seconds,
}: {
  arr: string[];
  path: string;
  seconds: number;
}) {
  return (
    <AbsoluteFill style={{ background: "black" }}>
      <Series>
        {arr.map((img, i) => (
          <Series.Sequence durationInFrames={s(seconds)}>
            <Slide src={(path + img) as string} />
          </Series.Sequence>
        ))}
      </Series>
    </AbsoluteFill>
  );
}
