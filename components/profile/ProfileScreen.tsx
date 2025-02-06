import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = () => {
  const renderProfileHeader = () => (
    <View style={styles.header}>
      <Image
        source={{ uri: "https://your-profile-image-url.com" }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.role}>Software Developer</Text>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Courses</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>85%</Text>
          <Text style={styles.statLabel}>Completion</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>4</Text>
          <Text style={styles.statLabel}>Certificates</Text>
        </View>
      </View>
    </View>
  );

  const renderMenuItem = (icon: string, title: string, subtitle: string) => (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.menuIcon}>
        <Ionicons name={icon as any} size={24} color="#0f6b76" />
      </View>
      <View style={styles.menuContent}>
        <Text style={styles.menuTitle}>{title}</Text>
        <Text style={styles.menuSubtitle}>{subtitle}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#999" />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {renderProfileHeader()}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Learning</Text>
        {renderMenuItem(
          "book-outline",
          "My Courses",
          "View your enrolled courses"
        )}
        {renderMenuItem(
          "trophy-outline",
          "Achievements",
          "View your certificates"
        )}
        {renderMenuItem(
          "time-outline",
          "Learning History",
          "Track your progress"
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        {renderMenuItem(
          "person-outline",
          "Edit Profile",
          "Update your information"
        )}
        {renderMenuItem("settings-outline", "Settings", "App preferences")}
        {renderMenuItem(
          "help-circle-outline",
          "Help & Support",
          "Get assistance"
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#f8f9fa",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 4,
    borderColor: "#fff",
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  role: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  statItem: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: "#ddd",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "700",
    color: "#F59E0B",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 122, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  menuSubtitle: {
    fontSize: 14,
    color: "#666",
  },
});

export default ProfileScreen;
