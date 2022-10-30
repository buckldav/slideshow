import { AbsoluteFill, Img, staticFile } from "remotion";
import "./slide.css";

export default function Slide({ src }: { src: string }) {
  return (
    <AbsoluteFill>
      <Img src={staticFile(src)} />
    </AbsoluteFill>
  );
}
