import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from "react-native";
import {
  Cours,
  ProgressBarProps,
  StatsCardProps,
  CoursCardProps,
} from "../../types/dashboard.types";

// Données simulées des cours
const coursData: Cours[] = [
  {
    id: 1,
    titre: "Mathématiques",
    progression: 75,
    prochainCours: "2024-11-25",
    totalHeures: 30,
    heuresComplétées: 22,
  },
  {
    id: 2,
    titre: "Physique",
    progression: 60,
    prochainCours: "2024-11-24",
    totalHeures: 25,
    heuresComplétées: 15,
  },
  {
    id: 3,
    titre: "Informatique",
    progression: 40,
    prochainCours: "2024-11-23",
    totalHeures: 40,
    heuresComplétées: 16,
  },
];

//  Composant ProgressBar
const ProgressBar: React.FC<ProgressBarProps> = ({ progression }) => (
  <View style={styles.progressContainer}>
    <View style={[styles.progressBar, { width: `${progression}%` }]} />
  </View>
);

//  Composant StatsCard
const StatsCard: React.FC<StatsCardProps> = ({ label, value }) => (
  <View style={styles.statsCard}>
    <Text style={styles.statsLabel}>{label}</Text>
    <Text style={styles.statsValue}>{value}</Text>
  </View>
);

// Composant CoursCard
const CoursCard: React.FC<CoursCardProps> = ({ cours }) => (
  <View style={styles.card}>
    <Text style={styles.titre}>{cours.titre}</Text>
    <ProgressBar progression={cours.progression} />
    <Text style={styles.progression}>{cours.progression}% complété</Text>
    <View style={styles.detailsContainer}>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Prochain cours</Text>
        <Text style={styles.detailValue}>{cours.prochainCours}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Heures complétées</Text>
        <Text style={styles.detailValue}>
          {cours.heuresComplétées}/{cours.totalHeures}h
        </Text>
      </View>
    </View>
  </View>
);

//  Composant principal Dashboard
const Dashboard: React.FC = () => {
  const progressionMoyenne = Math.round(
    coursData.reduce((acc, curr) => acc + curr.progression, 0) /
      coursData.length
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Tableau de Bord des Cours</Text>
      <ScrollView>
        <View style={styles.statsContainer}>
          <StatsCard label="Cours en cours" value={coursData.length} />
          <StatsCard
            label="Progression moyenne"
            value={`${progressionMoyenne}%`}
          />
        </View>
        {coursData.map((cours) => (
          <TouchableOpacity key={cours.id}>
            <CoursCard cours={cours} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 40,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  statsCard: {
    width: "48%",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  statsLabel: {
    fontSize: 14,
    color: "#666",
  },
  statsValue: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  titre: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  progressContainer: {
    height: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    marginBottom: 5,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
  progression: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailItem: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 12,
    color: "#666",
  },
  detailValue: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Dashboard;
