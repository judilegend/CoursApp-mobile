import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import BottomNavigation from "./navigation/BottomNavigation";
import { homeScreenStyles } from "../../styles/featurecard.styles";
import { searchBarStyles } from "@/styles/searchbar.styles";
import LearningSection from "./LearningSection";
import { WhatTodoSection } from "./watchsection/WhatTodoSection";
import { CategorieFilter } from "./cours/CategorieCours";
import { useTab } from "@/context/TabContext";

const HomeScreen: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("home");
  const [activeFilters, setActiveFilters] = useState<string[]>(["1"]);
  //context pour le tab global
  const { currentTab, setCurrentTab } = useTab();

  const handleTabPress = (tab: string) => {
    setCurrentTab(tab);
    switch (tab) {
      case "home":
        router.push("/home");
        break;
      case "book":
        router.push("/cours");
        break;
      case "profile":
        router.push("/profil");
        break;
    }
  };

  const handleFilterToggle = (filterId: string) => {
    setActiveFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId]
    );
  };

  const renderHeader = () => (
    <>
      <View style={homeScreenStyles.header}>
        <View>
          <Text style={homeScreenStyles.headerTitle}>Bienvenue</Text>
          <Text style={homeScreenStyles.headerSubtitle}>
            Explorez et gérez votre apprentissage
          </Text>
        </View>
      </View>
      <View style={searchBarStyles.container}>
        <Ionicons
          name="search"
          size={20}
          color="#999"
          style={searchBarStyles.icon}
        />
        <TextInput
          style={searchBarStyles.input}
          placeholder="Rechercher..."
          placeholderTextColor="#999"
        />
      </View>
      <CategorieFilter
        activeFilters={activeFilters}
        onFilterToggle={handleFilterToggle}
      />
    </>
  );

  const renderContent = () => (
    <View>
      <WhatTodoSection />
      <LearningSection watchingData={[]} myCourseData={[]} />
    </View>
  );
  return (
    <View style={homeScreenStyles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <BlurView intensity={50} style={homeScreenStyles.blurView} />
        <FlatList
          data={[{}]}
          keyExtractor={(_, index) => index.toString()}
          renderItem={() => renderContent()}
          ListHeaderComponent={renderHeader}
        />
        <BottomNavigation activeTab={currentTab} onTabPress={handleTabPress} />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
