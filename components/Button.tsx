import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Text } from "./Themed";

function Button({ callback, loading }: any) {
  return !loading ? (
    <View style={styles.container}>
      <View onTouchStart={callback} style={styles.containerInner}>
        <Text style={styles.text}>Continue</Text>
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.containerInnerLoader}>
        <ActivityIndicator size="large" color="white" />
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
  containerInnerLoader: {
    width: 90,
    height: 60,
    backgroundColor: "green",
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});
