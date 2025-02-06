import React from "react";
import { Animated } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { IconProps } from "../../types/animation.types";
import { styles } from "../../styles/splash.styles";

export const AnimatedIcon: React.FC<IconProps> = ({
  name,
  color,
  index,
  scaleValue,
}) => (
  <Animated.View
    style={{
      transform: [{ scale: scaleValue }],
    }}
  >
    <MaterialIcons
      name={"home-filled"}
      size={28}
      color={color}
      //   style={styles.icon}
    />
  </Animated.View>
);
