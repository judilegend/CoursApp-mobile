import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, StyleSheet } from "react-native";
import { CourseHeader } from "@/components/details/CourseHeader";
import CourseCard from "@/components/details/CourseCard";
import CourseList from "@/components/details/CoursList";
import { useCourseContext } from "@/context/CourseContext";

export default function CourseDetailScreen() {
  const { id } = useLocalSearchParams();
  const { selectedCourse } = useCourseContext();

  if (!selectedCourse) return null;

  return (
    <View style={styles.container}>
      <CourseHeader course={selectedCourse} />
      <CourseCard course={selectedCourse} />
      <CourseList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
