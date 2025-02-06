import { useTab } from "@/context/TabContext";
import { useEffect } from "react";
import { View } from "react-native";
import ProfileScreen from "@/components/profile/ProfileScreen";
import { useNavigation } from "expo-router";

export default function Profile() {
  const { setCurrentTab } = useTab();
  const navigation = useNavigation();

  useEffect(() => {
    setCurrentTab("profile");

    const unsubscribe = navigation.addListener("beforeRemove", () => {
      setCurrentTab("home");
    });

    return unsubscribe;
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ProfileScreen />
    </View>
  );
}
