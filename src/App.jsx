import "./styles.scss";
import { Stage, Layer } from "react-konva";
import Image from "./components/Image";
import { useState } from "react";
export default function App() {
  const [images, setImages] = useState([]);
  function addImage(obj) {
    const copied = [...images];
    copied.push(obj);
    setImages(copied);
  }
  function handleFile(e) {
    const [file] = e.target.files;
    const url = URL.createObjectURL(file);
    addImage({ url, width: 200, height: 200 });
  }

  return (
    <>
      <input type="file" onChange={handleFile}></input>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        style={{ backgroundImage: 'url( "/background.png")' }}
      >
        <Layer>
          {images.map(({ ...rest }) => {
            return <Image {...rest} draggable />;
          })}
        </Layer>
      </Stage>
    </>
  );
}
