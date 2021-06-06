import useImage from "use-image";
import { Image, Text } from "react-konva";
import React from "react";

export default function Index({ url, ...rest }) {
  let [image] = useImage(url);

  if (image) return <Image {...rest} image={image} />;
  else {
    return <Text text="loading..." />;
  }
}
