import { AbsoluteFill, Composition, Img, staticFile } from "remotion";
import "./slide.css";
import { CANVAS, FPS, secondsToFrames as s } from "../../data/config";

export default function Slide({ src }: { src: string }) {
  return (
    <AbsoluteFill>
      <Img src={staticFile(src)} style={{ objectFit: "contain" }} />
    </AbsoluteFill>
  );
}

// export default function Slide({ src }: { src: string }) {
//   return (
//     <Composition
//       durationInFrames={s(1)}
//       component={SlideComp}
//       defaultProps={{ src }}
//       width={CANVAS.width}
//       height={CANVAS.height}
//       id={src.replace(/\/|\.|_|~/g, "")}
//       fps={FPS}
//     />
//   );
// }
