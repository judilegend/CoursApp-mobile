import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import CourseCard from "./CourseCard";
import { courses } from "./data";

const CourseList: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CourseCard course={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f8f9fa",
    flex: 1,
  },
});

export default CourseList;
