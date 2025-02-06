import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Course } from "@/types/course";

type CourseDetailsProps = {
  course: Course;
};

export const CourseDetails: React.FC<CourseDetailsProps> = ({ course }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Course Content</Text>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Ionicons name="book-outline" size={24} color="#666" />
            <Text style={styles.statText}>12 Chapters</Text>
          </View>
          <View style={styles.stat}>
            <Ionicons name="time-outline" size={24} color="#666" />
            <Text style={styles.statText}>6.5 Hours</Text>
          </View>
          <View style={styles.stat}>
            <Ionicons name="document-outline" size={24} color="#666" />
            <Text style={styles.statText}>Certificate</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Course Chapters</Text>
        {[1, 2, 3].map((chapter) => (
          <TouchableOpacity key={chapter} style={styles.chapterCard}>
            <View style={styles.chapterHeader}>
              <View style={styles.chapterInfo}>
                <Text style={styles.chapterTitle}>Chapter {chapter}</Text>
                <Text style={styles.chapterDuration}>25 min</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#666" />
            </View>
            <Text style={styles.chapterDescription}>
              Learn the fundamentals of chapter {chapter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Requirements</Text>
        {[
          "Basic programming knowledge",
          "Computer with internet",
          "Dedication to learn",
        ].map((req, index) => (
          <View key={index} style={styles.requirementItem}>
            <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
            <Text style={styles.requirementText}>{req}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
    color: "#1a1a1a",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  stat: {
    alignItems: "center",
    gap: 8,
  },
  statText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  chapterCard: {
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  chapterHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  chapterInfo: {
    flex: 1,
  },
  chapterTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  chapterDuration: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  chapterDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  requirementItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  requirementText: {
    fontSize: 16,
    color: "#444",
    flex: 1,
  },
});
