import { View, StyleSheet, TextInput as DefaultTextInput } from "react-native";
import { useState } from "react";

interface TextInputProps {
  username: string;
  setUsername: any;
}

function TextInput({ username, setUsername }: TextInputProps) {
  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        <DefaultTextInput
          style={styles.textInput}
          onChangeText={(e) => setUsername(e)}
          value={username}
          placeholder="Username"
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
