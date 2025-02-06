import { StyleSheet } from "react-native";
import { colorHome } from "../constants/themeHome";

export const navItemStyles = StyleSheet.create({
  navItem: {
    alignItems: "center",
    paddingVertical: 8,
    minWidth: 80,
  },
  navItemActive: {
    backgroundColor: `${colorHome.primary}20`,
    borderRadius: 16,
    paddingHorizontal: 12,
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
    color: colorHome.textSecondary,
  },
  navTextActive: {
    color: colorHome.primary,
    fontWeight: "600",
  },
});
