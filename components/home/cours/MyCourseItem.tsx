import React, { memo } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MyCourseItemProps } from "../../../types/";
import { useRouter } from "expo-router";
import { useCourseContext } from "@/context/CourseContext";

const { width } = Dimensions.get("window");
const colum_url = (width - 48) / 2; // 48 = padding horizontal total (16 * 2 + gap 16)

const MyCourseItem: React.FC<MyCourseItemProps> = ({ data }) => {
  const router = useRouter();
  const { setSelectedCourse } = useCourseContext();

  const handlePress = () => {
    if (data) {
      setSelectedCourse(data);
      router.push(`/course/${data.id}`);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image
        source={
          typeof data?.imageUrl === "string"
            ? { uri: data.imageUrl }
            : data.imageUrl // Utilisation d'une image par défaut
        }
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>Design</Text>
        </View>
        <Text style={styles.title} numberOfLines={2}>
          {data?.title ?? "Untitled Course"}
        </Text>

        <View style={styles.statsContainer}>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.rating}>
              {data?.rating ? data.rating.toFixed(1) : "0.0"}
            </Text>
          </View>

          <View style={styles.lessonInfo}>
            <Ionicons name="book-outline" size={14} color="#666" />
            <Text style={styles.lessonText}>12 lessons</Text>
          </View>
        </View>

        <View style={styles.progressContainer}>
          <View
            style={[styles.progressBar, { width: `${data?.progress || 0}%` }]}
          />
        </View>
        <Text style={styles.progressText}>
          {data?.progress ? `${data.progress}% completed` : "0% completed"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: colum_url,
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 120,
    backgroundColor: "#f0f0f0",
  },
  content: {
    padding: 12,
  },
  categoryBadge: {
    backgroundColor: "#E3F2FD",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  categoryText: {
    color: "#1976D2",
    fontSize: 12,
    fontWeight: "500",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 8,
    lineHeight: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  rating: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  lessonInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  lessonText: {
    fontSize: 12,
    color: "#666",
  },
  progressContainer: {
    height: 4,
    backgroundColor: "#f0f0f0",
    borderRadius: 2,
    marginBottom: 8,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#4CAF50",
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    color: "#666",
    textAlign: "right",
  },
});

export default memo(MyCourseItem);
