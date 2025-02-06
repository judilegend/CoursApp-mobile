// components/onboarding/Paginator.tsx
import { View, Animated, StyleSheet, useWindowDimensions } from "react-native";
import { OnboardingItemType } from "@/types/onboarding";

type Props = {
  data: OnboardingItemType[];
  scrollX: Animated.Value;
};

export function Paginator({ data, scrollX }: Props) {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        // Calcul de la plage d'entrée pour l'animation
        const inputRange = [
          (i - 1) * width, // Page précédente
          i * width, // Page actuelle
          (i + 1) * width, // Page suivante
        ];

        // Animation de la largeur du point
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 16, 8], // 8px par défaut, 16px pour le point actif
          extrapolate: "clamp",
        });

        // Animation de l'opacité
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3], // 30% d'opacité pour les points inactifs
          extrapolate: "clamp",
        });

        // Animation de la couleur (optionnelle)
        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ["#CBD5E1", "#087E8B", "#CBD5E1"],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={`dot-${i}`}
            style={[
              styles.dot,
              {
                width: dotWidth,
                opacity,
                backgroundColor,
              },
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 64,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});
