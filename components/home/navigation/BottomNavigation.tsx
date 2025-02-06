import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colorHome } from "../../../constants/themeHome";

interface BottomNavigationProps {
  activeTab: string;
  onTabPress: (tab: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabPress,
}) => {
  const navigationItems = [
    { id: "home", icon: "home", label: "Accueil" },
    { id: "book", icon: "book", label: "Cours" },
    { id: "profile", icon: "person", label: "Profil" },
  ] as const;

  return (
    <View style={styles.container}>
      {navigationItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.tabButton}
          onPress={() => onTabPress(item.id)}
          activeOpacity={0.7}
        >
          <View
            style={[
              styles.iconContainer,
              activeTab === item.id && styles.activeIconContainer,
            ]}
          >
            <Ionicons
              name={`${item.icon}${activeTab === item.id ? "" : "-outline"}`}
              size={24}
              color={activeTab === item.id ? "#FAAF3A" : colorHome.light}
            />
          </View>
          <Text
            style={[styles.label, activeTab === item.id && styles.activeLabel]}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colorHome.bgnav,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: colorHome.dark,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: Platform.OS === "ios" ? 24 : 12,
  },
  tabButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  activeIconContainer: {
    backgroundColor: "rgba(250, 175, 58, 0.2)",
  },
  label: {
    fontSize: 12,
    color: colorHome.light,
    fontWeight: "500",
  },
  activeLabel: {
    color: "#FAAF3A",
    fontWeight: "600",
  },
});

export default BottomNavigation;
