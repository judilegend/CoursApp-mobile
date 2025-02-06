import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Course } from "@/types/course";
import { colorHome } from "@/constants/themeHome";

type CourseCardProps = {
  course: Course;
};

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About this course</Text>
        <Text style={styles.description}>{course.description}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What you'll learn</Text>
        <View style={styles.learningPoints}>
          {["Point 1", "Point 2", "Point 3"].map((point, index) => (
            <View key={index} style={styles.point}>
              <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
              <Text style={styles.pointText}>{point}</Text>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.enrollButton}>
        <Text style={styles.enrollButtonText}>Enroll Now</Text>
        <Ionicons name="arrow-forward" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666",
  },
  learningPoints: {
    gap: 12,
  },
  point: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  pointText: {
    fontSize: 16,
    color: "#444",
    flex: 1,
  },
  enrollButton: {
    flexDirection: "row",
    backgroundColor: colorHome.primary,
    padding: 16,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginTop: 8,
  },
  enrollButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default CourseCard;
