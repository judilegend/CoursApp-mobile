import React, { useEffect } from "react";
import { View, Text, Animated } from "react-native";
import { useRouter } from "expo-router";
import { useSplashAnimation } from "../../hook/useSplashAnimation";
import { styles } from "../../styles/splash.styles";

export const SplashScreen: React.FC = () => {
  const router = useRouter();
  const animationProps = {
    scaleValue: new Animated.Value(0),
    fadeValue: new Animated.Value(0),
    slideValue: new Animated.Value(-50),
    rotateValue: new Animated.Value(0),
    iconScaleValues: [],
  };

  const handleAnimationComplete = () => {
    router.replace("/onBoarding"); // Redirige vers l'onboarding
  };

  useSplashAnimation(animationProps, handleAnimationComplete);

  const spin = animationProps.rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            opacity: animationProps.fadeValue,
            transform: [
              { scale: animationProps.scaleValue },
              { translateY: animationProps.slideValue },
            ],
          },
        ]}
      >
        <Animated.Image
          source={require("../../assets/images/logo (2).png")}
          style={[
            styles.logo,
            {
              transform: [
                { scale: animationProps.scaleValue },
                { rotate: spin },
              ],
            },
          ]}
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.progressContainer,
          {
            opacity: animationProps.fadeValue,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.progressBar,
            {
              transform: [{ scaleX: animationProps.scaleValue }],
            },
          ]}
        />
        <Text style={styles.loadingText}>Chargement...</Text>
      </Animated.View>
    </View>
  );
};
