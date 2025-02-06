import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MyCourseItem from "./MyCourseItem";
import { mockMyCourseData } from "../mockData";
import { colorHome } from "@/constants/themeHome";

const MyCourseSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>My Courses</Text>
      </View>
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
