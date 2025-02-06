import { useTab } from "@/context/TabContext";
import { useEffect } from "react";
import { Text } from "react-native";
import { useNavigation } from "expo-router";

export default function Profil() {
  const { setCurrentTab } = useTab();
  const navigation = useNavigation();

  useEffect(() => {
    setCurrentTab("profile");

    const unsubscribe = navigation.addListener("beforeRemove", () => {
      setCurrentTab("home");
    });

    return unsubscribe;
  }, []);

  return <Text>Profil</Text>;
}
