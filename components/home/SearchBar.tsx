import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { SearchBarProps } from "../../types";

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Here"
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 64,
    paddingHorizontal: 12,
    fontSize: 16,
  },
});

export default SearchBar;
