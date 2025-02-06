import { StyleSheet, Dimensions } from "react-native";
import { colorHome } from "../constants/themeHome";

const { width } = Dimensions.get("window");

export const featureCardStyles = StyleSheet.create({
  card: {
    width: width * 0.8,
    height: 240,
    marginRight: 16,
    backgroundColor: colorHome.light,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: colorHome.dark,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 7,
    elevation: 1,
    marginVertical: 8,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colorHome.textPrimary,
    marginBottom: 6,
    letterSpacing: 0.3,
  },
  description: {
    fontSize: 15,
    color: colorHome.textSecondary,
    lineHeight: 20,
  },
});

export const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorHome.grey,
  },
  blurView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 24,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: colorHome.textWelcome,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: colorHome.textSecondary,
    lineHeight: 22,
  },
  scrollViewContainer: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  navigationContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colorHome.light,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: colorHome.dark,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 8,
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    paddingHorizontal: 20,
  },

  //contenu de top section
  // content: {
  //   flexDirection: "row",
  //   justifyContent: "space-evenly",
  //   alignContent: "center",
  // },
  iconStyleTop: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});
