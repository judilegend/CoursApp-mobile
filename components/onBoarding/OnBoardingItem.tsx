import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { OnboardingItemType } from "@/types/onBoarding";

type Props = {
  item: OnboardingItemType;
};

export function OnboardingItem({ item }: Props) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: 125,
    overflow: "hidden",
    backgroundColor: "#E6F4F1",
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontFamily: "SpaceMono",
    fontSize: 24,
    fontWeight: "700",
    color: "#1E1E1E",
    textAlign: "center",
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: "#62656B",
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 22,
  },
});
