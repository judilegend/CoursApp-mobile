import { useEffect } from "react";
import { Animated, Easing } from "react-native";
import { SplashAnimationProps } from "../types/animation.types";

export const useSplashAnimation = (
  props: SplashAnimationProps,
  onComplete: () => void
) => {
  useEffect(() => {
    const runAnimation = Animated.sequence([
      Animated.parallel([
        Animated.timing(props.scaleValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.elastic(1),
          useNativeDriver: true,
        }),
        Animated.timing(props.rotateValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(props.fadeValue, {
          toValue: 1,
          duration: 800,
          easing: Easing.bounce,
          useNativeDriver: true,
        }),
        Animated.spring(props.slideValue, {
          toValue: 0,
          friction: 4,
          tension: 20,
          useNativeDriver: true,
        }),
      ]),
      ...props.iconScaleValues.map((anim, index) =>
        Animated.timing(anim, {
          toValue: 1,
          duration: 200,
          delay: index * 100,
          easing: Easing.bounce,
          useNativeDriver: true,
        })
      ),
    ]);

    runAnimation.start();

    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(props.fadeValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(props.scaleValue, {
          toValue: 1.2,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(onComplete);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
};
