import { colorHome } from "../../../constants/themeHome";
import React from "react";
import { StyleSheet } from "react-native";
import { Image, Text } from "react-native";
import { View } from "react-native";
export const WhatTodoSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>What Do You Want To Learn?</Text>
        <View style={styles.containerImage}>
          <Image
            style={styles.image2}
            source={require("../../../assets/images/Eclipse.png")}
          />
          <Image
            source={require("../../../assets/images/Group 45.png")}
            style={styles.image1}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 7,
    overflow: "hidden",
    backgroundColor: colorHome.bgnav,
    marginHorizontal: 12,
    borderRadius: 15,
    padding: 3,
    position: "relative",
    height: 200,
  },
  sectionHeader: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 38,
    fontWeight: "bold",
    color: colorHome.light,
    paddingVertical: 1,
  },
  //style image section
  containerImage: {
    flexDirection: "row",
  },
  image1: {
    right: 0,
    width: 150,
    height: 150,
    position: "absolute",
    top: -38,
  },
  image2: {
    overflow: "hidden",
    position: "absolute",
    left: -60,
    top: 80,
    // width: 150,
    // height: 150,
  },
});
