import { StyleSheet } from "react-native";
import { colorHome } from "../constants/themeHome";

export const homeStyles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  featuresGrid: {
    marginTop: 16,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 12,
    backgroundColor: colorHome.light,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: colorHome.dark,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
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
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colorHome.light,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 8,
    shadowColor: colorHome.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: colorHome.textPrimary,
    paddingVertical: 8,
  },
  clearButton: {
    padding: 4,
  },
});
