import React from "react";
import Svg, { Circle, Path } from "react-native-svg"

const IconSearch = () => {
  return (
    <Svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
  >
    <Circle cx={11} cy={11} r={8} />
    <Path d="m21 21-4.35-4.35" />
  </Svg>
  );
}

export default IconSearch;
