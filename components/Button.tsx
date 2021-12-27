import { View, StyleSheet } from "react-native";
import { Text } from "./Themed";

function Button({ callback }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        <Text onPress={callback} style={styles.text}>
          Continue
        </Text>
      </View>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  containerInner: {
    width: 150,
    height: 60,
    backgroundColor: "green",
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
  },
});
