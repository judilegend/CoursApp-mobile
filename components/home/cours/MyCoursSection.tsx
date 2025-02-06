import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import MyCourseItem from "./MyCourseItem";
import { mockMyCourseData } from "../mockData";
import { colorHome } from "@/constants/themeHome";
import { Ionicons } from "@expo/vector-icons";

const MyCourseSection: React.FC = () => {
  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Learning Path</Text>
        <Text style={styles.subtitle}>Continue where you left off</Text>
      </View>
      <TouchableOpacity style={styles.filterButton}>
        <Ionicons name="filter" size={20} color={colorHome.textSecondary} />
        <Text style={styles.filterText}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      {renderHeader()}

      <FlatList
        data={mockMyCourseData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <MyCourseItem data={item} />}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.courseGrid}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true} //  Active le scroll imbriqué
      />
    </View>
  );
};

const styles = StyleSheet.create({
  //style du header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colorHome.textSecondary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 8,
    borderRadius: 20,
    gap: 4,
  },
  filterText: {
    fontSize: 14,
    color: colorHome.textSecondary,
    fontWeight: "500",
  },
  progressContainer: {
    marginBottom: 24,
    backgroundColor: "#f8f9fa",
    padding: 16,
    borderRadius: 12,
  },
  progressInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  progressText: {
    fontSize: 16,
    fontWeight: "600",
    color: colorHome.textSecondary,
  },
  progressPercentage: {
    fontSize: 16,
    fontWeight: "700",
    color: "#4CAF50",
  },
  progressBar: {
    height: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#4CAF50",
    borderRadius: 4,
  },
  container: {
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
  courseGrid: {
    paddingBottom: 20, // Pour éviter que le dernier élément soit coupé
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
});

export default MyCourseSection;
