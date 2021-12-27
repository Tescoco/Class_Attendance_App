import { StyleSheet, Image } from "react-native";
import Button from "../components/Button";
import PassWordInput from "../components/PassWordInput";
import TextInput from "../components/TextInput";

import { View } from "../components/Themed";
import { RootStackScreenProps } from "../types";

export default function LoginScreen({
  navigation,
}: RootStackScreenProps<"Login">) {
  const loginFunc = () => {
    navigation.replace("Root");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/FUNAAB_Logo.jpg")}
      />
      <TextInput />
      <PassWordInput />
      <Button callback={loginFunc} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
