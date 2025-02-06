import MyCourseSection from "@/components/home/cours/MyCoursSection";
import { useTab } from "@/context/TabContext";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

const Cours = () => {
  const { setCurrentTab } = useTab();

  const navigation = useNavigation();

  useEffect(() => {
    setCurrentTab("book");

    const unsubscribe = navigation.addListener("beforeRemove", () => {
      setCurrentTab("home");
    });

    return unsubscribe;
  }, []);
  return (
    <View>
      <MyCourseSection />
    </View>
  );
};
export default Cours;
