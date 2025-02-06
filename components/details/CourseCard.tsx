import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Course } from "@/types/course";

type CourseCardProps = {
  course: Course;
};

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: course.image }} style={styles.courseImage} />
      <View style={styles.textContainer}>
        <Text style={styles.courseTitle}>{course.title}</Text>
        <Text style={styles.courseMeta}>
          {course.description} | ⭐ {course.rating}
        </Text>
        <Text style={styles.courseDescription}>{course.description}</Text>
        <TouchableOpacity style={styles.enrollButton}>
          <Text style={styles.enrollButtonText}>Enroll Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  courseImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  textContainer: {
    marginTop: 8,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  courseMeta: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
  courseDescription: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
  enrollButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 4,
    marginTop: 8,
    alignItems: "center",
  },
  enrollButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CourseCard;
