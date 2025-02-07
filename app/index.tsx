import { View } from "react-native";
import { SplashScreen } from "@/components/splash/SplashScreen";
import { StatusBar } from "expo-status-bar";

export default function SplashScreenPage() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar style="dark" />
      <SplashScreen />
    </View>
  );
}
