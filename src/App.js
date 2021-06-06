import "./styles.scss";
import { Stage, Layer, Circle } from "react-konva";
import Image from "./components/Image";
export default function App() {
  return (
    <>
      <button>Add Image</button>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        style={{ backgroundImage: 'url( "/background.png")' }}
      >
        <Layer>
          <Image url="https://konvajs.org/assets/yoda.jpg" />
        </Layer>
      </Stage>
    </>
  );
}
