import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  currentIndex: number;
  dataLength: number;
  onPress: () => void;
};

export function CustomButton({ currentIndex, dataLength, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>
        {currentIndex === dataLength - 1 ? "Commencer" : "Continuer"}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#087E8B",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 30,
    marginBottom: 40,
    marginHorizontal: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
});
