import {
  View,
  Animated,
  FlatList,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { OnboardingItem } from "@/components/onBoarding/OnBoardingItem";
import { Paginator } from "@/components/onBoarding/Paginator";
import { CustomButton } from "@/components/onBoarding/CustomButton";
import { onboarding_data } from "@/constants/onBoarding";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardingScreen() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);
  const { width } = useWindowDimensions();

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems[0]) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = (index: number) => {
    if (slidesRef.current) {
      slidesRef.current.scrollToIndex({ index });
    }
  };

  const handleNext = () => {
    if (currentIndex < onboarding_data.length - 1) {
      scrollTo(currentIndex + 1);
    } else {
      router.push("/login");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.flatListContainer}>
        <FlatList
          data={onboarding_data}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
          snapToInterval={width}
          decelerationRate="fast"
        />
      </View>
      <Paginator data={onboarding_data} scrollX={scrollX} />
      <CustomButton
        currentIndex={currentIndex}
        dataLength={onboarding_data.length}
        onPress={handleNext}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  flatListContainer: {
    flex: 3,
  },
});
