import { View, StyleSheet, TextInput as DefaultTextInput } from "react-native";
import { useState } from "react";

function TextInput() {
  const [state, setState] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        <DefaultTextInput
          style={styles.textInput}
          onChangeText={(e) => setState(e)}
          value={state}
          placeholder="Email"
        />
      </View>
    </View>
  );
}

export default TextInput;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "97%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  containerInner: {
    width: "100%",
    height: "70%",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "green",
    borderStyle: "solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "93%",
    height: "90%",
    fontSize: 18,
  },
});
