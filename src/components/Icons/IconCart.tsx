import React, { FC } from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { IconProps } from "./Icons";

const IconCart:FC<IconProps> = ({size=24}) => {
  return (
    <Svg
    width={size}
    height={size}
    strokeWidth={2}
    fill="none"
    viewBox={`0 0 ${size} ${size}`}
    stroke="currentColor"
  >
    <Circle cx={9} cy={21} r={1} />
    <Circle cx={20} cy={21} r={1} />
    <Path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </Svg>
  );
}

export default IconCart;
