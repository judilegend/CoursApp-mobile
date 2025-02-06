import React from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";
import { filterCategories } from "@/constants/categorieFilter";
import { colorHome } from "@/constants/themeHome";

interface CategorieFilterProps {
  activeFilters: string[];
  onFilterToggle: (filterId: string) => void;
}

export const CategorieFilter: React.FC<CategorieFilterProps> = ({
  activeFilters,
  onFilterToggle,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.filterContainer}
    >
      {filterCategories.map((filter) => (
        <TouchableOpacity
          key={filter.id}
          style={[
            styles.filterButton,
            activeFilters.includes(filter.id) && styles.filterButtonActive,
          ]}
          onPress={() => onFilterToggle(filter.id)}
        >
          <Text
            style={[
              styles.filterText,
              activeFilters.includes(filter.id) && styles.filterTextActive,
            ]}
          >
            {filter.label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colorHome.primary,
    marginRight: 8,
    backgroundColor: "transparent",
  },
  filterButtonActive: {
    backgroundColor: colorHome.primary,
  },
  filterText: {
    fontSize: 14,
    color: colorHome.primary,
    fontWeight: "500",
  },
  filterTextActive: {
    color: "#FFFFFF",
  },
});
