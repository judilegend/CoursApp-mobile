import { Ionicons } from "@expo/vector-icons";

export type IconNames = keyof typeof Ionicons.glyphMap;

export interface FeatureCardProps {
  icon: IconNames;
  title: string;
  description: string;
  onPress: () => void;
  color: string;
}
export type ScreenPaths =
  | "/thematique"
  | "/dashboard"
  | "/notifications"
  | "/settings";

export interface Feature extends Omit<FeatureCardProps, "onPress"> {
  screen: ScreenPaths;
}
