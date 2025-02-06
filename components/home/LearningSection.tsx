import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import WatchingItem from "./watchsection/WatchingItem";
import MyCourseSection from "./cours/MyCoursSection";
import { LearningSection as LearningSectionProps } from "../../types";
import { mockWatchingData } from "./mockData";
import { colorHome } from "@/constants/themeHome";

const { width } = Dimensions.get("window");

const LearningSection: React.FC<LearningSectionProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>My Learning Journey</Text>
      <Text style={styles.headerSubtitle}>Continue where you left off</Text>

      {/* Continue Watching Section */}
      <View style={styles.watchingSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Continue Watching</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <FlatList
          horizontal
          data={mockWatchingData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <WatchingItem data={item} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.watchingList}
        />
      </View>

      {/* My Course Section */}
      <MyCourseSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f8f9fa",
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colorHome.primary,
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "rgba(255,255,255,0.8)",
  },
  watchingSection: {
    marginTop: -20,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: colorHome.textSecondary,
  },
  seeAll: {
    fontSize: 14,
    color: "#4c669f",
    fontWeight: "500",
  },
  watchingList: {
    paddingVertical: 8,
  },
});

export default LearningSection;
