import { Animated } from "react-native";

export interface SplashAnimationProps {
  scaleValue: Animated.Value;
  fadeValue: Animated.Value;
  slideValue: Animated.Value;
  rotateValue: Animated.Value;
  iconScaleValues: Animated.Value[];
}

export interface IconProps {
  name: string;
  color: string;
  index: number;
  scaleValue: Animated.Value;
}
