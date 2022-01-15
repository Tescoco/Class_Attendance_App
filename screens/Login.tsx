import { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { signin } from "../api/signin";
import Button from "../components/Button";
import PassWordInput from "../components/PassWordInput";
import TextInput from "../components/TextInput";

import { View } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({
  navigation,
}: RootStackScreenProps<"Login">) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const details = {
    username,
    password,
  };

  const storeData = async (data: any) => {
    console.log(data);
    try {
      await AsyncStorage.setItem("data", JSON.stringify(data));
    } catch (error) {
      //  Error saving data
    }
  };

  const loginFunc = () => {
    if (username != "" && password != "") {
      setLoading(true);
      signin(details).then((data) => {
        if (data.error) {
          setLoading(false);
        } else {
          storeData({ ...data, last_SignUp: Date.now() });
          navigation.replace("Root");
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/FUNAAB_Logo.jpg")}
      />
      <TextInput username={username} setUsername={setUsername} />
      <PassWordInput setPassword={setPassword} password={password} />
      <Button loading={loading} callback={loginFunc} />
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
