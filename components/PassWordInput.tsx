import { View, StyleSheet, TextInput as DefaultTextInput } from "react-native";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

interface PassWordInputProps {
  setPassword: any;
  password: string;
}

function PassWordInput({ setPassword, password }: PassWordInputProps) {
  const [state, setState] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        <DefaultTextInput
          style={styles.textInput}
          onChangeText={(e) => setPassword(e)}
          value={password}
          secureTextEntry={secureTextEntry}
          placeholder="Password"
        />
        <View style={styles.icon}>
          {secureTextEntry ? (
            <FontAwesome
              onPress={() => setSecureTextEntry(!secureTextEntry)}
              name="eye"
              color="green"
              size={22}
            />
          ) : (
            <FontAwesome
              onPress={() => setSecureTextEntry(!secureTextEntry)}
              name="eye-slash"
              color="green"
              size={22}
            />
          )}
        </View>
      </View>
    </View>
  );
}

export default PassWordInput;

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
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "green",
    borderStyle: "solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "white",
  },
  textInput: {
    width: "78%",
    height: "90%",
    fontSize: 18,
  },
  icon: {
    width: "15%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
