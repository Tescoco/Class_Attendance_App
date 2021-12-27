import { ReactElement } from "react";
import { Text, View } from "../Themed";
import { StyleSheet } from "react-native";

interface Props {}

function Header({}: Props): ReactElement {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TODAY</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});
