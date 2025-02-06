import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import { colorHome } from "@/constants/themeHome";
import { Course } from "@/types/course";
type courseHeaderProps = {
  course: Course;
};
export const CourseHeader: React.FC<courseHeaderProps> = ({ course }) => {
  return (
    <View style={styles.header}>
      <Image
        source={
          typeof course.imageUrl === "string"
            ? { uri: course.imageUrl }
            : course.imageUrl
        }
        style={styles.courseImage}
      />
      <View style={styles.overlay}>
        <Text style={styles.title}>{course.title}</Text>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Ionicons name="star" size={20} color="#FFD700" />
            <Text style={styles.statText}>{course.rating}</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="time-outline" size={20} color="#fff" />
            <Text style={styles.statText}>10 hours</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 250,
    position: "relative",
  },
  courseImage: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  statsRow: {
    flexDirection: "row",
    gap: 16,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  statText: {
    color: "#fff",
    fontSize: 16,
  },
});
