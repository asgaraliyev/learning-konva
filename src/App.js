import "./styles.scss";
import { Stage, Layer, Circle } from "react-konva";
import Image from "./components/Image";
export default function App() {
  function handleFile(e) {}
  return (
    <>
      <input type="file" onChange={handleFile}></input>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        style={{ backgroundImage: 'url( "/background.png")' }}
      >
        <Layer>
          <Image url="https://konvajs.org/assets/yoda.jpg" draggable />
          <Image url="https://konvajs.org/assets/yoda.jpg" draggable />
        </Layer>
      </Stage>
    </>
  );
}
