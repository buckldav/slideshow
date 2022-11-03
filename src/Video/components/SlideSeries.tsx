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
}: {
  arr: string[];
  path: string;
}) {
  return (
    <AbsoluteFill style={{ background: "black" }}>
      <Series>
        {arr.map((img, i) => (
          <Series.Sequence durationInFrames={s(1)}>
            <Slide src={(path + img) as string} />
          </Series.Sequence>
        ))}
      </Series>
    </AbsoluteFill>
  );
}
