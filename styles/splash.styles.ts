import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../constants/theme";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  gradientContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logoContainer: {
    width: width * 0.85,
    padding: 30,
    backgroundColor: "#0f6b76",
    borderRadius: 25,
    alignItems: "center",
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 15,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  logo: {
    width: width * 0.35,
    height: width * 0.35,
    resizeMode: "contain",
    marginBottom: 20,
  },
  contentContainer: {
    width: "100%",
    alignItems: "center",
    paddingTop: 10,
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "white",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 8,
    textShadowColor: "rgba(18, 130, 144, 0.2)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: COLORS.secondary,
    textAlign: "center",
    fontWeight: "500",
    marginBottom: 25,
    letterSpacing: 0.5,
  },
  featuresContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 15,
    paddingHorizontal: 10,
  },
  featureItem: {
    alignItems: "center",
    width: width * 0.22,
  },
  featureIcon: {
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 4,
  },
  featureText: {
    fontSize: 12,
    color: COLORS.primary,
    textAlign: "center",
    fontWeight: "600",
  },
  progressContainer: {
    alignItems: "center",
    marginTop: 40,
    width: "100%",
  },
  progressBar: {
    width: width * 0.7,
    height: 4,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  loadingText: {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 1,
    marginTop: 8,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(18, 130, 144, 0.1)",
  },
});
