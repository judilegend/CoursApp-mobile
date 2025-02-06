import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, StyleSheet, ScrollView, StatusBar } from "react-native";
import { CourseHeader } from "@/components/details/CourseHeader";
import CourseCard from "@/components/details/CourseCard";
import { CourseDetails } from "@/components/details/CourseDetails";
import { useCourseContext } from "@/context/CourseContext";

export default function CourseDetailScreen() {
  const { id } = useLocalSearchParams();
  const { selectedCourse } = useCourseContext();

  if (!selectedCourse) return null;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <CourseHeader course={selectedCourse} />
        <View style={styles.content}>
          <CourseCard course={selectedCourse} />
          <CourseDetails course={selectedCourse} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
});
