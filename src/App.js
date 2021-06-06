import "./styles.scss";
import { Stage, Layer, Circle } from "react-konva";
export default function App() {
  return (
    <>
      <button>Add Image</button>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        style={{ backgroundImage: 'url( "/background.png")' }}
      ></Stage>
    </>
  );
}
