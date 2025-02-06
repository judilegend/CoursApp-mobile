import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Animated,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useSplashAnimation } from "../../hook/useSplashAnimation";
import { styles } from "../../styles/splash.styles";
import { COLORS, ICONS } from "../../constants/theme";
import { useRouter } from "expo-router";

export const SplashScreen: React.FC = () => {
  const router = useRouter();
  const animationProps = {
    scaleValue: new Animated.Value(0),
    fadeValue: new Animated.Value(0),
    slideValue: new Animated.Value(-50),
    rotateValue: new Animated.Value(0),
    iconScaleValues: ICONS.map(() => new Animated.Value(0)),
  };

  const handleAnimationComplete = () => {
    router.push("/login");
  };

  useSplashAnimation(animationProps, handleAnimationComplete);

  const spin = animationProps.rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    // <ImageBackground
    //   source={require("../../assets/images/backhome.jpg")}
    //   style={styles.background}
    //   blurRadius={15}
    // >
    <LinearGradient
      colors={["rgba(18, 130, 144, 0.2)", "rgba(49, 208, 221, 0.1)"]}
      style={styles.gradientContainer}
    >
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.logoContainer,
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
            source={require("../../assets/images/logo.png")}
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

          <Animated.View
            style={[
              styles.contentContainer,
              {
                opacity: animationProps.fadeValue,
                transform: [{ translateY: animationProps.slideValue }],
              },
            ]}
          >
            <Text style={styles.welcomeTitle}>App-Learning</Text>
            <Text style={styles.welcomeSubtitle}>
              Votre plateforme d'apprentissage mobile
            </Text>

            <View style={styles.featuresContainer}>
              {ICONS.map((icon, index) => (
                <Animated.View
                  key={icon.name}
                  style={[
                    styles.featureItem,
                    {
                      transform: [
                        { scale: animationProps.iconScaleValues[index] },
                      ],
                    },
                  ]}
                >
                  <MaterialIcons
                    //   name={icon.name}
                    size={32}
                    color={icon.color}
                    style={styles.featureIcon}
                  />
                  {/* <Text style={styles.featureText}>{icon.label}</Text> */}
                </Animated.View>
              ))}
            </View>
          </Animated.View>
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
    </LinearGradient>
    // </ImageBackground>
  );
};
