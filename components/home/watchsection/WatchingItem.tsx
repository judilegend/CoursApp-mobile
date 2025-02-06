import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import { WatchingItemProps } from "../../../types";
import { VideoModal } from "./VideoModal";
import { colorHome } from "@/constants/themeHome";

const WatchingItem: React.FC<WatchingItemProps> = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePress = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={handlePress}
        activeOpacity={0.7}
      >
        <View style={styles.videoContainer}>
          <Video
            source={{ uri: data.videoUrl }}
            style={styles.video}
            useNativeControls={false}
            isLooping={false}
            shouldPlay={false}
          />
          <View style={styles.overlay}>
            <Ionicons name="play-circle" size={32} color="white" />
            <Text style={styles.duration}>{data.duration}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {data.title}
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {data.description}
          </Text>
        </View>
      </TouchableOpacity>

      <VideoModal
        isVisible={isModalVisible}
        videoUrl={data.videoUrl}
        onClose={() => setIsModalVisible(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    marginRight: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  videoContainer: {
    position: "relative",
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: "hidden",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: colorHome.textSecondary,
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    color: "#666",
    lineHeight: 16,
  },
  duration: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "rgba(0,0,0,0.75)",
    padding: 4,
    borderRadius: 4,
    color: "white",
    fontSize: 12,
  },
});

export default WatchingItem;
