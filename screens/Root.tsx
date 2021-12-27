import { StyleSheet } from "react-native";
import Card from "../components/Root/Card";
import DoughNut from "../components/Root/DoughNut";
import Header from "../components/Root/Header";
import Table from "../components/Root/Table";
import { View } from "../components/Themed";
import { RootStackScreenProps } from "../types";

export default function RootScreen({}: RootStackScreenProps<"Root">) {
  return (
    <View style={styles.container}>
      <Header />
      <DoughNut />
      <View style={styles.viewContainer}>
        <Card title={"Class Total"} content="40" />
        <Card title={"Total Present"} content="32" />
      </View>
      <Table />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  viewContainer: {
    display: "flex",
    width: "110%",
    backgroundColor: "#e4e4e4",
    flexDirection: "row",
    justifyContent: "space-around",
    height: 130,
    alignItems: "center",
  },
});
