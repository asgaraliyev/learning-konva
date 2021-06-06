import useImage from "use-image";
import { Image } from "react-konva";
import React from "react";
import GIF from "./GIF";
export default function Index({ url, ...rest }) {
  let [image] = useImage(url);

  if (image) return <Image {...rest} image={image} />;
  else {
    return <GIF src="/l.gif" />;
  }
}
